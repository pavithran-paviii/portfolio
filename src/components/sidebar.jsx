import styled from "styled-components";

export const Sidebar = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(0px, 1fr));
  grid-gap: 20px;
  position: fixed;
  bottom: 0;
  left: 20px;
  z-index: 1;

  & > a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
  }

  & > a:hover {
    color: rgba(0, 212, 255, 1);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
  }
`;
export const RightSidebar = styled.div`
  display: grid;
  /* grid-template-rows: repeat(5,minmax(0px,1fr)); */
  grid-gap: 10px;
  position: fixed;
  bottom: 0;
  right: 20px;
  z-index: 1;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  letter-spacing: 0.1em;

  & > a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    writing-mode: vertical-rl;

    & > svg {
      transform: rotate(90deg);
      width: 20px;
    }
  }

  & > a:hover {
    color: rgba(0, 212, 255, 1);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
  }
`;
