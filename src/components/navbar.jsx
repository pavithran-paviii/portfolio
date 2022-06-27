import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  grid-template-columns: repeat(5, minmax(0px, 1fr));
  grid-gap: 20px;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 2;
  font-family: "Calibre", "Inter", "San Francisco", "SF Pro Text", -apple-system,
    system-ui, sans-serif;

  & span {
    color: white;
    font-size: 18px;
  }
  & span:hover {
    color: rgba(0, 212, 255, 1);
  }
`;
