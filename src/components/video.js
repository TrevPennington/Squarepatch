import React from "react"
import styled from "styled-components"


const VideoStyled = styled.div `
    padding-top: 10px;
    border: none;
`

const Video = ({ video, size }) => (
    <VideoStyled>
        <video
            src={video}
            playsinline='playsinline'
            autoplay='autoplay'
            loop='true'
            width={size}
            height={size}
            scrolling='no'
           
            loading='lazy'
            muted='true'
            style={{outline: `1px solid white`,
            outlineOffset: `-1px` }}
        />
    </VideoStyled>
)
export default Video