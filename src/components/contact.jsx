import { Greentext, Topicname,Div,Centeralign } from "./topicsheading"
// import maps from "../images/maps.png"
import map2 from "../images/map2.png"
export const Contact=()=>{
    return <div id="contactus">
        <div>
        <Div>
            <Centeralign>
                <Greentext>04.</Greentext>
                <Topicname>Contact</Topicname>
            </Centeralign>
            <Centeralign>
                <Greentext>Get In Touch</Greentext>
            </Centeralign>
            <Centeralign>
                I’m interested in learning opportunities especially ambitious or interesting open-source projects. However, if you have other request or question, don’t hesitate contact.
            </Centeralign>
            <Centeralign>
                To contact me feel free to use the handles at the left.
            </Centeralign>
        </Div>
        <div>
           <img src={map2} alt="mydistrictmap"></img>
        </div>
        </div>
        <div>
        <Centeralign>
                <p>
                    © 2022 | Designed & coded with 💙 by Pavithran
                </p>
            </Centeralign>
        </div>
    </div>
}