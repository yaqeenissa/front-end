import '../styles/Header.css';

function Header(){
    return (
      <header>
        <h1> logo </h1>
        <nav>
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