
function Checkout() {
    return (
        <>

        <div className="page-title">
            <h1>Cart</h1>
        </div>



        <div className="checkout-container">

        <h4>Customer Info</h4>
            <div className="customer-information">

            <div className="labels">

             <label id="form-label">First Name :</label>
            <br/>
            <label id="form-label">Last Name :</label>
             <br/>
            <label id="form-label">Email :</label>
             <br/>
            <label id="form-label">Address :</label>
             <br/>
            <label id="form-label">Zip Code :</label>

            </div>


         <div className="inputs">

                <input id="form" type="text" name="first name"></input><br />

               
                <input id="form" type="text" name="last name"></input><br />

             
                <input id="form" type="text" name="email"></input><br />

                <input id="form" type="text" name="address"></input><br />

                <input id="form2" type="text" name="address"></input><br />

                <div className='checkout-checkboxes'>
                <input id="check" type="checkbox"></input>
                <label id="qty-label">Create Account</label>
                </div>

            </div>
            
            </div>


            <h4>Payment Info</h4>

            <div className="payment-info">
         

            <div className="labels">

            <label id="form-label">CC # :</label>
            <br/>

            <label id="form-label">CVC :</label>
             <br/>

            <label id="form-label">Expiration :</label>
             <br/>

            </div>

            <div className="inputs">

            <input id="form" type="number" name="card"></input><br />

            <input id="form2" type="text" name="number"></input><br />

            <input id="form2" type="number" name="last name"></input><br />

            <div className='checkout-checkboxes'>
                <input id="check" type="checkbox"></input>
                <label id="qty-label">Save Card</label>
                </div>

            </div>


            </div>

            <div className="confirm-button">
            <button id="confirm-button">Confirm Order</button>
            </div>

        </div>

        </>
    );
}
export default Checkout;