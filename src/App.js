import React, { component, useState, useRef, useEffect } from "react";
import { hot } from "react-hot-loader";
import {Link} from 'react-scroll';
import './css/app.css';

function App() {

    const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
    const headerRef = useRef(null);

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
            handleScroll(header.top, header.height)
        }

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <div className="App">
            <section id="home" className="flex header">
                <div className="flex">
                    <div className="text">
                        Hello, I'm <span className="highlight bold">Kadon Engle</span>.
                        <br/>
                        I’m currently working on refining my
                        <br/>
                        skills as a full-stack web developer.
                    </div>
                    <Link to="about" spy={true} smooth={true} duration={500}>
                        <div className="btn page-link bold" dest="about">
                            More about me
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </Link>
                    <nav id="sticky-header" className={`flex desk${sticky.isSticky ? ' fixed' : ''}`} ref={headerRef}>
                        <div className="link-wrap bold">
                            <Link to="home" spy={true} smooth={true} duration={500}> <div className="page-link">Home</div> </Link>
                            <Link to="about" spy={true} smooth={true} duration={500}> <div className="page-link">About</div> </Link>
                            <Link to="portfolio" spy={true} smooth={true} duration={500}> <div className="page-link">Portfolio</div> </Link>
                            <Link to="adventures" spy={true} smooth={true} duration={500}> <div className="page-link">Adventures</div> </Link>
                            <Link to="contact" spy={true} smooth={true} duration={500}> <div className="page-link">Contact</div> </Link>
                        </div>
                    </nav>
                </div>

            </section>
            <section id="about">
                <div className="containter flex">
                    <div className="bold title">ABOUT</div>
                    <div className="title-bar"></div>
                </div>
            </section>
            <section id="portfolio">
                <div className="containter flex">
                    <div className="bold title">PROJECTS</div>
                    <div className="title-bar"></div>
                </div>
            </section>
            <section id="adventures">
                <div className="containter flex">
                    <div className="bold title">ADVENTURES</div>
                    <div className="title-bar"></div>
                </div>
            </section>
            <section id="contact">
                <div className="containter flex">
                    <div className="bold title">CONTACT</div>
                    <div className="title-bar"></div>
                </div>
                <form id="contact-form">
                    <div className="form-group">
                        <input type="text" className="form-control" id="name-input" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email-input" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="description-input" rows="3" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </div>
    );
}


export default hot(module)(App);