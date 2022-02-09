import { Div, Greentext,Topicname,Centreddiv,Rightalign, Leftalign,Projectts} from "./topicsheading"
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

export const Projects=()=>{
    return <div>
        <Div>
            <Greentext>03.</Greentext>
            <Topicname>Projects</Topicname>
        </Div>
        <Centreddiv>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2bBWGlQ8o6yN3XJQxyy_2ppUao9-jFR0fg&usqp=CAU" alt="" />
            <Rightalign>
                <Topicname>
                    <div>Practo-clone</div>
                </Topicname>
                <Rightalign>
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </Rightalign>
                <Projectts>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>JS</div>
                </Projectts>
                <div>
                <Projectts>
                    <GitHubIcon/>
                    <InsertLinkIcon/>
                </Projectts>
                </div>
            </Rightalign>
        </Centreddiv>
        <Centreddiv>
            <Leftalign>
                <Topicname>
                    <div>Practo-clone</div>
                </Topicname>
                <Leftalign>
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </Leftalign>
                <Projectts>
                <div>HTML</div>
                <div>CSS</div>
                <div>JS</div>
            </Projectts>
            </Leftalign>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2bBWGlQ8o6yN3XJQxyy_2ppUao9-jFR0fg&usqp=CAU" alt="" />
        </Centreddiv>
    </div>
}