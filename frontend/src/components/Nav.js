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
            <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update"> Update Products</Link></li>
                {/* <li><Link to="/logout">Log Out</Link></li> */}
                <li><Link to="/profile">Profile</Link></li>
                {/* <li><Link to="/signup">SignUp</Link></li> */}
                <li>{auth ? <Link onClick={logout} to="/signup">Log Out</Link> : <Link to="/signup">SignUp</Link>}</li>
            </ul>
        </div>
    );
}

export default Nav;