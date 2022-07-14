import React, { component, useState, useRef, useEffect } from "react";
import { hot } from "react-hot-loader";
import {Link} from 'react-scroll';
import { Waypoint } from 'react-waypoint';
import NavBar from './NavBar/NavBar';
import ContactForm from './ContactForm/ContactForm';
import './app.css';
import img from '../Assets/k2.png';


function App() {
    return (
        <div className="App">


            <section id="home" className="flex">
                <div className="flex container">
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
                    <NavBar/>
                </div>
            </section>


            <section id="about">
                <div className="containter flex">
                    <div className="bold title">ABOUT</div>
                    <div className="title-bar"></div>
                </div>
                <div className="flex row skills-wrapper">
                    <div className="flex img-wrapper">
                        <img src={img} alt="kadon"></img>
                    </div>
                    <div className="flex text-wrap">
                        <div className="text primary bold">WORK</div>
                        <div className="text secondary">
                            I'm currently doing front-end web development and graphic design
                            for <span className="highlight bold">Patio Roof Riser </span>
                            in Springfield, OR.
                            <br/>
                            <br/>
                            I always have a side project and am constantly looking for new 
                            ways to expand my skill set.
                        </div>
                        <div className="text primary bold">PLAY</div>
                        <div className="text secondary">
                            I live in the PNW, so I do all of the things you'd expect.
                            <br/>
                            <br/>
                            I'm a rock climber, rafter, snowboarder and all around enjoyer
                            of the outdoors!
                        </div>
                    </div>
                </div>
            </section>


            <section id="portfolio">
                <div className="containter flex">
                    <div className="bold title">PROJECTS</div>
                    <div className="title-bar"></div>
                </div>
                <div className="text primary bold">NOTHING HERE YET :)</div>
            </section>
            <section id="adventures">
                <div className="containter flex">
                    <div className="bold title">ADVENTURES</div>
                    <div className="title-bar"></div>
                </div>
                <div className="text primary bold">THERE'S GONNA BE A TON OF COOL STUFF HERE!</div>
            </section>


            <section id="contact">
                <div className="containter flex">
                    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height='75' width='100%' version="1.1" xmlns="http://www.w3.org/2000/svg" className="">
                        <path d="M0 0 L50 100 L100 0 Z" fill="#7EBDC2" stroke="#7EBDC2"></path>
                    </svg>
                    <div className="bold title">CONTACT</div>
                    <div className="title-bar"></div>
                    <div className="highlight bold">Have a question or want to work together?</div>
                </div>
                <ContactForm/>
            </section>


            <footer>
            <Link to="home" spy={true} smooth={true} duration={500}>
                <div className="up-icon-wrap"><i className="fa-solid fa-angles-up"></i></div>
            </Link>                
            <div className="icon-wrap flex row">
                <a href="https://www.instagram.com/kadon_engle" title="instagram"><div className="flex icon"><i className="fa-brands fa-instagram"></i></div></a>
                <a href="https://www.facebook.com/KadonDEngle" title="facebook"><div className="flex icon"><i className="fa-brands fa-facebook-f"></i></div></a>
                <a href="https://github.com/KadonDEngle" title="github"><div className="flex icon"><i className="fa-brands fa-github"></i></div></a>
                <a href="https://www.linkedin.com/in/kadondengle" title="linkedin"><div className="flex icon"><i className="fa-brands fa-linkedin-in"></i></div></a>
            </div>
            <div className="info-box">
                <div className="footnote bold">KADON ENGLE <span className="highlight bold">©2022</span></div>
            </div>
            </footer>
        </div>
    );
}


export default hot(module)(App);