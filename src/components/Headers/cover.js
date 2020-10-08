import React from "react";
import Banner from "./banner.js";
import styled from "styled-components";
import { Link } from "gatsby";


const Cover = styled.div`
    height: 350px;
    width: 100%;
    @media(max-width: 900px) {
        height: 350px;
    }
`

const Square = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 60%;
    margin: auto;

    margin-top: 150px;
    @media(max-width: 1100px) {
        margin-top: 40px;
        flex-direction: column;
        width: 90%;
    }
`
const Tag = styled.h5`
    font-size: 1.5em;
    font-family: montserrat;
    text-align: left;
    width: 500px;
   
    
    letter-spacing: 2.2px;
    line-height: 40px;
    
   
    @media(max-width: 1100px) {
        font-size: 1em;
        width: 85%;
        margin: auto;
        margin-bottom: 50px;
    }
`

const Prompts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const InstructionButton = styled(Link)`
    background-color: ${props => props.theme.colors.text};
    color: #efefef;
    border-radius: 7px;
    padding: 15px;
    font-size: 1.2em;
    font-family: montserrat;
    max-width: 150px;
    margin: auto;
`

const PluginsPrompt = styled.p`
    margin-top: 20px;
    font-size: 1.2em;
    font-family: montserrat;
    text-align: center;
`




export default () => {

    return (
    <Cover>
        <Square>
            <Tag><em style={{ fontWeight: `600`, fontSize: `1.2em`}}>Squarespace plugins </em> to fit your branding and make your website stand out. Just copy and paste our code.</Tag>
            <Prompts>
                <InstructionButton to='/Instructions/blog/'>Instructions</InstructionButton>
                {/* <PluginsPrompt>browse Plugins</PluginsPrompt> */}
                
            </Prompts>
        </Square>
        
    </Cover>
  )
}