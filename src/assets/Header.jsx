import '../styles/Header.css';
import logo from "../images/logo1.jpeg"

function Header(){
    return (
      <header className='head'>
        <div className="logo-username">
          <img alt="logo" src={logo} className="logo"/>
          <h1> Welcome , user name  </h1>
        </div>
        <nav >
          <ul className="navbar">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="">NEW IN</a>
            </li>
            <li>
              <a href="">FAVOURITE</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
             <a href="/signup">SIGN UP</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;