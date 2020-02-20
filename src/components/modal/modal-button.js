import React, { useState } from 'react'
import { Button, Modal as BootModal, ModalHeader, ModalBody } from 'reactstrap'
import Form from '../form/form';

const ModalButton = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;

    return (
        <>
            <Button color={props.color} onClick={toggle} className={props.className}>{props.children}</Button>
            
                {props.video &&
                    <BootModal isOpen={modal} toggle={toggle} className='' external={externalCloseBtn} size="xl" centered>
                        <div className="embed-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fbZO6UBtYTg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </BootModal>
                }

                {props.form === "hotel" &&
                    <BootModal isOpen={modal} toggle={toggle} className='' external={externalCloseBtn} size="l" centered>
                        <Form 
                        title="Request to Book a Hotel" 
                        subjectTitle="New Hotel Booking Request"
                        firstName
                        lastName
                        emailAddress
                        phoneNumber
                        noOfAdults
                        noOfChildren
                        classOfHotel
                        duration
                        destination
                        budgetInNaira
                        buttonText="Get a Quote"
                        />
                    </BootModal>
                }

                {props.form === "tour" &&
                    <BootModal isOpen={modal} toggle={toggle} className='' external={externalCloseBtn} size="l" centered>
                        <Form 
                        title="Book Tour" 
                        subjectTitle="New Tour Booking Request"
                        firstName
                        lastName
                        emailAddress
                        phoneNumber
                        noOfAdults
                        noOfChildren
                        noOfActivities
                        duration={props.duration}
                        destination={props.destination}
                        budgetInNaira
                        buttonText="Start Conversation"
                        />
                    </BootModal>
                }
        </>
    )
}

export default ModalButton
