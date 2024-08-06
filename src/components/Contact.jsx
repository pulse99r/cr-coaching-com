import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <form action="submit" className="contact__form">
        <span>
          <label htmlFor="fname">First:</label>
          <input type="text" name="fname" id="fname" placeholder='Enter first name'required/>
        </span>
        <span>
          <label htmlFor="lname">Last:</label>
          <input type="text" name="lname" id="lname" placeholder='Enter last name' required/>
        </span>
        <span>
          <label htmlFor="city">City:</label>
          <input type="text" name="city" id="city" placeholder='Enter your city' required/>
        </span>
        <span>
          <label htmlFor="website">email:</label>
          <input type="email" name="website" id="website" placeholder='Enter your email address' required/>
        </span>
        <span>
          <label htmlFor="website">Phone:</label>
          <input type="phone" name="website" id="website" placeholder='Enter your phone number (optional)'/>
        </span>
        <span>
          <label htmlFor="reason">Reason:</label>
          <select id="reason" >
            <option value="" selected>Select an option</option>
            <option value="1">General Info</option>
            <option value="1">Business Consulting</option>
            <option value="2">Personal Coaching</option>
            <option value="3">Relationship Coaching</option>
            <option value="3">About financing</option>
          </select>
        </span>
        <textarea name="detailed-info" id="" cols="87" rows="10" placeholder='Enter details of your inquiry here:'/>
 
      </form>
    </div>
  );
}

export default Contact;
