import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import seal_hover from '../assets/seal_filled.jpg';
import seal from '../assets/seal_border.jpg';

function Menu() {

    function useScrollDirection() {
      const [scrollDirection, setScrollDirection] = useState(null);
    
      useEffect(() => {
        let lastScrollY = window.pageYOffset;
    
        const updateScrollDirection = () => {
          const scrollY = window.pageYOffset;
          const direction = scrollY > lastScrollY ? "down" : "up";
          if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
            setScrollDirection(direction);
          }
          lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection); // add event listener
        return () => {
          window.removeEventListener("scroll", updateScrollDirection); // clean up
        }
      }, [scrollDirection]);
    
      return scrollDirection;
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    const [sealHover, setSealHover] = useState(false);
    const scrollDirection = useScrollDirection();
    const navigation = [
      { name: 'Work', href: '/'},
      { name: 'About', href: '/about'}
    ]
    return (
        <header className={`header ${ scrollDirection === "down" ? "hide" : "show"}`}> 
          <NavLink to='/' onClick = {() => {
                    scrollToTop();
                  }}>
            <img src={sealHover? seal_hover : seal} alt="Chinese seal" className="seal" 
              onMouseOver={() => setSealHover(true)}
              onMouseOut={() => setSealHover(false)}
              ></img>
          </NavLink>
            
          <nav role = "navigation" className="nav-bar">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  to={item.href}
                  className={({isActive}) => {
                    return (
                      'nav-item ' + (isActive ? 'active' : 'inactive')
                    );
                  }}
                  onClick = {() => {
                    scrollToTop();
                  }}
                  >{item.name}</NavLink>
              ))}
              <a className="nav-item" href="https://drive.google.com/file/d/1tCRNwoKWZLENZDcmLB1zEM7pFXf_swFM/view?usp=share_link" target="_blank" rel="noreferrer">Resume</a>
          </nav>
        </header>
    )
}

export default Menu;