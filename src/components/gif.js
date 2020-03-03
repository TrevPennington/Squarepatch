import React from "react"
import styled from "styled-components"


const GifStyled = styled.img `
    padding-top: 0px;
    width: 330px;
    height: 330px;
    outline: 1px solid white;
    outline-offset: -1px;
    
`

const Gif = ({ gif }) => (
    <GifStyled src={gif} />
)
export default Gif