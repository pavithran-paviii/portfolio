import './App.css';
// import Button from "@mui/material/Button"
import { Navbar } from './components/navbar';
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
import { Greentext } from './components/topicsheading';
import { General } from './components/general';
import {RightSidebar} from "./components/sidebar";
import ArticleIcon from '@mui/icons-material/Article';

//icons end
function App() {
  return (
    <div className="App">
     {/* <MouseParticles g={.2} color="black" cull="col,image-wrapper"/> */}
     <div id="navbar">
      <Navbar>
          <Greentext><a href="#aboutus">01.About</a></Greentext>
          <Greentext><a href="#skills">02.Skills</a></Greentext>
          <Greentext><a href="#projects">03.Projects</a></Greentext>
          <Greentext><a href="#contactus">04.Contact</a></Greentext>     
        </Navbar>
     </div>
      <Sidebar>
          <a href="https://github.com/pavithran-paviii" target={"_blank"} rel="noreferrer"><GitHubIcon/></a>
          <a href="https://www.instagram.com/pavithran_paviii/" target={"_blank"} rel="noreferrer"><InstagramIcon/></a>
          <a href="https://twitter.com/pavithranr65" target={"_blank"} rel="noreferrer"><TwitterIcon/></a>
          <a href="https://www.linkedin.com/in/pavithranpavi/" target={"_blank"} rel="noreferrer"><LinkedInIcon/></a>
          <a href="mailto:pavithranr65@gmail.com" target={"_blank"} rel="noreferrer"><GoogleIcon/></a>
      </Sidebar>
      <RightSidebar>
          <a href="https://drive.google.com/file/d/1_0-ZVudTvkdnvP3ioEXA_GVuTMYgqL0P/view?usp=sharing" target={"_blank"} rel="noreferrer">Resume <ArticleIcon/></a>
      </RightSidebar>
      <div class="section">
        <General/>
        <Aboutus />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
