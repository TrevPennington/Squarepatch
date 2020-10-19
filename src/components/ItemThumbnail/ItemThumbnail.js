import React, { Component } from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Video from "../video"


const ItemThumbnailStyled = styled.div`
    box-shadow: 1px 1px 40px rgba(0,0,0,0.08);
    width: 450px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
    background: transparent;
    transition-duration: .15s;

    &:hover {

    opacity: 0.8;

`

const Heading = styled.h3`
    font-size: 1.1em;
    font-weight: 500;
    text-align: center;
    padding-left: 7%;
   
`

const LinkStyled = styled(Link)`
    width: 100%;
    height: 100%;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const VidContainer = styled.div`
      justify-self: center;

      margin: auto;
`

const Title = styled.div`
    
    letter-spacing: 1.5px;
    font-style: italic;
    font-size: 0.75em;
    color: ${props => props.theme.colors.darkGrey};
    text-transform: uppercase;
      
    width: 100%;
 
    margin-bottom: 10px;
    display: flex;
    flex-direction: column nowrap;
    align-items: flex-end;
    justify-content: space-between;
`

class itemThumbnail extends React.Component {
render() {

    return (
        <ItemThumbnailStyled>
            <LinkStyled to={this.props.link}>
                <VidContainer>
                    <Video video={this.props.video} size="300" />
                </VidContainer>
                <Title className='itemTitle'>
                    <Heading>{this.props.heading}</Heading>
                </Title>
            </LinkStyled>
        </ItemThumbnailStyled>
    )
}
}

export default itemThumbnail;