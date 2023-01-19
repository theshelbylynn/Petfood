import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';



function Products() {
    return(

        <div className="product-container">
        
        <div className='product-title'>
        <h1>Customer Favorites</h1>
        </div>
<div className='products'>
<div className="product-card">
   
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" id="item" src={one} alt="Dog Food" /> 
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
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" id="item" src={two} alt="Cat Treats" /> 
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
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" id="item" src={three} alt="Dog Treats" /> 
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
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" id="item" src={four} alt="Cat Food" /> 
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
    );
}

export default Products;