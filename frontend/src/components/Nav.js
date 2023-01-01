import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
const Nav=()=>{
    const auth= localStorage.getItem('user');
    const navigate = useNavigate();
    const logout=()=>{
        console.warn("logout procedure called.");
        localStorage.clear();
        navigate("/signup");
    }
    
    return(
        <div>
        <img
            alt="logo"
            className="logo"
            src="https://images-platform.99static.com//Asr-N_iQyK9YWCDHZ6E8kwZxejA=/91x65:904x878/fit-in/500x500/99designs-contests-attachments/117/117626/attachment_117626303" />
        {
            auth ? <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update"> Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Log Out ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
                <ul className='nav-ul'>
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
        }
        </div>
    );
}

export default Nav;