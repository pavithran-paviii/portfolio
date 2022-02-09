import logo from './logo.svg';
import './App.css';
import { Jumpingtext } from './components/jumpingtext';
import { Whole } from './components/wholebody';
// import Button from '@mui/material/Button';
import Button from "@mui/material/Button"
import { Navbar } from './components/navbar';
import profileimage from "./images/profileimage.png"
import { Starbg } from './components/startbg';
import { Movingname } from './components/movingname';

function App() {
  return (
    <div className="App">
      <Navbar>
      <Button variant="text">About</Button>
      <Button variant="text">Skills</Button>
      <Button variant="text">Projects</Button>
      <Button variant="text">Contact</Button>
      </Navbar>
      <div id="general">
        <div>
        <Starbg src={profileimage}></Starbg>
        </div>
        <div id="littledesc">
          {/* <Movingname>HI I'M PAVITHRAN...</Movingname>
          <p>A Full Stack Web Developer based in India. A creative coder who specializes in MERN stack. I make it my mission to design pixel-perfect websites or applications with optimized code that run blazing fast.</p> */}
          <div>
            <Jumpingtext>HI I'M PAVITHRAN...</Jumpingtext>
            <Jumpingtext>I'M A FULL STACK WEB DEVELOPER</Jumpingtext>
          </div>
        </div>
      </div>

      {/* <Whole>
      <div>
      <Jumpingtext>H</Jumpingtext>
      <Jumpingtext>E</Jumpingtext>
      <Jumpingtext>L</Jumpingtext>
      <Jumpingtext>L</Jumpingtext>
      <Jumpingtext>O</Jumpingtext>
      </div>
      </Whole> */}
    </div>
  );
}

export default App;