import dog10 from './images/dog10.png';
import treat10 from './images/treat10.png';
import cat9 from './images/cat9.png';

function Cart() {
    return(
        <>

        <div className="page-title">
        <h1>Cart</h1>
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

            <div className="total-section">
            
                <input id="qty" type="checkbox"></input>
                <label id="qty-label">Make this order a subscription</label>
                <h1>Total : $0.00</h1>

                <button id="shop-button">
                    Checkout
                </button>
            </div>

        </div>

        </>
    );
}

export default Cart;