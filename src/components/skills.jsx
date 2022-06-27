import { Greentext, Topicname, Div, Centreddiv, Ul } from "./topicsheading";

export const Skills = () => {
  return (
    <div id="skills">
      <div>
        <Div>
          <Greentext>02.</Greentext>
          <Topicname>Skills</Topicname>
        </Div>
        <Centreddiv>
          <Greentext>Front-end</Greentext>
        </Centreddiv>
        <Centreddiv>
          <Ul>
            <li>
              HTMl <i className="devicon-html5-plain" id="devicon"></i>
            </li>
            <li>
              CSS <i className="devicon-css3-plain" id="devicon"></i>
            </li>
            <li>
              JS <i className="devicon-javascript-plain" id="devicon"></i>
            </li>
            <li>
              React <i className="devicon-react-original" id="devicon"></i>
            </li>
            <li>
              Redux <i className="devicon-redux-original" id="devicon"></i>
            </li>
            <li>
              MUI <i className="devicon-materialui-plain"></i>
            </li>
          </Ul>
        </Centreddiv>
        <Centreddiv>
          <Greentext>Back-end</Greentext>
        </Centreddiv>
        <Centreddiv>
          <Ul>
            <li>
              Node JS{" "}
              <i className="devicon-nodejs-plain-wordmark" id="devicon"></i>
            </li>
            <li>
              Mongo DB <i className="devicon-mongodb-plain" id="devicon"></i>
            </li>
            <li>
              Express JS{" "}
              <i className="devicon-express-original" id="devicon"></i>
            </li>
            <li>
              Postman <i className="devicon-adonisjs-original" id="devicon"></i>
            </li>
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
            <li>
              GIT <i className="devicon-git-plain-wordmark" id="devicon"></i>
            </li>
          </Ul>
        </Centreddiv>
      </div>
    </div>
  );
};
