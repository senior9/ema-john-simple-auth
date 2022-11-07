import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import { Link } from 'react-router-dom';

const Shipping = () => {
    const [user]= useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [adress,setAdress]=useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = (event) => {
        setName(event.target.value);
        setError('This is not Valid')

    }
    const handleAdressBlur = (event) => {
        setAdress(event.target.value);
        setError('This is not Valid')
    }
    const handlePhoneNumberBlur = (event) => {
        setPhone(event.target.value);
        setError('This is not Valid')

    }
    // const handleEmailBlur = (event) => {
    //     setEmail(event.target.value);
    //     setError('This is not Valid')
    // }
    const handleSubmit= (event) => {
        event.preventDefault();
        const shippingInfo = {name,email,adress, phone};
        console.log(shippingInfo);
    }



    return (
        <div className='container'>
            <h1>Shipping Adress</h1>
            <div className='login-card'>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="Name">Your Name </label><br />
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email </label><br />
                        <input value={user?.email} style={{backgroundColor:'lightGray'}} type="email"readOnly name="email" id="" required />
                    </div>
                    <div>
                        <label htmlFor="Adress">Adress </label><br />
                        <input onBlur={handleAdressBlur} type="text" name="Adress" id="" required />
                    </div>
                    <div>
                        <label htmlFor="PhoneNumber">Phone Number </label><br />
                        <input onBlur={handlePhoneNumberBlur} type="text" name="" id="" required />
                    </div> <h3 style={{ color: 'red' }}>{error}</h3>
                    <div>
                        <input className='login-button' type="submit" value="Adding Shipment" />
                    </div>
                </form><br />
               
            </div>
        </div>
    );
};
export default Shipping;