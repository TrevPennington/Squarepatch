import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";

const HeaderMainStyled = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    height: 70vh;
`

const ShopName = styled.h1`
    padding: 20px;
    width: 50%;
    text-align: center;

    font-family: sans-serif;
    font-size: 2em;
    font-weight: 100;
    letter-spacing: 3.5px;
    text-transform: lowercase;
    
    @media (max-width: 600px) {
        width: 100%;
      }
`

const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
`

const headerMain = (props) => {
    return (
        <HeaderMainStyled>
            <ShopName>
                <LinkStyled to='/'>
                    {props.shopName}
                </LinkStyled>
            </ShopName>
        </HeaderMainStyled>
    )
}

export default headerMain;