import {useState ,React} from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function Navbar(variant) {
    const[save, setSave] = useState(variant ? false : true);

    if(!save){
        return (
        <div class='main'>
            <div class="top-buttons">
                <Link to="/saved" className="btn-main" onClick={()=>{setSave(true)}}>See Saved Searches</Link>
                <Link to="/login" className="btn-regular" >Login</Link>
                <Link to="/aboutus" className="btn-regular" >About Us</Link>
            </div>
        </div>
        )
    }else{
        return(
        <div class='saved'>
            <div class="top-buttons">
                <Link to="/main" className="btn-saved" onClick={()=>{setSave(false)}}>Search</Link>
                <Link to="/login" className="btn-regular" >Login</Link>
                <Link to="/aboutus" className="btn-regular" >About Us</Link>
            </div>
        </div>
        )
    }
  
}

export default Navbar