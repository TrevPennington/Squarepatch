import React from "react";
import styled from "styled-components";
import Banner from "./banner.js"


const Cover = styled.div`
    height: 200px;
    width: 100%;
    @media(max-width: 900px) {
        height: 250px;
        
    }
`

const Square = styled.div`
    margin-top: 50px;

`
const Tag = styled.h5`
    font-size: 1.5em;
    font-family: montserrat;
    text-align: center;
    letter-spacing: 2.2px;
    line-height: 35px;
    
   
    @media(max-width: 900px) {
        font-size: 1em;
        width: 85%;
        margin: auto;
    }
`


export default () => {

    return (
    <Cover>
        <Banner />
        <Square>
            <Tag>clean and simple <em style={{ fontWeight: `600`, borderBottom: `2px solid peru`}}>Squarespace</em> plugins to make your site unique.</Tag>
        </Square>
        
    </Cover>
  )
}