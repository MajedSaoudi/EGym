import'./Contact.css'


function Contact(){
    return(
        <div className='Contact' id='Contact'>
         <div className='Contact-bck'> 
          <div className='Contact-container'>
            
            <h1>Contact Us</h1>
            <form class="form"  action="https://formspree.io/f/xanwvjpy" method="POST">
            <input type="text" placeholder='First Name' name="first_name"/>
            <input type="text" placeholder='Second Name' name="Second_name"/>
            <input type="email" placeholder='Email' name="email"/>
            <textarea name="" id="" rows="6" Name="Message" placeholder='Write a Message ..' ></textarea>
            <button type='Submit' >Send</button>
            </form>
          </div>
          

         </div>

        </div>
    )
}
export default Contact