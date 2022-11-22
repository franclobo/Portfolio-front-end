import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Projects(props) {
  const {
    id, name, description, image, skills, github, demo,
  } = props;

  const generateKey = (pre) => `${pre}${new Date().getTime()}`;

  return (
    <div className="Project" id={id}>
      <div className="Project-Title">
        <h2>{name}</h2>
      </div>
      <div className="Project-Skills">
        {skills.map((skill) => (
          <p key={generateKey(skill)} className="skill">{skill}</p>
        ))}
      </div>
      <div className="Project-Image">
        <Carousel>
          {image.map((img) => (
            <div key={generateKey(img)}>
              <img src={img} alt={name} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="Project-Description">
        <p>{description}</p>
      </div>
      <div className="Project-Buttons">
        <button type="button" className="button demo">
          <a href={demo || '#'} target="_blank" rel="noreferrer">
            See live
          </a>
        </button>
        <button type="button" className="button github">
          <a href={github || '#'} target="_blank" rel="noreferrer">
            See source
          </a>
        </button>
      </div>
    </div>
  );
}

Projects.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
};

export default Projects;
