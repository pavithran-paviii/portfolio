import styled from "styled-components"

export const Sidebar=styled.div`
    display: grid;
    grid-template-rows: repeat(5,minmax(0px,1fr));
    grid-gap: 20px;
    position: fixed;
    bottom: 20px;
    left:20px;
    z-index: 1;
    
    &>a{
        text-decoration: none;
        color: inherit;
        display: inline-block;
    }

    &>a:hover{
        color:rgba(0,212,255,1);
        transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
        position: relative;
    }
`