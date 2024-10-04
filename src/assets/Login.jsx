import "../styles/login.css";

function login(){

    return( 
        <div className="main">  
             <form >
            <div className="titel-login"> Log in </div>
            <label>Email: </label>
            <input type="email" name="email" />
            <br/>
            <label>Password: </label>
            <input type="password" name="password"/>
            
        </form>
        </div>
       
    );
}
export default login