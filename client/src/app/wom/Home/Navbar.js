import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const innernav = document.querySelector(".inner-nav");
    if (innernav) {
      if (showNav) {
        innernav.style.left = "0px";
      } else {
        innernav.style.left = "-300px";
      }
    }
  }, [showNav]);

  const handleClick = () => {
    setShowNav(!showNav);
  };

  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#fff',
    position: 'relative'
  };

  const hamburgerStyle = {
    cursor: 'pointer',
    width: '30px',
    height: '30px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const imgStyle = {
    width: '50px',
    height: '50px'
  };

  const menuStyle = {
    position: 'fixed',
    top: '60px',
    left: '-300px',
    width: '300px',
    height: '100%',
    backgroundColor: '#333',
    transition: 'left 0.3s ease-in-out',
    zIndex: 1,
    display: showNav ? 'block' : 'none'
  };

  const innerNavStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px'
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
  };

  const navLinkStyle = {
    padding: '10px 20px',
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#0e2a47',
    borderRadius: '5px',
    margin: '5px 10px'
  };

  return (
    <div className="navbar" style={navbarStyle}>
     
      <div className="logo" style={logoStyle}>
        <img src="https://i-cdn.apsgo.com/cdn/ixIr4Z6kjFikqy9QhPW73k3UW79bxY0sqbhUJikM.webp" style={imgStyle} alt="" />      
        <nav className="menu" style={menuStyle}>
          <ul className="inner-nav" style={innerNavStyle}>
            {/* <li><a href="#hub">Hub</a></li>
                <li><a href="#mint">Mint</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#socials">Socials</a></li> */}
          </ul>
        </nav>
      </div>
      <div className="button" style={buttonStyle}>
        <NavLink to="/session/VendorSignup" style={navLinkStyle}>Joining as a Vendor?</NavLink>
        <NavLink to="/session/UserSignup" style={navLinkStyle}>Joining as a User?  </NavLink>
      </div>
    </div>
  );
}
