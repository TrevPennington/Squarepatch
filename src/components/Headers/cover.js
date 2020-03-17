import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";


const Cover = styled.div`
    height: 85vh;
    width: 100%;
    background-color: ${props => props.theme.colors.main};
`

const Logo = styled.svg`
    width: 150px;
    height: 150px;
    padding-left: 50px;
    stroke: #333;
`

const Square = styled.div`
    margin: auto;
`

const Title = styled.h4`
    font-size: 2.2em;
    margin: auto;
    width: 100%;
    text-align: center;
    padding-top: 30vh;
    letter-spacing: 5px;
    font-weight: 500;
`

const Tag = styled.h5`
    font-size: 1.1em;
    margin: auto;
    width: 70%;
    text-align: center;
    letter-spacing: 1.7px;
    padding-top: 70px;
    line-height: 35px;
`



export default () => (
    <Cover>
        <Square>
            <Title>SQUAREPATCH</Title>
            <Tag>clean and simple <em style={{ fontWeight: `600`, borderBottom: `2px solid peru`}}>Squarespace</em> plugins to make your site unique.</Tag>
        </Square>
        {/* <svg width="200" height="200">
            <rect x="30" y="30" width="200" height="200" />
        </svg> */}
    </Cover>
)