import DogFood from './DogFood';
import CatFood from './CatFood';
import Treats from './Treats';
import two from './images/cta-two.png';


function Shop() {
    return (
        <>
        <div className="page-title">
        <h1>Premium Pet Food</h1>
        </div>

        
        <div className="filter-container">
            <div className="categories">
                <h3>Filter <i class="fa-solid fa-angle-down"></i></h3>
            </div>

            <div className="sort-by">
                <h3>Sort By <i class="fa-solid fa-angle-down"></i></h3>
            </div>
        </div>



        <div className="banner">
            <h1>Dog Food</h1>
        </div>

        <div className='product-container'>
            <DogFood />

            <div className='button-container'>
            <button id="shop-button">See More</button>
            </div>
           
        </div>

        <div className="banner">
            <h1>Cat Food</h1>
        </div>

        <div className='product-container'>
            <CatFood />
            <div className='button-container'>
            <button id="shop-button">See More</button>
            </div>
        </div>


        <div className="banner">
            <h1>Treats</h1>
        </div>

        <div className='product-container'>
            <Treats />
            <div className='button-container'>
            <button id="shop-button">See More</button>
            </div>
        </div>

        <div className='cta-two'>
            <div className='cta-image'>
            <img id="main-image" src={two} alt="dog and cat in grass" />
            </div>
            <div className='cta-text'>
            <h1>Set up Future Deliveries Today!</h1>
            <button>Schedule Delivery</button>
            </div>
        </div>
        </>
    );
}

export default Shop;