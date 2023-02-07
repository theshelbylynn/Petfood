import dog10 from './images/dog10.png';
import treat10 from './images/treat10.png';
import cat9 from './images/cat9.png';


function Schedule() {
    return(
        <>


<div className="page-title">
        <h1>Schedule Future Deliveries</h1>
        </div>

        <div className="cart-container">


        <div className="cart-item">
                <div className="item-image">
                <img id="item-image" src={dog10} alt="Dog Food" />
                </div>

                <div className="item-info">
                    <h2>Product Title</h2>

            <form>
                <label id="qty-label">Qty.</label>
                <input id="qty"></input>
            </form>

                <h4>Total : $0.00</h4>
                <button id="remove-button">
                    Remove
                </button>
                </div>
                </div>



                <div className="cart-item">
                <div className="item-image">
                <img id="item-image" src={treat10} alt="Dog Food" />
                </div>

                <div className="item-info">
                    <h2>Product Title</h2>

            <form>
                <label id="qty-label">Qty.</label>
                <input id="qty"></input>
            </form>

                <h4>Total : $0.00</h4>
                <button id="remove-button">
                    Remove
                </button>
                </div>
                </div>




                <div className="cart-item">
                <div className="item-image">
                <img id="item-image" src={cat9} alt="Dog Food" />
                </div>

                <div className="item-info">
                    <h2>Product Title</h2>

            <form>
                <label id="qty-label">Qty.</label>
                <input id="qty"></input>
            </form>

                <h4>Total : $0.00</h4>
                <button id="remove-button">
                    Remove
                </button>
                </div>
                </div>


            <div className="schedule-details">

            <select name="How Often?" id="often">
            <option value="1 Week" disabled>How Often?</option>
            <option value="1 Week">Every Week</option>
            <option value="2 Weeks">Every 2 Weeks</option>
            <option value="1 Month">Once a Month</option>
            <option value="2 Month">Every 2 Months</option>
            </select>

                <div className='schedule-input'>
                <input id="qty" type="checkbox"></input>
                <label id="qty-label">Accept Terms of Service</label>
                </div>

                <div className='schedule-input'>
                <input id="qty" type="checkbox"></input>
                <label id="qty-label">Authorize AutoPay</label>
                </div>

            </div>




            <div className="total-section">
        

                <h1>Total : $0.00</h1>

                <button id="shop-button">
                    Checkout
                </button>
            </div>

        </div>
        </>
    );
}
export default Schedule;