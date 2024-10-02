import '../styles/Register.css';
import photo from"../images/11111.jpg"

function Register(){
    return (
      <div className="main">
        <form className="re-form">
          <p>
            Don't have an account? <br />
            <strong>Sign up now to discover the latest outfits</strong>
          </p>
          <label>First Name</label>
          <input type="text" name="firstName" />
          <br />
          <label>Last Name</label>
          <input type="text" name="Last Name" />
          <br />
          <label>Gmail:</label>
          <input type="text" name="gmail" required />
          <br />
          <label>Password:</label>
          <input type="password" name="password" required />
          <br />
          <label>Confirm Password:</label>
          <input type="password" name="Confirm Password" />
          <br />
          <input type="submit" value="SIGN UP" id="button" />
          <a href='login'> Log in </a>
        </form>
        <img alt="register " src={photo} />
      </div>
    );
}
export default Register;