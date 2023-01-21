import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dog2 from './images/dog2.png';
import dog3 from './images/dog3.png';
import dog4 from './images/dog4.png';
import dog5 from './images/dog5.png';



function DogFood() {
    return (

        <>
          <div className="product-container">
            
            <div className='products'>
    <div className="product-card">
       
            <Card style={{ width: '14rem' }}>
            <a href="/ProductPage"><Card.Img variant="top" id="item" src={dog2} alt="Dog Food" /> </a>
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
       <a href="/ProductPage"> <Card.Img variant="top" id="item" src={dog3} alt="Dog Food" /> </a>
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
       <a href="/ProductPage"><Card.Img variant="top" id="item" src={dog4} alt="Dog Food" /> </a>
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
       <a href="/ProductPage"><Card.Img variant="top" id="item" src={dog5} alt="Dog Food" /> </a>
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
        
        </>

    );
}

export default DogFood;