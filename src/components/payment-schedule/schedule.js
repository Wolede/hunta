import React from 'react';
import { Table } from 'reactstrap';



const schedule = (props) => {

    const getNumberWithOrdinal = (n) => {
        var s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]) + "";
    }

    let totalInterestAmount = 0;
    let totalPrincipal = 0;
    let totalLoanPayment = 0;
    

    return (
        <Table className="schedule">
            <thead>
                <tr>
                    <th>Repayment plan</th>
                    <th>Opening Balance</th>
                    <th>Interest Amount</th>
                    <th>Principal</th>
                    <th>Total payment</th>
                </tr>
            </thead>
            <tbody>

                {                    
                    props.schedule.map((schedule, i) => {
                        totalInterestAmount += schedule.interestAmount;
                        totalPrincipal += schedule.Principal;
                        totalLoanPayment += schedule.TotalPayment;

                        return (
                            <tr key={i}>
                                <th scope="row"> {getNumberWithOrdinal(schedule.paymentId)} payment </th>
                                <td>{schedule.openBalance}</td>
                                <td>{schedule.interestAmount}</td>
                                <td>{schedule.Principal}</td>
                                <td>{schedule.TotalPayment}</td>
                            </tr>
                        )

                    })
                }

               
                <tr>
                    <td scope="row"></td>
                    <th>Total</th>
                    <td>{totalInterestAmount}</td>
                    <td>{totalPrincipal}</td>
                    <td>{totalLoanPayment}</td>
                </tr>

            </tbody>
        </Table>
    );
}



export default schedule;

{/* <h6> 1st Payment </h6>
            <h4>Opening Balance</h4>
            <h4>Interest Amount</h4>
            <h4>Principal</h4>
            <h4>Total Payment</h4>   */}