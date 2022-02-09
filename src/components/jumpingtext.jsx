import styled from 'styled-components'

export const Jumpingtext=styled.h1`
    color:black;
    padding-right:15px;
    display:table-cell;
    /* display:inline-block; */

    &:hover{
        animation:dance 1s infinite;
        cursor:pointer;
    }

    @keyframes dance{
        0%{
            transform: translateY(0px)
        }
        50%{
            transform: translateY(-30px)
        }
        100%{
            transform: translateY(0px)
        }
    }
`