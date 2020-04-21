import React from "react";
import styled from "styled-components";


const Cover = styled.div`
    height: 15rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 900px) {
        align-items: flex-start;
        height: 7.5rem;
    }
`

const Square = styled.div`

    & > * {
        background-color: ${props => props.theme.colors.indyMain};
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
    </Cover>
  )
}