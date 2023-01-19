import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import treat2 from './images/treat2.png';
import treat3 from './images/treat3.png';
import treat4 from './images/treat4.png';
import treat5 from './images/treat5.png';



function Treats() {
    return (

        <>
          <div className="product-container">
            
            <div className='products'>
    <div className="product-card">
       
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" id="item" src={treat2} alt="Dog Food" /> 
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
     <Card.Img variant="top" id="item" src={treat3} alt="Dog Food" /> 
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
     <Card.Img variant="top" id="item" src={treat4} alt="Dog Food" /> 
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
     <Card.Img variant="top" id="item" src={treat5} alt="Dog Food" /> 
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

export default Treats;