import styled from "styled-components";

const Div = styled.div`
  margin: auto;
  width: 70%;
  margin-bottom: 30px;
`;

const Ul = styled.ul`
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  list-style: none;
  line-height: 2.5;

  & > li:before {
    content: "▹";
    color: #61dafb;
    font-size: 14px;
    line-height: 20px;
    margin-right: 10px;
  }
`;

const Centreddiv = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  gap: 10px;
  margin: 10px auto;
  margin-bottom: 25px;
  border: 1px solid white;
  border-radius: 5px;
  max-height: 240px;

  & > img {
    width: 65%;
    opacity: 0.25;
    border-radius: 3px;
  }
  & > img:hover {
    opacity: 1;
  }
  & > div {
    width: 50%;
    & > :first-child {
      font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text",
        -apple-system, system-ui, sans-serif;
    }
    & > :nth-child(2) {
      background-color: rgba(0, 212, 255, 1);
      border-radius: 3px;
      padding: 5px;
      opacity: 0.7;
      min-height: 70px;
      align-content: center;
    }
    & > :nth-child(3) {
      font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    }
    & svg {
      font-size: 20px;
    }
  }
`;

const Greentext = styled.span`
  color: rgba(0, 212, 255, 1);
  margin-right: 10px;
  font-size: 25px;
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
  padding-top: 5px;
  font-weight: 600;
`;
const Topicname = styled.span`
  color: white;
  margin-right: 20px;
  font-size: 25px;
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;

  & > div:hover {
    color: rgba(0, 212, 255, 1);
  }
`;
const Para = styled.h4`
  line-height: 1.5;
  letter-spacing: 1px;
  width: 55%;
  margin: auto;
  text-align: left;
  margin-top: 10px;
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;
`;

const Leftalign = styled.div`
  text-align: left;
`;
const Centeralign = styled.div`
  text-align: center;
  margin: auto;
  display: block;
  margin-bottom: 15px;
  width: 80%;
  max-width: 60%;

  & > Greentext {
    color: white;
  }
`;
const Rightalign = styled.div`
  text-align: left;
  position: relative;
  right: 0;
  z-index: 2;
  grid-column: 7 / -1;

  & > div:nth-child(3) {
    right: 0;
    position: absolute;
  }
`;
const Projectts = styled.span`
  display: flex;
  grid-template-columns: repeat(5, minmax(0px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
  position: relative;
  left: 10px;
  flex-wrap: wrap;

  & > a {
    color: inherit;
    text-decoration: none;
  }
  & > a:hover {
    color: rgba(0, 212, 255, 1);
  }
`;
export {
  Div,
  Greentext,
  Topicname,
  Para,
  Centreddiv,
  Ul,
  Rightalign,
  Leftalign,
  Projectts,
  Centeralign,
};
