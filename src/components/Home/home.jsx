import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { fetchProjects } from '../../redux/projects';
import ImageGeometry from './Images/image-geometry_1.svg';
import ImageGeometry1 from './Images/image_geometry_1.svg';
import ImageGeometry2 from './Images/image_geometry_2.svg';
import stackoverflow from './Images/ic_stackoverflow.svg';
import github from './Images/ic_github.svg';
import linkedin from './Images/ic_linkedin.svg';
import twitter from './Images/ic_twitter.svg';
import medium from './Images/ic_medium.svg';
import angellist from './Images/ic_angellist.svg';
import ImageGeometry7 from './Images/image_dots_with_teal.svg';
import ImageGeometry8 from './Images/image-geometry_6.svg';
import ImageGeometry9 from './Images/image-geometry_7.svg';
import Menu from './Menu';
import Navbar from './Navbar';
import './home.scss';
import Cards from './Cards';

export default function Home() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  if (projects.length === 0) {
    dispatch(fetchProjects());
  }

  const [open, setOpen] = useState(false);

  const [status, setStatus] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sir2z7j', 'template_ssw8wxj', form.current, '5xAo0GJGmMeTfUPd1')
      .then((result) => {
        // eslint-disable-next-line
        console.log(result.text);
        e.target.reset();
        setStatus('Message sent successfully');
      }, (error) => {
        // eslint-disable-next-line
        console.log(error.text);
        setStatus('Message failed to send');
      });
  };

  useEffect(() => {
    if (status === 'Message sent successfully') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const renderAlert = () => (
    <div className="alert">
      <small>Message sent successfully</small>
    </div>
  );

  return (
    <div className="Home">
      <div className="Header">
        <img src={ImageGeometry1} className="App-logo" alt="logo" />
        <div className="menu">
          <IconButton aria-label="delete" size="large" onClick={() => { setOpen(true); }}>
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
      <div className="desktop-header">
        <Navbar />
      </div>
      { open && <Menu onClose={setOpen} /> }
      <div className="Portfolio">
        <div className="Paragraph desktop">
          <div className="Paragraph-1 desktop" id="Hello">
            <h1 className="title">Francisco Borja</h1>
            <p className="presentation">Hello! I am a software developer! I can help you build a product, feature or website. Take a look of my works. If you like what you see and have a project you need coded, don’t hesitate and contact me.</p>
            <button type="button" className="button">
              <a href="#Contact" className="button-link">Start colaboration</a>
            </button>
          </div>
          <div className="image">
            <img src={ImageGeometry} className="desktop-logo" alt="logo" />
          </div>
        </div>
        <img src={ImageGeometry2} className="geometry" alt="geometry" />
      </div>
      <div className="Projects" id="Portfolio">
        <h1 className="title">Projects</h1>
        <div className="Card">
          {projects.map((card) => (
            <Cards
              key={card.id}
              id={card.id}
              name={card.name}
              image={card.image}
              skills={card.skills}
            />
          ))}
        </div>
      </div>
      <div className="About">
        <div className="About-Paragraph">
          <h1 className="title" id="About">About</h1>
          <p className="presentation">
            Business Engineer, full-stack developer.
            Interested in Web development and data science.
            Programming with React&Readux and Ruby on Rails.
            Available for hiring.
          </p>
          <div className="About-Button">
            <button type="button" className="button">
              <a href="./Images/Borja_Francisco_CV_2023.pdf" download="Borja_Francisco_CV_2023.pdf">Get my CV</a>
            </button>
          </div>
        </div>
        <div className="About-Skills">
          <div className="Languages">
            <h2 className="subtitle">Languages</h2>
            <ul className="list">
              <li className="item">Javascript</li>
              <li className="item">Ruby</li>
              <li className="item">HTML</li>
              <li className="item">CSS</li>
              <li className="item">SQL</li>
            </ul>
          </div>
          <div className="Frameworks">
            <h2 className="subtitle">Frameworks</h2>
            <ul className="list">
              <li className="item">React</li>
              <li className="item">Bootstrap</li>
              <li className="item">PostgreSQL</li>
              <li className="item">Ruby on Rails</li>
              <li className="item">RSpec</li>
              <li className="item">Capibara</li>
            </ul>
          </div>
          <div className="Skills">
            <h2 className="subtitle">Skills</h2>
            <ul className="list">
              <li className="item">Codekit</li>
              <li className="item">Github</li>
              <li className="item">GitLab</li>
              <li className="item">Terminal</li>
            </ul>
          </div>
          <img src={ImageGeometry7} className="geometry7" alt="geometry" />
        </div>
      </div>
      <div className="Contact">
        <img src={ImageGeometry1} className="App-logo" alt="logo" />
        <img src={ImageGeometry8} className="geometry8" alt="geometry" />
        <div className="Contact-Form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="Contact-Info">
              <h1 className="title" id="Contact">Get Started</h1>
              <div className="Contact-Container">
                <div className="Contact-Paragraph">
                  <p className="presentation">
                    I am always interested in hearing about
                    new projects, so if you would like to chat
                    please get in touch.
                  </p>
                </div>
              </div>
              <ul className="data">
                <div className="data-container">
                  <li className="liname">
                    <label htmlFor="name" className="namelabel">
                      Your name
                      <br />
                      <input type="text" id="name" name="user_name" placeholder="Francisco" maxLength="30" required />
                    </label>
                  </li>
                  <li className="liemail">
                    <label htmlFor="email" className="emaillabel">
                      Your email
                      <br />
                      <input type="email" id="email" name="user_email" placeholder="example@mail.com" required />
                    </label>
                  </li>
                  <li className="liphone">
                    <label htmlFor="phone" className="namelabel">
                      Your phone
                      <br />
                      <input type="text" id="phone" name="user_phone" placeholder="+593 000 000 000" maxLength="15" required />
                    </label>
                  </li>
                </div>
                <li className="limsg">
                  <div className="msglabel">Message</div>
                  <textarea className="Text" name="message" maxLength="500" required placeholder="Enter your message here..." />
                </li>
              </ul>
            </div>
            {status && renderAlert()}
            <button type="submit" className="button">Get in touch</button>
          </form>
        </div>
        <img src={ImageGeometry9} className="geometry9" alt="geometry" />
      </div>
      <div className="Footer">
        <div className="Footer-Container">
          <div className="get-cv">
            <button type="button" className="button">
              <a href="./Images/Borja_Francisco_CV_2023.pdf" download="Borja_Francisco_CV_2023.pdf">Get my Resume</a>
            </button>
          </div>
          <div className="social-media">
            <ul className="social-icons">
              <li className="social-icon">
                <a href="https://stackoverflow.com/users/19740581/francisco-borja" target="_blank" rel="noreferrer">
                  <img className="stackoverflow" src={stackoverflow} alt="stack overflow" />
                </a>
              </li>
              <li className="social-icon">
                <a href="https://github.com/franclobo" target="_blank" rel="noreferrer">
                  <img className="github" src={github} alt="github" />
                </a>
              </li>
              <li className="social-icon">
                <a href="https://twitter.com/Pancho2788" target="_blank" rel="noreferrer">
                  <img className="twitter" src={twitter} alt="twitter" />
                </a>
              </li>
              <li className="social-icon">
                <a href="https://www.linkedin.com/in/francisco-borja-lobato/" target="_blank" rel="noreferrer">
                  <img className="linkedin" src={linkedin} alt="linkedin" />
                </a>
              </li>
              <li className="social-icon">
                <a href="https://medium.com/@fjbl2788" target="_blank" rel="noreferrer">
                  <img className="medium" src={medium} alt="medium.svg" />
                </a>
              </li>
              <li className="social-icon">
                <a href="https://angel.co/u/francisco-borja-lobato" target="_blank" rel="noreferrer">
                  <img className="angellist" src={angellist} alt="angellist" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
