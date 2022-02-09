import styled from "styled-components"

export const Movingname=styled.div`
display:block;
    animation: shine 8s linear infinite;
    background: linear-gradient(90deg,#000,#fff,#000);
    -webkit-background-clip: text;
    background-repeat: no-repeat;
    background-size: 80%;
    font-weight: 700;
    letter-spacing: 5px;
    position: relative;
    text-align: left;
    text-transform: uppercase;
    font-size:20px;

    @keyframes shine{
        0% {
           background-position-x: -500%;
        }
        100% {
            background-position-x: 500%;
        }
    }
`