import React from "react";
import Banner from "./banner.js";
import styled from "styled-components";
import { Link } from "gatsby";


const Cover = styled.div`
    width: 100%;
    @media(max-width: 900px) {
        height: 350px;
    }
`

const Square = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 60%;
    margin: auto;
    margin-top: 60px;
    margin-bottom: 60px;

    @media(max-width: 1100px) {
        margin-top: 50px;
        flex-direction: column;
        width: 90%;
    }
`
const Tag = styled.h5`
    font-size: 1.2em;
    font-family: montserrat;
    text-align: left;
    width: 500px;
   
    
    letter-spacing: 1.5px;
    line-height: 40px;
    
   
    @media(max-width: 1100px) {
        font-size: 1em;
        width: 85%;
        margin: auto;
        margin-bottom: 20px;
    }
`

const Prompts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const InstructionButton = styled(Link)`
    border: 2px solid ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.grey2};
    color: ${props => props.theme.colors.text};
    padding: 15px;
    font-size: 1.1em;
    font-family: montserrat;
    font-style: italic;
    letter-spacing: 1.2px;
    margin: auto;
    margin-top: 30px;
    transition-duration: 0.15s;

    &:hover {
        transform: translateX(5px);
        transition-duration: .15s;
    }

    @media(max-width: 1100px) {
        font-size: 1em;
        margin-left: 30px;
    }
`

const PluginsPrompt = styled.p`
    margin-top: 20px;
    font-size: 1.2em;
    font-family: montserrat;
    text-align: center;
`

const Splash = styled.em`
    color: ${props => props.theme.colors.indySplashed};
    font-style: italic;
`




export default () => {

    return (
    <Cover>
        <Square>
            <Tag><em style={{ fontWeight: `600`, fontSize: `1.3em` }}><Splash>FREE </Splash>Squarespace plugins </em> to fit your branding and make your website stand out. Just copy and paste the code.</Tag>
            <Prompts>
                <InstructionButton to='/Instructions/blog/'>Instructions</InstructionButton>
                {/* <PluginsPrompt>browse Plugins</PluginsPrompt> */}
                
            </Prompts>
        </Square>
        
    </Cover>
  )
}