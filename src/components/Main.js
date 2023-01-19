import main from './images/main.png';

function Main() {
    return(
        <div className='main'>

        <div className='main-image'>
        <img id="main-image" src={main} alt="dog and cat in grass" />
        </div>
  
      <div className='main-content'>
        <h1>Premium Pet Food</h1>
        <button id="main-button">Click Here</button>
        </div>
      </div>
    );
}

export default Main;