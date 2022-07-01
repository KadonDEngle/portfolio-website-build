import React, {useState, useEffect, useRef} from "react";
import {Link} from 'react-scroll';
import { isMobile } from "react-device-detect";

const NavBar = () => {

  const mobile = isMobile;

  const [sticky, setSticky] = useState({ isSticky: mobile, offset: 0 });
  const headerRef = useRef(null);



  if (!mobile) {
    // handle scroll event
    const handleScroll = (elTopOffset, elHeight) => {
      if (window.pageYOffset > (elTopOffset + elHeight)) {
        setSticky({ isSticky: true, offset: elHeight });
      } else {
        setSticky({ isSticky: false, offset: 0 });
      }
    };

    // add/remove scroll event listener
    useEffect(() => {
      var header = headerRef.current.getBoundingClientRect();
      const handleScrollEvent = () => {
        handleScroll(window.innerHeight - 1, header.height)
      }

      window.addEventListener('scroll', handleScrollEvent);

      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
      };
    }, []);
  }

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

    return (
        <nav id="sticky-header" className={`flex desk${sticky.isSticky ? ' fixed' : ''}`} ref={headerRef}>
            <div className={`link-wrap bold ${isActive ? "" : "visible"}`}>
                <Link to="home" spy={true} smooth={true} duration={500}> <div className="page-link" onClick={handleToggle}>Home</div> </Link>
                <Link to="about" spy={true} smooth={true} duration={500}> <div className="page-link" onClick={handleToggle}>About</div> </Link>
                <Link to="portfolio" spy={true} smooth={true} duration={500}> <div className="page-link" onClick={handleToggle}>Portfolio</div> </Link>
                <Link to="adventures" spy={true} smooth={true} duration={500}> <div className="page-link" onClick={handleToggle}>Adventures</div> </Link>
                <Link to="contact" spy={true} smooth={true} duration={500}> <div className="page-link" onClick={handleToggle}>Contact</div> </Link>
            </div>
            <i className="fa-solid fa-bars" onClick={handleToggle}></i>
        </nav>
    );
}

export default NavBar;