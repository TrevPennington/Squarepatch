import React, { Component } from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Video from "../video"


const ItemThumbnailStyled = styled.div`
    box-shadow: 1px 1px 40px rgba(0,0,0,0.08);
    border-radius: 10px;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    background: transparent;
    transition-duration: .15s;

    &:hover {
    // transform: scale(.99);
    box-shadow: 1px 1px 40px rgba(0,0,0,.15);
    transition-duration: .15s;
`

const Heading = styled.h3`
    font-size: 1.1em;
    font-weight: 500;
    text-align: center;
    padding-left: 7%;
   
`

const LinkStyled = styled(Link)`
    width: 100%;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ImgStyled = styled.img`
    width: auto;
    height: 350px;

    @media (max-width: 930px) {
        height: 250px;
      }
`

const Price = styled.p`
    text-align: center;
    font-weight: 300;
    font-size: .9em;
    padding-right: 10%;
    letter-spacing: 2px;
`
const Free = styled(Price)`
    color: ${props => props.theme.colors.indySecond};
    font-weight: 600;
    font-size: 1.2em;
`

const Title = styled.div`
    letter-spacing: 1.5px;
    
    font-style: italic;
    font-size: 0.8em;
    text-transform: uppercase;

    width: 350px;
    height: 50px;
    display: flex;
    flex-direction: column nowrap;
    align-items: center;
    justify-content: space-between;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: ${props => props.theme.colors.pastel};
    color: ${props => props.theme.colors.text};
`

class itemThumbnail extends React.Component {
render() {
    let priceCheck = () => {
        if(this.props.price == 0) {
            return (
                <Free>FREE</Free>
            )
        } else {
            return (
                <Price>${this.props.price}</Price>
            )
        }
    }

    return (
        <ItemThumbnailStyled>
            <LinkStyled to={this.props.link}>
                <Video video={this.props.video} size="330" />
                <Title className='itemTitle'>
                <Heading>{this.props.heading}</Heading>
                
                {priceCheck()}
                </Title>
            </LinkStyled>
        </ItemThumbnailStyled>
    )
}
}

export default itemThumbnail;