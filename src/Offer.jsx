import './Offer.css';
import './home.css';
import React ,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Offer(){
   useEffect(()=>{
      AOS.init({duration:1000})
  },[]);
       return(
        <div className="Offer" id="Offer">
           <div className="bck">
           <div className='Home-container' data-aos="fade-up">
          <h1 className='mot2'>A BIG <h1>OFFER</h1>  FOR THIS SUMMER</h1>

           <button className='Join-Us'><Link to="/JoinUs">JOIN NOW</Link> </button>
           </div>
           </div>
        </div>
       )
}
export default Offer;