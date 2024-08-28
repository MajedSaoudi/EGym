import './nav-bar.css';
import burger from './assets/images/menu.png';
import {Link} from 'react-scroll';
import { useState } from 'react';
import close from './assets/images/closee.png';


const closetag = {
    display:'block',

}
const menubar ={
   display:'none',
}


function NavBar(){
 
  const [isOpen , setisOpen] = useState(false);
  
 

    return(
         
    <div className="Nav-bar">
          <Link to="Home" spy={true} smooth={true} duration={500}><h1 className='Logo'>EGym</h1></Link>
         
         
          <nav>
             <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
          <img src={burger} alt="" className='burger' onClick={() => setisOpen(!isOpen)} style={
            isOpen? menubar : closetag
          }/>
          <img src={close} alt="" className='close-png'onClick={() => setisOpen(!isOpen)} style={
            !isOpen? null: closetag
          }/> 
          </label>
          <ul className='nav-ul'>
           <li className='nav-li'><Link to="Home" className="nav-a" spy={true} smooth={true} duration={500}>Home</Link></li>
           <li className='nav-li'><Link to='features' className="nav-a" spy={true} smooth={true}  duration={500}> Features</Link></li>
           <li className='nav-li'><Link to="Offer" className="nav-a" spy={true} smooth={true} duration={500}>Offer</Link></li>
           <li className='nav-li'><Link to="About" className="nav-a" spy={true} smooth={true} duration={500} >About Us</Link></li>
           <li className='nav-li'><Link to="Contact" className="nav-a" spy={true} smooth={true} duration={500} Offset={1000}>Contact</Link></li>
           </ul>
           </nav>
        
        </div>


        );
}

export default NavBar;