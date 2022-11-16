import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ImageGeometry1 from './Images/image_geometry_1.svg';
import ImageGeometry2 from './Images/image_geometry_2.svg';
import './home.css';

export default function Home() {
  return (
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
  );
}
