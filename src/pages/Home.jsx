import {useRef} from 'react';
import '../css/Home.css'
import '../css/icons.css'
import '../components/Projects'
import down from '../assets/down.png';
import icon from '../assets/Asset 5.svg';
import gmail from '../assets/mail-2569.svg'
import linkedin from '../assets/icons8-linkedin (1).svg'
import github from '../assets/icons8-github.svg'
import handwritten from '../assets/handwritten_.png'
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function Main() {
  const ref = useRef(null);
  const scrollOnClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  
  return (
    <div className="page" id="home">
      <Header></Header>
      <main>
        <div className="intro-div">
          <div className='intro-graphic'>
            <img src={icon} className="intro-icon" alt="graphic of bear holding violin"></img>
            <div className='contact-info'>
              <a href="mailto:jacqueline_jia@brown.edu" target="_blank" rel="noreferrer">
                <img src={gmail} alt="jacqueline_jia@brown.edu" id="gmail-contact" className='icon contact-icon'></img>
              </a>
              <a href="https://www.linkedin.com/in/jacqueline-jia-50132a42/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="https://www.linkedin.com/in/jacqueline-jia-50132a42/" id="linkedin-contact" className='icon contact-icon'></img>
              </a>
              <a href="https://github.com/jackie-jia" target="_blank" rel="noreferrer">
                <img src={github} alt="https://github.com/jackie-jia" id="github-contact" className='icon contact-icon github-icon'></img>
              </a>
            </div>
          </div>
          <div className="intro-text-div">
            <div className="intro-text">
              Hi there! I'm
              <img src={handwritten} alt="Jackie" className="handwritten"></img>
            </div>
            <div className="intro-subtext">
              Software developer / neuroscientist / musician
              <br></br>
              <div className="brown-tag">
                <a href="https://www.brown.edu/" target="_blank" rel="noreferrer">
                  @ Brown University
                </a>
              </div>
            </div>
          </div>
        </div>
        <img src={down} alt="Click to see projects" className="down-arrow" onClick={scrollOnClick}></img>
        <div className='projects-div' ref={ref}>
          <Projects></Projects>
        </div>
        <Footer></Footer>
      </main>
    </div>
  );
}
  
export default Main;