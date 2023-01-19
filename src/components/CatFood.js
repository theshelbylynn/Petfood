import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cat2 from './images/cat2.png';
import cat3 from './images/cat3.png';
import cat4 from './images/cat4.png';
import cat5 from './images/cat5.png';



function CatFood() {
    return (

        <>
          <div className="product-container">
            
            <div className='products'>
    <div className="product-card">
       
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" id="item" src={cat2} alt="Dog Food" /> 
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
     <Card.Img variant="top" id="item" src={cat3} alt="Dog Food" /> 
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
     <Card.Img variant="top" id="item" src={cat4} alt="Dog Food" /> 
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
     <Card.Img variant="top" id="item" src={cat5} alt="Dog Food" /> 
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

export default CatFood;