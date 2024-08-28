import Logo from './assets/images/About.jpg';
import { useState } from 'react';
import './About.css';



function About(){
  const [isShowMore, setIsShowMore] = useState(false);

const toggleReadMoreLess = () => {
  setIsShowMore(!isShowMore);
};
console.log(isShowMore);
    return(
        <div className='About' id='About'>
          <div className='About-bck'>
              <img src={Logo} alt="Image contains I love Gym graphity" className='About-pic'/>
          <div className='About-par-container'>
            <div className='About-par'>
            <h1>LEARN MORE ABOUT US</h1>
            <p> 
Welcome to EGym, your ultimate destination for fitness, strength, and well-being. At EGym, we believe that everyone deserves a fit and healthy lifestyle, and we're here to help you achieve it.


Our mission is simple: to empower individuals of all fitness levels to reach their goals in a supportive, inclusive, and motivating environment.</p>
            </div>
          </div>
          </div>
        </div>
    )
}
export default About;