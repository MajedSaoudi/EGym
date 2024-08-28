import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ('./JoinUS.css');

function JoinUs (){
  useEffect(()=>{
    AOS.init({duration:3000})
},[]);
    
    
    return(
      
           <section id="JoinUs">
              <button className='Back'><Link to="/EGym">Back</Link></button>
            <div className="JoinUs">
              
               <div>
             <h1 className='Head'>Sport Gym Membership</h1>
             <p className='par'>14 days unlimited free trial No contact or credit card required</p>
             
              <div className='Cards-container'>
                 <div className='Card' data-aos="zoom-in">
                  <div>
                   <h2 className='Sessions-num'>Single Session</h2>
                   <p>Membership</p>
                   <h1 className='dollar'>$15 <p>/package</p> 
                   </h1> 
                   <p>Save 5$</p>
                   <hr></hr>
                   <ul className='Char'>
                     <li>Personalised Workout</li>
                     <li>Exercise Frim Connection</li>
                     <li>Lifestyle Plan</li>
                   </ul>
                   <button className='Choose-plan'>Choose Plan</button>
                   </div>
                 </div>
                 <div className='Card' data-aos="zoom-in">
                  <div>
                   <h2>10 Sessions Package</h2>
                   <p>Membership</p>
                   <h1 className='dollar'>$10<p>/package</p> </h1> 
                   <p>Save $30</p>
                   <hr></hr>
                   <ul className='Char'>
                     <li>Personalised Workout</li>
                     <li>Exercise Frim Connection</li>
                     <li>Lifestyle Plan</li>
                     <li>Personalised Program</li>
                   </ul>
                   <button className='Choose-plan'>Choose Plan</button>
                   </div>
              </div>
              
                 <div className='Card' data-aos="zoom-in">
                  <div>
                   <h2>40 Sessions Package</h2>
                   <p>Membership</p>
                   <h1 className='dollar'>$7<p>/package</p> </h1> 
                   <p>Save $150</p>
                   <hr></hr>
                   <ul className='Char'>
                     <li>Personalised Workout</li>
                     <li>Exercise Frim Connection</li>
                     <li>Lifestyle Plan</li>
                     <li>Personalised Program</li>
                     <li>8-12 Weeks Man</li>
                   </ul>
                   <button className='Choose-plan'>Choose Plan</button>
                 </div>
              </div>
              </div>
              </div>
           </div>
           </section>
        )
}
export default JoinUs;