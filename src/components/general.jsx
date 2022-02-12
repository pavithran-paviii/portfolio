import { Starbg } from "./startbg"
import { Jumpingtext } from "./jumpingtext"
import profileimage from "../images/profileimage.png"
import {Greentext} from "./topicsheading"

export const General=()=>{
    return <div id="general" >
    <div>
      <div>
      <Starbg src={profileimage}></Starbg>
      </div>
      <div id="littledesc">
        <div>
          <Greentext><h6>Hi, my name is</h6></Greentext>
          <Jumpingtext>Pavithran</Jumpingtext>
          <Jumpingtext>I build things for the web.</Jumpingtext>
          <p>
            I’m a aspiring software engineer specializing in building websites from scratch and implementing new features and digital experiences. Currently, I’m focused on building accessible, userfriendly, smooth websites and developing new skills around web3 technologies.
          </p>
        </div>
      </div>
    </div>
  </div>
}