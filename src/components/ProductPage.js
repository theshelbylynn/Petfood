import example from './images/example.png';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cat9 from './images/cat9.png';
import dog7 from './images/dog7.png';
import treat10 from './images/treat10.png';
import treat13 from './images/treat13.png';
import reviewera from './images/reviewer-a.png';
import reviewerb from './images/reviewer-b.png';
import stars from './images/stars.png';


function ProductPage() {
    return (
        <>
    <div className="product-page-container">

        <div className='product-gallery'>
        <img id="example" src={example} alt="product gallery example" />

        </div>

        <div className='product-description'>
            <h3>Product Title</h3>
            <h4>$0.00</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet, velit at tristique tincidunt, leo diam maximus diam, vitae lacinia ex leo quis enim. Suspendisse rutrum metus augue.</p>

            <form>
                <label id="qty-label">Qty.</label>
                <input id="qty"></input>
            </form>

            <div className='product-page-button'>
            <button id="add-to-cart">Add to Cart</button>
            </div>
        </div>

    </div>

    <div className="related-product-section">

        <div className='related-products'>
    
        
        <div className='related-title'>
        <h1>Customer Favorites</h1>
        </div>
<div className='products'>
<div className="product-card">
   
        <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" id="item" src={dog7} alt="Dog Food" /> 
      <Card.Body>
        <Card.Title id="product-title">Card Title</Card.Title>
        <Card.Text>
        $ 0.00
        </Card.Text>
        <Button id="product-button">Add to Cart</Button>
      </Card.Body>
    </Card>
</div>

<div className="product-card">
    <Card style={{ width: '14rem' }}>
    <Card.Img variant="top" id="item" src={treat10} alt="Cat Treats" /> 
      <Card.Body>
        <Card.Title id="product-title">Card Title</Card.Title>
        <Card.Text>
        $ 0.00
        </Card.Text>
        <Button id="product-button">Add to Cart</Button>
      </Card.Body>
    </Card>
</div>

<div className="product-card">
    <Card style={{ width: '14rem' }}>
    <Card.Img variant="top" id="item" src={treat13} alt="Dog Treats" /> 
      <Card.Body>
        <Card.Title id="product-title">Card Title</Card.Title>
        <Card.Text>
        $ 0.00
        </Card.Text>
        <Button id="product-button">Add to Cart</Button>
      </Card.Body>
    </Card>
</div>

<div className="product-card">
    <Card style={{ width: '14rem' }}>
    <Card.Img variant="top" id="item" src={cat9} alt="Cat Food" /> 
      <Card.Body>
        <Card.Title id="product-title">Card Title</Card.Title>
        <Card.Text>
        $ 0.00
        </Card.Text>
        <Button id="product-button">Add to Cart</Button>
      </Card.Body>
    </Card>
</div>
</div>
        
        </div>


        </div>


        <div className='review-section'>

        <div className='product-title'>
                <h1>Reviews</h1>
                </div>

            <div className='review'>
                <div className='review-image'>
                <img id="review" src={reviewera} alt="Reviewer One" />

                <p>Parker Renyolds</p>

                <img id="stars" src={stars} alt="rating stars" />

                
                </div>
            <div className='review-text'>
            “Their scheduling options are super convenient, that way my kiddos never run out of their favorites.”
            </div>
            </div>

            <div className='review'>
                <div className='review-image'>
                <img id="review" src={reviewerb} alt="Reviewer Two" />

                <p>Mia Hernandez</p>

                <img id="stars" src={stars} alt="Rating stars" />

                
                </div>
            <div className='review-text'>
            “I don’t know what I would do without this company! It’s the only place that sells the treats my fur baby loves!”
            </div>
            </div>


        </div>

        </>
    );
}

export default ProductPage;