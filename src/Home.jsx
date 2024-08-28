import './home.css';
import { Link } from 'react-router-dom';

function Home (){


    return(

        <div className="Home" id='Home'>
        <div className='Home-container' >
        
          <h1 className='tag'>STEP UP YOUR</h1>
          <h1 className='mot'><h1>FITNESS </h1> WITH US</h1>
          <p className='text'>Build Your Body And Fitness With Professional Touch</p>
          
          <button className='Join-Us'><Link to="/JoinUs">JOIN US</Link></button>
      
          </div>
        </div>
    )
}

export default Home;