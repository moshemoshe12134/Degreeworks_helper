import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo-no-background.png';
import '../styles.css';

function Navbar({ variant }) { // Use destructuring here to get the variant prop
    const [save, setSave] = useState(!variant); // Set the initial state based on the variant prop

    return (
        <div className={save ? 'saved' : 'main'}>
            <div className="top-buttons">
                <div className="logo-container">
                    <Link to="/main">
                        <img src={logo} alt="Logo" className="header-logo" />
                    </Link>
            </div>
                <div className="title-container">
                    {save ? (
                        <Link to="/main" className="btn-saved" onClick={() => setSave(false)}>New Search</Link>
                    ) : (
                        <Link to="/saved" className="btn-main" onClick={() => setSave(true)}>Saved Items</Link>
                    )}
                    <Link to="/login" className="btn-regular">Login</Link>
                    <Link to="/aboutus" className="btn-regular">About Us</Link>
                </div>
            </div>
        </div>
    );
}


export default Navbar;

