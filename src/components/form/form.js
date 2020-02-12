import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Col, Row, Button, CustomInput, Form as BootForm, FormGroup, Label, Input } from 'reactstrap';

const Form = (props) => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        subject: `You have a new ${props.subjectTitle} Form | Hunta Web`,
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

    return (
        <div className="hunta-form">
            <h1 className="h1 text-center">{ props.title }</h1>
            <BootForm onSubmit={handleSubmit}>
                <Row form>
                    {props.firstName &&
                        <Col md={6}>
                            <FormGroup>
                                <Input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={handleChange} required />
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
                    {props.duration &&
                        <Col md={4}>
                            <FormGroup>
                                <CustomInput type="select" name="duration" id="duration" onChange={handleChange} required >
                                    <option value="0">Duration</option>
                                    <option value="less than a week">less than a week</option>
                                    <option value="less than a month">less than a month</option>
                                    <option value="less than 3 months">less than 3 months</option>
                                    <option value="more">more</option>
                                </CustomInput>
                            </FormGroup>
                        </Col>
                    }
                    {props.destination &&
                        <Col md={4}>
                            <FormGroup>
                                <Input type="text" name="destination" id="destination" placeholder="Destination" onChange={handleChange} required />
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
                </Row>
            </BootForm>
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
