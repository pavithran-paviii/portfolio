import styled from "styled-components"

export const Navbar=styled.div`
    display: flex;
    grid-template-columns: repeat(5, minmax(0px, 1fr));
    grid-gap:20px;
    position:fixed;
    top:15px;
    right:20px;
    z-index: 2;
    
    /* box-shadow: 0 10px 30px -10px rgba(2,12,27,0.7); */
    /* background-color:rgba(0,212,255,1); */
    /* padding:5px 15px;
    border-radius:10px;
    opacity:.5; */

    & span{
        color:white;
        font-size: 20px;
    }
    & span:hover{
        color:rgba(0,212,255,1);
    }
`