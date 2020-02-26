import React from "react"
import styled from "styled-components"


const VideoStyled = styled.div `
    padding-top: 10px;
    z-index: -1;
`

const Video = ({ video }) => (
    <VideoStyled>
        <iframe 
            src={video}
            width="330" 
            height="330" 
            scrolling='no'
            frameBorder="0" 
            class="giphy-embed" 
            allowFullScreen
        />
    </VideoStyled>
)
export default Video