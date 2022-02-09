import './App.css';
import { Jumpingtext } from './components/jumpingtext';
import Button from "@mui/material/Button"
import { Navbar } from './components/navbar';
import profileimage from "./images/profileimage.png"
import { Starbg } from './components/startbg';
import { Sidebar } from './components/sidebar';
import MouseParticles from "react-mouse-particles"
import { Skills } from './components/skills';
//icons start
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import { Aboutus } from './components/aboutus';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
//icons end
function App() {
  return (
    <div className="App">
      <MouseParticles g={.2} color="rgba(0,212,255,1)" cull="col,image-wrapper"/>
      <Navbar>
      <Button variant="text">About</Button>
      <Button variant="text">Skills</Button>
      <Button variant="text">Projects</Button>
      <Button variant="text">Contact</Button>
      </Navbar>
      <Sidebar>
          <GitHubIcon/>
          <InstagramIcon/>
          <TwitterIcon/>
          <LinkedInIcon/>
          <GoogleIcon/>
      </Sidebar>
      <div id="general">
        <div>
        <Starbg src={profileimage}></Starbg>
        </div>
        <div id="littledesc">
          <div>
            <Jumpingtext>HI I'M PAVITHRAN...</Jumpingtext>
            <Jumpingtext>FULL STACK WEB DEVELOPER</Jumpingtext>
          </div>
        </div>
      </div>
      {/* <KeyboardArrowDownIcon/> */}
      <Aboutus/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
