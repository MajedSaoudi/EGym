import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Home (){


    return(

        <div className="Home" id='Home'>
        <div className='Home-container' data-aos="fade-up">
          <h1 className='tag'>STEP UP YOUR</h1>
          <h1 className='mot'><h1>FITNESS </h1> WITH US</h1>
          <p className='text'>Build Your Body And Fitness With Professional Touch</p>
          
          <Link to="/JoinUs"> <button className='Join-Us'>JOIN US</button></Link>
      
          </div>
        </div>
    )
}

export default Home;