import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";

const ItemThumbnailStyled = styled.div`
    box-shadow: 1px 1px 40px rgba(0,0,0,0.08);
    border-radius: 15px;
    width: 100%;
    max-width: 500px;
    height: auto;
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
        border: 2px solid ${props => props.theme.colors.indySplashing};

    }
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
    width: 100%;
    height: auto;
    display: grid;
    grid-template-rows: 2fr 1fr;
    justify-items: center;
    align-items: center;
    border-radius: 15px;
`

const Heading = styled.h3`
    font-size: 1.2em;
    font-weight: 500;
    text-align: center;
    padding: 10px;
`

const Date = styled.h2`
    font-size: 0.9em;
    align-self: start;
    color: ${props => props.theme.colors.secondaryAccent};
`

const blogThumbnail = (props) => {
    return (
        <ItemThumbnailStyled className='item'>
            <LinkStyled to={props.link}>
                <Title className='itemTitle'>
                    <Heading>{props.heading}</Heading>
                    <Date>{props.date}</Date>
                </Title>
            </LinkStyled>
        </ItemThumbnailStyled>
    )
}

export default blogThumbnail;