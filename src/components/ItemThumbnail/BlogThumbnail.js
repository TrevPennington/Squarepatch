import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
// import Video from "../video"
// import Gif from "../gif"


const ItemThumbnailStyled = styled.div`
    box-shadow: 1px 1px 40px rgba(0,0,0,0.08);
    border-radius: 15px;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    background: transparent;
    transition-duration: .15s;

    &:hover {
    transform: scale(1.02);
    box-shadow: 1px 1px 40px rgba(0,0,0,.15);
    transition-duration: .15s;

    .itemTitle {
        background-color: ${props => props.theme.colors.indySplash};

    }
`

const Heading = styled.h3`
    font-size: 1.1em;
    font-weight: 500;
    text-align: center;
    padding-left: 15%;
   
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

const Title = styled.div`
    width: 350px;
    height: 50px;
    display: flex;
    flex-direction: column nowrap;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    
`

const blogThumbnail = (props) => {
    return (
        <ItemThumbnailStyled className='item'>
            <LinkStyled to={props.link}>
                <Title className='itemTitle'>
                    <Heading>{props.heading}</Heading>
                    {/* <h2>{props.date}</h2> */}
                </Title>
            </LinkStyled>
        </ItemThumbnailStyled>
    )
}

export default blogThumbnail;