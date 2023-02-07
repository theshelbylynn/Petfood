
function Checkout() {
    return (
        <>

        <div className="page-title">
            <h1>Cart</h1>
        </div>

        <div className="checkout-container">

            <div className="customer-info">
            <form>

                <label id="form-label">First Name :</label>
                <input id="form" type="text" name="first name"></input><br />

                <label id="form-label">Last Name :</label>
                <input id="form" type="text" name="last name"></input><br />

                <label id="form-label">Email :</label>
                <input id="form" type="text" name="email"></input><br />

              

            </form>
            </div>

        </div>

        </>
    );
}
export default Checkout;