import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Col, Row, Button, CustomInput, Form as BootForm, FormGroup, FormFeedback, FormText, Input } from 'reactstrap';
import successImage from '../../images/SuccessImage.png'

const Form = (props) => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        subject: `You have a new ${props.subjectTitle} | Hunta Web`,
        phoneNumber: '',
        noOfAdults: '',
        noOfChildren: '',
        noOfActivities: '',
        duration: '',
        destination: '',
        budgetInNaira: '',
        ticketPrice: '',
        flightDate: '',
        honeypot: '', // if any value received in this field, form submission will be ignored.
        message: '',
        replyTo: '@', // this will set replyTo of email to email address entered in the form
        accessKey: '73c935f4-eac3-401d-8518-0416bb1b90e7' // get your access key from https://www.staticforms.xyz
    });

    const [response, setResponse] = useState({
        type: '',
        message: ''
    });

    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
        console.log(contact);
        
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
          const res = await fetch('https://api.staticforms.xyz/submit', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: { 'Content-Type': 'application/json' }
          });
    
          const json = await res.json();
    
          if (json.success) {
            setResponse({
              type: 'success',
              message: 'Thank you for reaching out to us.'
            });
          } else {
            setResponse({
              type: 'error',
              message: json.message
            });
          }
        } catch (e) {
          console.log('An error occurred', e);
          setResponse({
            type: 'error',
            message: 'An error occured while submitting the form'
          });
        }
      };

      const clearResponse = () => {
        setResponse({ type: '', message: '' })
      }

    return (
        <div className="hunta-form">
            <h1 className="h1 text-center">{ props.title }</h1>
            <BootForm onSubmit={handleSubmit}>
                <Row form>
                    {props.firstName &&
                        <Col md={6}>
                            <FormGroup>
                                <Input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={handleChange} required />
                                <FormFeedback invalid="true">Oh noes! </FormFeedback>
                            </FormGroup>
                        </Col>
                    }
                    {props.lastName &&
                        <Col md={6}>
                            <FormGroup>
                                <Input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={handleChange} required />
                            </FormGroup>
                        </Col>
                    }
                    {props.emailAddress &&
                        <Col md={6}>
                            <FormGroup>
                                <Input type="email" name="emailAddress" id="emailAddress" placeholder="Email Address" onChange={handleChange} required />
                            </FormGroup>
                        </Col>
                    }
                    {props.phoneNumber &&
                        <Col md={6}>
                            <FormGroup>
                                <Input type="number" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                            </FormGroup>
                        </Col>
                    }
                    {props.noOfAdults &&
                        <Col md={4}>
                            <FormGroup>
                                <CustomInput type="select" name="noOfAdults" id="noOfAdults" onChange={handleChange} required >
                                    <option value="0">No. of Adults</option>
                                    <option value="1 Adult">1 Adult</option>
                                    <option value="2 Adults">2 Adults</option>
                                    <option value="3 Adults">3 Adults</option>
                                    <option value="4 Adults">4 Adults</option>
                                    <option value="5 Adults">5 Adults</option>
                                </CustomInput>
                            </FormGroup>
                        </Col>
                    }
                    {props.noOfChildren &&
                        <Col md={4}>
                            <FormGroup>
                                <CustomInput type="select" name="noOfChildren" id="noOfChildren" onChange={handleChange} required >
                                    <option value="0">No. of Children</option>
                                    <option value="1 Child">1 Child</option>
                                    <option value="2 Children">2 Children</option>
                                    <option value="3 Children">3 Children</option>
                                    <option value="4 Children">4 Children</option>
                                    <option value="5 Children">5 Children</option>
                                </CustomInput>
                            </FormGroup>
                        </Col>
                    }
                    {props.noOfActivities &&
                        <Col md={4}>
                            <FormGroup>
                                <CustomInput type="select" name="noOfActivities" id="noOfActivities" onChange={handleChange} required >
                                    <option value="0">No. of Activities</option>
                                    <option value="1 Activity">1 Activity</option>
                                    <option value="2 Activities">2 Activities</option>
                                    <option value="3 Activities">3 Activities</option>
                                    <option value="4 Activities">4 Activities</option>
                                    <option value="5 Activities">5 Activities</option>
                                </CustomInput>
                            </FormGroup>
                        </Col>
                    }
                    {props.classOfHotel &&
                        <Col md={4}>
                            <FormGroup>
                                <CustomInput type="select" name="classOfHotel" id="classOfHotel" onChange={handleChange} required >
                                    <option value="0">Class of Hotel</option>
                                    <option value="1 Star">1 Star</option>
                                    <option value="2 Stars">2 Stars</option>
                                    <option value="3 Stars">3 Stars</option>
                                    <option value="4 Stars">4 Stars</option>
                                    <option value="5 Stars">5 Stars</option>
                                </CustomInput>
                            </FormGroup>
                        </Col>
                    }
                    {props.duration &&
                        <Col md={4}>
                            <FormGroup>
                                <CustomInput type="select" name="duration" id="duration" onChange={handleChange} disabled={props.duration.length > 1 ? true : false } required >
                                    {props.duration.length > 1 ?
                                        <option value={props.duration} selected>{props.duration}</option>
                                        :
                                        <>
                                        <option value="0">Duration</option>
                                        <option value="less than a week">less than a week</option>
                                        <option value="less than a month">less than a month</option>
                                        <option value="less than 3 months">less than 3 months</option>
                                        <option value="more">more</option>
                                        </>
                                    }
                                    
                                </CustomInput>
                            </FormGroup>
                        </Col>
                    }
                    {props.destination &&
                        <Col md={4}>
                            <FormGroup>
                                <Input type="text" name="destination" id="destination" placeholder="Destination" onChange={handleChange} value={props.destination.length > 1 ? props.destination : null} disabled={props.destination.length > 1 ? true : false } required />
                            </FormGroup>
                        </Col>
                    }
                    {props.budgetInNaira &&
                        <Col md={4}>
                            <FormGroup>
                                <Input type="number" name="budgetInNaira" id="budgetInNaira" placeholder="Budget in Naira" onChange={handleChange} required />
                            </FormGroup>
                        </Col>
                    }
                    {props.ticketPrice &&
                        <Col md={4}>
                            <FormGroup>
                                <Input type="number" name="ticketPrice" id="ticketPrice" placeholder="Ticket Price (NGN)" onChange={handleChange} required />
                            </FormGroup>
                        </Col>
                    }
                    {props.flightDate &&
                        <Col md={4}>
                            <FormGroup>
                                <Input type="date" name="flightDate" id="flightDate" placeholder="Flight Date" onChange={handleChange} required />
                            </FormGroup>
                        </Col>
                    }
                    {props.message &&
                        <Col md={12}>
                            <FormGroup>
                                <Input type="textarea" name="message" id="message" placeholder="message" onChange={handleChange} required />
                            </FormGroup>
                        </Col>
                    }
                    <Col md={12}>
                        <FormGroup className="text-center">
                            <Button type="submit" color="hunta-red" size="sm">{props.buttonText}</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </BootForm>

            {/* If form submit is success */}
            {response.type === 'success' &&
                <div className="success-container">
                    <img src={successImage} alt="success-checkmark" />
                    <h5 className="h5">Email Sent!</h5>
                    <p>We'll get back to you by email as soon as possible.</p>
                    <span onClick={clearResponse} className='back-button'>Go back to form</span>
                </div>
            } 
            {/* If form submit fails */}
            {response.type === 'error' &&
                <div className="success-container">
                    <img src={successImage} alt="error-checkmark" />
                    <h5 className="h5">An error occured!</h5>
                    <p>We ran into a problem. Please try again.</p>
                    <span onClick={clearResponse} className='back-button'>Go back to form</span>
                </div>
            } 
        </div>
    )
}

export default Form

Form.propTypes = {
    firstName: PropTypes.bool,
    lastName: PropTypes.bool,
    emailAddress: PropTypes.bool,
    phoneNumber: PropTypes.bool,
    destination: PropTypes.bool,
    flightDate: PropTypes.bool,
    ticketPrice: PropTypes.bool,
    noOfAdults: PropTypes.bool,
    noOfChildren: PropTypes.bool,
    noOfActivities: PropTypes.bool,
    duration: PropTypes.bool,
    budgetInNaira: PropTypes.bool,
    classOfHotel: PropTypes.bool,
    message: PropTypes.bool,
    buttonText: PropTypes.string,
    tourName: PropTypes.string,
    tourID: PropTypes.number,
    tourLocation: PropTypes.string,
    subjectTitle: PropTypes.string
}
