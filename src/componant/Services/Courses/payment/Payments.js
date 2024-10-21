import React from 'react'
import Payment from '../../../../image/payment.png';
import './payments.css';

const Payments = () => {
    return (
        <>
            <div className="PaymentContainer">
                <div className="payment">
                    <h3>Payment Here</h3>
                </div>
                <div className="payment">
                    <p>Kishan Sharma <br /> Mo. - 7357412534</p>
                </div>
                <div className="payment">
                    <img src={Payment} alt="" />
                </div>
                <p className="payment">
                    UPI ID :- 7357412534@axl
                </p>

            </div>
        </>
    )
}

export default Payments
