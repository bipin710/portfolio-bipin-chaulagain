import React, { useRef, useEffect } from 'react';
import './Nav.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
 

function Nav() {
    let menu = useRef();
    let mobile = useRef();
    useGSAP(()=>{
        let t1 = gsap.timeline()
   t1.from("nav h1", {
    y:-100, 
    duration:1,
    opacity:0,
   })
   t1.from("nav ul li ",{
    y:-100, 
    duration:1,
    opacity:0,
    stagger:1,

   })
    })

    // Function to scroll to the top (home section)
    const scrollToTop = () => {
        scroll.scrollToTop();  // Scrolls to the top of the page
    };

    // Handle scroll button visibility
    const handleScroll = () => {
        const scrollToTopButton = document.getElementById('scrollTopBtn');
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block'; // Show the button when scrolling down
        } else {
            scrollToTopButton.style.display = 'none'; // Hide it when at the top
        }
    };

    useEffect(() => {
        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav>
            {/* PORTFOLIO Heading with Scroll to Top on Click */}
            <h1 onClick={scrollToTop}>PORTFOLIO</h1>

            {/* Desktop Menu */}
            <ul className="desttopmenu">
                <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
                    <li>HOME</li>
                </Link>
                <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
                    <li>ABOUT</li>
                </Link>
                <Link to="project" activeClass="active" spy={true} smooth={true} duration={500}>
                    <li>PROJECTS</li>
                </Link>
                <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
                    <li>CONTACT</li>
                </Link>
            </ul>

            {/* Hamburger Menu */}
            <div
                className="hamburger"
                ref={menu}
                onClick={() => {
                    mobile.current.classList.toggle('activemobile');
                    menu.current.classList.toggle('activeham');
                }}
            >
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </div>

            {/* Mobile Menu */}
            <ul className="mobilemenu" ref={mobile}>
                <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
                    <li>HOME</li>
                </Link>
                <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
                    <li>ABOUT</li>
                </Link>
                <Link to="project" activeClass="active" spy={true} smooth={true} duration={500}>
                    <li>PROJECTS</li>
                </Link>
                <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
                    <li>CONTACT</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
