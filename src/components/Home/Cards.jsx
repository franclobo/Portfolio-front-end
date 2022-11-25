import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import './home.scss';

function Cards(props) {
  const {
    id, name, image, skills,
  } = props;

  const generateKey = (pre) => `${pre}${new Date().getTime()}`;

  const [open, setOpen] = useState(false);

  return (
    <div className={`Cards card__${id}`} id={id}>
      <div className="Card-Image">
        <img src={image[0]} alt={name} />
      </div>
      <div className="Card-Background">
        <div className="Content">
          <div className="Card-Title">
            <p>{name}</p>
          </div>
          <div className="Card-Skills">
            {skills.map((skill) => (
              <p key={generateKey(skill)} className="skill">{skill}</p>
            ))}
          </div>
          <div className="Card-Buttons">
            <button id={id} type="button" className="card button" onClick={() => { setOpen(true); }}>
              See this project
            </button>
          </div>
        </div>
      </div>
      { open && <Modal onClose={setOpen} idn={id} /> }
    </div>
  );
}

Cards.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Cards;
