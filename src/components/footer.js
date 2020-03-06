import React from "react"
import styled from "styled-components";
import { PinterestAlt } from 'styled-icons/boxicons-logos/PinterestAlt';
import {Youtube } from 'styled-icons/feather/Youtube'
import { RightArrowAlt } from 'styled-icons/boxicons-regular/RightArrowAlt'

const FooterStyled = styled.div`
    width: 100%;
    height: 15vh;
    background-color: ${props => props.theme.colors.indyMain};
    padding: 10px;
    text-align: center;

    font-size: 0.9em;
    color: ${props => props.theme.colors.secondaryAccent};

    display: flex;
    flex-direction: column wrap;
    align-items: center;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
`

const SocialStyled = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
`

const Pinterest = styled(PinterestAlt)`
    &:hover {
        color: ${props => props.theme.colors.indySplash};
    }
`

const YoutubeStyled = styled(Youtube)`
    &:hover {
        color: ${props => props.theme.colors.indySplash};
    }
`

const NewsletterStyled = styled.div`
    width: 200px;
    text-align: right;
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
`

const InputStyled = styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #555;
    font-size: 0.8em;
    text-align: right;
    width: 160px;
    &:active {
        outline: none;
        
    }
    &:focus {
        outline: none;
        border-bottom: 2px solid peru;
    }
`

const ButtonStyled = styled.button`
    background-color: transparent;
    color: #333;
    width: 25px;
    &:hover {
        color: ${props => props.theme.colors.indySplash};
    }
`

const CreatorStyled = styled.div`
    align-self: flex-start;
    padding-top: 25px;
    width: 100px;
    text-align: right;
    p {
        font-size: 0.8em;
    }
`

const Footer = () => (
    <FooterStyled>
        <SocialStyled>
            <a href='https://www.pinterest.com/' style={{width:"30px"}}><Pinterest size="30px"/></a>
            <a href='#' style={{width:"30px"}}><YoutubeStyled size="30" /></a>
        </SocialStyled>

        <CreatorStyled>
            <p>created by <a href="https://www.trevorpennington.com" style={{ color:'#555'}}>Trevor Pennington</a></p>
        </CreatorStyled>



        {/* TODO: connect to MailChimp API */}
        {/* <NewsletterStyled>
            <p style={{ paddingBottom: '20px', width: '200px'}}>Sign up for %20 percent off first purchase! <p style={{ fontSize:'0.7em'}}>(we only send new products and coupons)</p></p>
            <form>
                <InputStyled type='text' placeholder='email' />
                <ButtonStyled><RightArrowAlt /></ButtonStyled>
            </form>
        </NewsletterStyled> */}


        
    </FooterStyled>
)

export default Footer