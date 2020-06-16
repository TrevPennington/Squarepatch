import React from "react";
import styled from "styled-components";
import Banner from "./banner.js"


const Cover = styled.div`
    height: 15rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 900px) {
        
        
    }
`

const Square = styled.div`
    margin-top: 40px;
    & > * {
        // background-color: ${props => props.theme.colors.indyMain};
        padding: 20px;
    }
`
const Tag = styled.h5`
    font-size: 1.2em;
    font-family: montserrat;
    text-align: center;
    letter-spacing: 2.2px;
    line-height: 35px;
   
    @media(max-width: 900px) {
        font-size: 1em;
    }
`


export default () => {

    return (
    <Cover>
        <Square>
            <Tag>clean and simple <em style={{ fontWeight: `600`, borderBottom: `2px solid peru`}}>Squarespace</em> plugins to make your site unique.</Tag>
        </Square>
        <Banner />
    </Cover>
  )
}