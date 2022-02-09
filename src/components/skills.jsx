import { Greentext,Topicname,Div,Centreddiv,Ul } from "./topicsheading"

export const Skills=()=>{
    return <div>
        <Div>
            <Greentext>02.</Greentext>
            <Topicname>Skills</Topicname>
        </Div>
        <Centreddiv>
            <Greentext>Front-end</Greentext>
        </Centreddiv>
        <Centreddiv>
            <Ul>
                <li>HTMl</li>
                <li>CSS</li>
                <li>JS</li>
                <li>React</li>
                <li>Redux</li>
                <li>MUI</li>
            </Ul>
        </Centreddiv>
        <Centreddiv>
            <Greentext>Back-end</Greentext>
        </Centreddiv>
        <Centreddiv>
            <Ul>
                <li>Node JS</li>
                <li>Mongo DB</li>
                <li>Express JS</li>
                <li>Postman</li>
            </Ul>
        </Centreddiv>
        <Centreddiv>
            <Greentext>Hosting</Greentext>
        </Centreddiv>
        <Centreddiv>
            <Ul>
                <li>Netlify</li>
            </Ul>
        </Centreddiv>
        <Centreddiv>
            <Greentext>Version Control</Greentext>
        </Centreddiv>
        <Centreddiv>
            <Ul>
                <li>GIT</li>
            </Ul>
        </Centreddiv>
    </div>
}