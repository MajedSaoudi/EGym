import './App.css';
import NavBar from'./Navbar.jsx';
import Home from './Home.jsx';
import Gymfeat from './gymfeat.jsx';
import Offer from './Offer.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
function App() {
 
  return (
   
   <div className='App'>
      <div className='background'>
        <header>
        <NavBar />
        </header>
        <Home />
        </div>
        <Gymfeat />
        <Offer />
        <About />
        <Contact />
        </div>
        
        
       
    
  );
}

export default App;
