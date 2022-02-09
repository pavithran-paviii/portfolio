import styled from "styled-components"

const Div=styled.div`
    /* display:flex; */
    margin:auto;
    width:55%;
    /* border:1px solid red; */
    margin-top:150px;
    margin-bottom:50px;
`

const Ul=styled.ul`
    font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    list-style: none;
    line-height:1.5;

    &>li:before{
        content: "▹";
        color: #61dafb;
        font-size: 14px;
        line-height: 20px;
        margin-right:10px;
    }
`

const Centreddiv=styled.div`
    margin:auto;
    margin-bottom:30px;
    width:55%;
    /* border:1px solid red; */
    display:flex;
    /* grid-area: 1 / 6 / -1 / -1; */

    &>img{
        /* width:55%; */
        border:1px solid green;
        opacity:0.25
        /* position: relative;
        z-index:1;
        grid-column: 1 / 8; */
    }
    &>img:hover{
        opacity:1;
        /* transition: width 0.2s, height 0.2s; */
        /* transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1); */
    }
    &>div{
        position: relative;
        z-index:2;
        width:55%
        border:1px solid blue;
    }
`

const Greentext=styled.span`
    color:rgba(0,212,255,1);
    margin-right:10px;
    font-size:20px;
    font-family:"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
    padding-top: 5px;
    /* border:1px solid red; */
`
const Topicname=styled.span`
    color:#ccd6f6;
    margin-right:10px;
    font-size:25px;
    /* font-family:"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace; */
    font-sans: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;

    &>div:hover{
        color:rgba(0,212,255,1);
    }
`
const Para=styled.p`
    line-height: 1.5;
    letter-spacing: 1px;
    border:1px solid red;
    width:55%;
    margin:auto;
    text-align:left;
    margin-top:10px;
    font-sans: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
`

const Leftalign=styled.div`
    text-align:left;
    /* border:1px solid red; */
`
const Centeralign=styled.div`
    text-align:center;
    /* border:1px solid red; */
    margin:auto;
    display:block;
    margin-bottom:15px;
    max-width:60%;

    &>Greentext{
        color:white;
    }
`
const Rightalign=styled.div`
    text-align:right;
    /* border:1px solid red; */
    position:relative;
    right:0;
    z-index:2;
    grid-column: 7 / -1;

    &> div:nth-child(3){
        right:0;
        position:absolute;
    }
`
const Projectts=styled.div`
    display: flex;
    grid-template-columns: repeat(5, minmax(0px, 1fr));
    grid-gap:20px;
    margin-top:10px
`

export {Div,Greentext,Topicname,Para,Centreddiv,Ul,Rightalign,Leftalign,Projectts,Centeralign}