import { Div, Greentext,Topicname,Centreddiv,Rightalign, Leftalign,Projectts} from "./topicsheading"
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import practo from "../images/practo-pic.png"
import interntheory from "../images/Interntheory.png"

export const Projects=()=>{
    return <div id="projects">
        <div>
        <Div>
            <Greentext>03.</Greentext>
            <Topicname>Projects</Topicname>
        </Div>
        <Centreddiv>
            <img src={practo} alt="" onClick={redirect} />
            <Rightalign>
                <Topicname>
                    <div>Practo-clone</div>
                </Topicname>
                <Rightalign>
                     A Medical Application to book consultations, order tests, and buy medicines online. 
                </Rightalign>
                <Projectts>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JS</div>
                </Projectts>
                <div>
                <Projectts>
                    <a href="https://github.com/Vaman93/Practo-Clone" target={"_blank"} rel="noreferrer"><GitHubIcon/></a>
                    <a href="https://practoclone.netlify.app/" target={"_blank"} rel="noreferrer"><InsertLinkIcon/></a>
                </Projectts>
                </div>
            </Rightalign>
        </Centreddiv>
        <Centreddiv>
            <Leftalign>
                <Topicname>
                    <div>Intern Theory</div>
                </Topicname>
                <Leftalign>
                A Website that helps students find & apply for Internships all around India.
                </Leftalign>
                <Projectts>
                <div>HTML</div>
                <div>CSS</div>
                <div>JS</div>
                <div>Express</div>
                <div>Mongo DB</div>
            </Projectts>
            <div>
                <Projectts>
                    <a href="https://github.com/pavithran-paviii/Intern-Theory-Clone" target={"_blank"} rel="noreferrer"><GitHubIcon/></a>
                    <a href="https://practoclone.netlify.app/" target={"_blank"} rel="noreferrer"><InsertLinkIcon/></a>
                </Projectts>
                </div>
            </Leftalign>
            <img src={interntheory} alt="" />
        </Centreddiv>
        </div>
    </div>
}

function redirect(){
    window.open("https://practoclone.netlify.app/")
}