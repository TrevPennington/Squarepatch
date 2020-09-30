import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 0;
`

const BannerText = styled.p`
    text-align: center;
    font-size: 15px;
    letter-spacing: 0.8px;
    margin: auto;
    width: auto;
    background-color: ${props => props.theme.colors.pastel};
    box-shadow: .5px .5px 20px rgba(0,0,0,.15);
    padding: 15px;
    padding-left: 10px;
    padding-right: 10px;
    color: #555;
`

export default () => {

    return (
    <BannerWrapper>
        <BannerText>everything is now $5 🎉 buy 3 plugins, get 20% off! (discount applied to cart at checkout)</BannerText>
    </BannerWrapper>
    )
}