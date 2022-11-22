import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { fetchProjects } from '../../redux/projects';
import ImageGeometry1 from './Images/image_geometry_1.svg';
import ImageGeometry2 from './Images/image_geometry_2.svg';
import './home.scss';
import Projects from './Project';
import Cards from './Cards';

export default function Home() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  if (projects.length === 0) {
    dispatch(fetchProjects());
  }

  return (
    <div className="Home">
      <div className="Portfolio">
        <div className="Header">
          <img src={ImageGeometry1} className="App-logo" alt="logo" />
          <div className="menu">
            <IconButton aria-label="delete" size="large">
              <MenuIcon fontSize="inherit" />
            </IconButton>
          </div>
        </div>
        <div className="Paragraph">
          <h1 className="title">Francisco Borja</h1>
          <p className="presentation">Hello! I am a software developer! I can help you build a product, feature or website. Take a look of my works. If you like what you see and have a project you need coded, don’t hesitate and contact me.</p>
        </div>
        <div className="collaboration">
          <button type="button" className="button">Start collaboration</button>
        </div>
        <img src={ImageGeometry2} className="geometry" alt="geometry" />
      </div>
      <div className="Projects">
        <h1 className="title">Projects</h1>
        <div className="Cards">
          {projects.map((project) => (
            <Cards
              key={project.id}
              id={project.id}
              name={project.name}
              image={project.image}
              skills={project.skills}
            />
          ))}
        </div>
        <div className="projects-container">
          <ul className="projects-list">
            {projects.map((project) => (
              <li key={project.id} className="project-item" id="project">
                <Projects
                  id={project.id}
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  skills={project.skills}
                  github={project.github}
                  demo={project.demo}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
