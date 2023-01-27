import image from './images/profile-image.png';

function Account() {
    return(
        <>
        <div className="page-title">
            <h1>My Account</h1>
        </div>

        <div className='upload-container'>
            
        <img id="upload" src={image} alt="Profile Image Upload" />
     
        </div>

        <div className="account-container">

            <div className="info-title">
            <h6>First Name :</h6> 
            <h6>Last Name :</h6>
            <h6>Email :</h6>
            <h6>Phone # :</h6>
            <h6>Address :</h6>
            <h6>Zip Code :</h6>
            </div>

            <div className="customer-info">
            <h5>John</h5>
            <h5>Smith</h5>
            <h5>Email@Website.com</h5>
            <h5>(000)-000-0000</h5>
            <h5>00 W. Street Address
                Somewhere, USA</h5>
            <h5>00000</h5>
            </div>

        </div>


            <div className='account-button'>
            <button id="shop-button">Edit Account</button>
            </div>
        
        </>
    );
}
export default Account;