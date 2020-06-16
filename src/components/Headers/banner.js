import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
    
    margin: auto;
`

const BannerText = styled.p`
    text-align: center;
    font-size: 15px;
    letter-spacing: 0.8px;
    margin: auto;
    width: auto;
    //border: 1px solid green;
    background-color: ${props => props.theme.colors.pastel};
    box-shadow: .5px .5px 20px rgba(0,0,0,.15);
    padding: 4px;
    padding-left: 10px;
    padding-right: 10px;
`

export default () => {

    return (
    <BannerWrapper>
        <BannerText>everything is now $5 🎉 buy 3 plugins, get 20% off! (discount applied to cart at checkout)</BannerText>
    </BannerWrapper>
    )
}