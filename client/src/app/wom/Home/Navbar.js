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
    position: 'relative'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const imgStyle = {
    width: '50px',
    height: '50px'
  };


  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    // Mobile styles
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    }
  };

  const navLinkStyle = {
    padding: '10px 20px',
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#0e2a47',
    borderRadius: '5px',
    margin: '5px 10px',
    // Mobile styles
    '@media (max-width: 768px)': {
      margin: '10px 0',
    }
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <div className="logo" style={logoStyle}>
        <img src="https://i-cdn.apsgo.com/cdn/ixIr4Z6kjFikqy9QhPW73k3UW79bxY0sqbhUJikM.webp" style={imgStyle} alt="Logo" />
      </div>
      <div className="button" style={buttonStyle}>
        <NavLink to="https://work-order-manage-vendor.vercel.app/" style={navLinkStyle}>Joining as a Vendor?</NavLink>
        <NavLink to="/session/UserSignup" style={navLinkStyle}>Joining as a User?</NavLink>
      </div>
    </div>
  );
}
