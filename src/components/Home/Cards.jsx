import PropTypes from 'prop-types';

function Cards(props) {
  const {
    id, name, image, skills,
  } = props;

  const generateKey = (pre) => `${pre}${new Date().getTime()}`;

  return (
    <div className="Cards" id={id}>
      <div className="Card-Title">
        <h2>{name}</h2>
      </div>
      <div className="Card-Image">
        <img src={image[0]} alt={name} />
      </div>
      <div className="Card-Skills">
        {skills.map((skill) => (
          <p key={generateKey(skill)} className="skill">{skill}</p>
        ))}
      </div>
      <div className="Card-Buttons">
        <button type="button" className="card button">
          <a href="#project" target="_blank" rel="noreferrer">
            See project
          </a>
        </button>
      </div>
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
