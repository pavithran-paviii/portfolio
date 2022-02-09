import styled from "styled-components"

export const Sidebar=styled.div`
    display: grid;
    grid-template-rows: repeat(5,minmax(0px,1fr));
    grid-gap: 20px;
    position: fixed;
    bottom: 20px;
    left:20px;
`