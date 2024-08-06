import './Nav.css'
import { Link} from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav'>
      <div className="navbar">
        <div className="navbar__img">
          <img src="https://live.staticflickr.com/2456/3799106988_b8f0d001f4_b.jpg" alt="image" width="100px"/>
        </div>
        <div className="navbar__logo">
          <img src="#" alt="logo" />
        </div>
        <div className="navbar nav-items">
          <Link className='nav-item' to="/">Home</Link>
          <Link className='nav-item' to="about">About</Link>
          <Link className='nav-item' to="services">Services</Link>
          <Link className='nav-item' to="references">References</Link>
          <Link className='nav-item' to="contact">Contact Me</Link>
          {/* <span><Link to="/">Home</Link></span>
          <span><Link to="about">About</Link></span>
          <span><Link to="services">Services</Link></span>
          <span><Link to="references">References</Link></span>
          <span><Link to="contact">Contact Me</Link></span> */}
        </div>
      </div>
    </div>
  );
}

export default Nav;
