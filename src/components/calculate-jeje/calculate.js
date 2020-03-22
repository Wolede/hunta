import React, { useState, useEffect } from 'react';
import Schedule from "../payment-schedule/schedule";
// import ModalButton from '../modal/modal-button';

import { Col, Row, Button, CustomInput, Form as BootForm, FormGroup, FormFeedback, Input, Container } from 'reactstrap';

const Calculate = () => {
    const [jejeForm, setJejeForm] = useState({
        amount: " ",
        installments: " "
    });

    const [schedule, setSchedule] = useState([]);

    const [btnState, setBtnState] = useState();

    useEffect(() => {
        console.log(schedule);

    }, [schedule])

    const inputChangeHandler = (e) => {
        const { name, value } = e.currentTarget;

        // console.log(e.currentTarget.name, e.currentTarget.value);
        setJejeForm({
            ...jejeForm,
            [name]: value
        });
    }

    const calculateJejeHandler = () => {


        let openingBalance = jejeForm.amount;

        let installments = parseInt(jejeForm.installments);
        let principal = openingBalance / installments;
        let interestRate = 1;
        let interestCal = jejeForm.amount;
        // let interestAmount = interestCal * (interestRate / 100);




        // let interestAmount = openingBalance * (interestRate / 100);
        if (jejeForm.amount !== " " && jejeForm.installments !== " "){
            let formattedArray = []
            for (let i = 1; i <= installments; i++) {
                let interestAmount = interestCal * (interestRate / 100);
                let totalPayment = principal + interestAmount;
                console.log(interestCal)

                formattedArray.push({
                    paymentId: i,
                    openBalance: parseInt(openingBalance),
                    interest: `${i} %`,
                    Principal: principal,
                    TotalPayment: totalPayment,
                    interestAmount
                });


                interestRate++;
                totalPayment = principal + interestAmount;
                openingBalance -= parseInt(principal);
                setSchedule(formattedArray)
            };
        
        setBtnState(true);
        } else{
            setBtnState(false);
        }


        
    }



    return (

        <div>
            <BootForm className="calculate">
                <FormGroup>
                    <Input onChange={inputChangeHandler} className="calculate__input" type="number" name="amount" id="amount" placeholder="What's your budget?" required />
                </FormGroup>
                <FormGroup>
                    <CustomInput onChange={inputChangeHandler} className="calculate__input" type="select" name="installments" id="installments" required >
                        <option >Installments</option>
                        <option value="3">3 Times</option>
                        <option value="6">6 Times</option>
                        <option value="9">9 Times</option>
                    </CustomInput>
                </FormGroup>
                <Button color="hunta-red" onClick={calculateJejeHandler}> Calculate </Button>

            </BootForm>
            {
                btnState ?  <Schedule schedule={schedule} className="calculate__schedule" /> : 
                // <h4 className="h4 text-center"> Check your budget </h4> 
                null
            }
    
        </div>






    )
}

export default Calculate
