import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import Projects from './Project';
import './home.scss';

function Modal({ onClose, idn }) {
  const projects = useSelector((state) => state.projects);
  const {
    id,
    name,
    image,
    skills,
    description,
    github,
    demo,
  } = projects[idn];
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="projects-container">
          <ul className="projects-list">
            <li className="project-item" id="project">
              <button type="button" className="close" onClick={() => onClose(false)}>
                <CloseIcon />
              </button>
              <Projects
                id={id}
                name={name}
                description={description}
                image={image}
                skills={skills}
                github={github}
                demo={demo}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  idn: PropTypes.string.isRequired,
};

export default Modal;
