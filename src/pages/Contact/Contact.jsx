
import './contact.css'
const Contact = () => {

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="contactForm">
      <div className="form-container">
      <form onSubmit={onSubmit}>
        <h6>Username</h6>
        <input type="text" placeholder="For ex. viralcoder"/>
        <h6>Who Are You?</h6>
        <input type="radio" name="job" id="developer"/>
        <input type="radio" name="job" id="designer"/>
        <h6>Email</h6>
        <input type="email" placeholder="viralcoder@abc.com"/>
        <h6>Password</h6>
        <input type="password" placeholder="Minimum 6 characters"/>
        <button type='submit' class="submit">SUBMIT</button>
   </form>
      </div>
    </div>
  );
}

export default Contact;
