import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";


const Cover = styled.div`
    height: 80vh;
    width: 100%;
`

// const Logo = styled.img`
//     width: 75px;
//     height: 75px;
//     padding-left: 50px;
// `

const Title = styled.h4`
    font-size: 2.4em;
    margin: auto;
    width: 50vh;
    text-align: center;
    padding-top: 30vh;
    letter-spacing: 5px;
    font-weight: 500;
`

const Tag = styled.h5`
    font-size: 0.8em;
    margin: auto;
    width: 50vh;
    text-align: center;
    letter-spacing: 1.7px;
    padding-top: 15px;
    line-height: 20px;
`

export default () => (
    <Cover>
        {/* <Logo src={logo} alt='logo' /> */}
        <Title>SQUAREPATCH</Title>
        <Tag>clean and simple plugins to make your Squarespace site unique.</Tag>
    </Cover>
)