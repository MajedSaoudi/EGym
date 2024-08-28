import './gymfeat.css';
import flex from './assets/images/flex.png';
import Weightlifting from './assets/images/weightlifting.png';
import Cardio from './assets/images/cardio.png';
import Muscle from './assets/images/muscles.png';
import React ,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Gymfeat (){
    useEffect(()=>{
        AOS.init({duration:1000})
    },[]);
    return(
        <section id='features'>
        <div className="Features" id="Features">
            <div className='Features-container'>
            <h1 className='Header'>Features</h1>
            
            <div className='cards-container'>
         <div className='Feat-card' data-aos="zoom-in">
        <img src={flex} alt="" className='flex'/>
        
        <h1>Flex Your Muscle</h1>
        <h3 className='card-par'>Flex Your Muscle and reach new heights in your fitness journey with our Gym</h3>
        
        </div>
        <div className='Feat-card' data-aos="zoom-in">
        <img src={Weightlifting} alt="" className='flex'/>
        <h1>Weightlifting</h1>
        <p className='card-par'>Unleash your strength with our cutting-edge weightlifting equipment, designed to help you build muscle.</p>
        </div>
        <div className='Feat-card' data-aos="zoom-in">
        <img src={Cardio} alt="" className='flex'/>
        <h1>Cardio Exercise</h1>
        <p className='card-par'>Boost your heart health and burn calories with our dynamic range of cardio exercises.</p>
        </div>
        <div className='Feat-card' data-aos="zoom-in">
        <img src={Muscle} alt="" className='flex'/>
        <h1>Specific Muscle</h1>
        <h3 className='card-par'>
        Target specific muscles with precision and effectiveness using our specialized equipment.</h3>
        
        </div>
        </div>
        </div>
        </div>
        </section>
    )
}

export default Gymfeat;