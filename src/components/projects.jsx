import {
  Div,
  Greentext,
  Topicname,
  Centreddiv,
  Rightalign,
  Leftalign,
  Projectts,
} from "./topicsheading";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { projectData } from "../data/projectData.js";

export const Projects = () => {
  console.log(projectData);
  return (
    <div id="projects">
      <div>
        <Div>
          <Greentext>03.</Greentext>
          <Topicname>Projects</Topicname>
        </Div>
        <div id="projectsFlexDiv">
          {projectData.map((project) => {
            return (
              <Centreddiv key={project.name}>
                <img
                  src={project.imageLink}
                  alt={project.name}
                  onClick={(e) => redirect(e)}
                />
                <Rightalign>
                  <Topicname>
                    <div>{project.name}</div>
                  </Topicname>
                  <Rightalign>{project.description}</Rightalign>
                  <Projectts>
                    {project.techstacks.map((tech) => {
                      return <div key={tech}>{tech}</div>;
                    })}
                  </Projectts>
                  <div>
                    <Projectts>
                      <a
                        href={project.githubLink}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <GitHubIcon />
                      </a>
                      <a
                        href={project.deployedLink}
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <InsertLinkIcon />
                      </a>
                    </Projectts>
                  </div>
                </Rightalign>
              </Centreddiv>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function redirect(event) {
  const value = event.target.alt;
  var val = projectData.filter((project) => {
    return project.name.includes(value);
  });
  // console.log(val[0].deployedLink);
  window.open(val[0].deployedLink);
}
