import React from "react"
import styled from "styled-components";
import { Link } from "gatsby"
import { PinterestAlt } from 'styled-icons/boxicons-logos/PinterestAlt';
import {Youtube } from 'styled-icons/feather/Youtube'
import { RightArrowAlt } from 'styled-icons/boxicons-regular/RightArrowAlt'

const FooterStyled = styled.div`
    width: 100%;
    height: 25vh;
    background-color: ${props => props.theme.colors.blk};
    text-align: center;

    font-size: 0.9em;
    color: ${props => props.theme.colors.indyMain};

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-column-gap: 10vw;

    justify-content: center;
    justify-items: center;
    align-items: center;

    padding-left: 5%;
    padding-right: 5%;
`

const SocialStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 5%;
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

const Links = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;

    grid-row-gap: 20px;
    justify-content: space-between;
    justify-items: space-between;
    align-items: space-between;
    

    > * {
    text-align: center;
    font-size: 1em;
    letter-spacing: 2.5px;
    font-style: italic;
    text-transform: uppercase;
    &:hover {
        color: ${props => props.theme.colors.indySplash};
    }
    }
`

const CreatorStyled = styled.div`
    text-align: right;
    padding-right: 5%;
    h1 {
        font-size: 0.8em;
        color: #888;
        letter-spacing: 1px;

        @media(max-width: 900px) {
            font-size: 0.5em;
            line-height: 15px;
        }
    }
`

const currentDate = new Date();

const Footer = () => (
    <FooterStyled>
        <SocialStyled>
            <a href='https://www.pinterest.com/thepenningtonco/web-design/' target="_blank" style={{width:"30px"}}><Pinterest size="30px"/></a>
            {/* <a href='#' style={{width:"30px"}}><YoutubeStyled size="30" /></a> */}
        </SocialStyled>

        <Links>
            <Link to='/'>Plugins</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
        </Links>
        <CreatorStyled>
            <h1>© Squarepatch {currentDate.getFullYear()}</h1>
            <h1>by <a href="https://www.trevorpennington.com" style={{ fontStyle: `italic`}}>Trevor Pennington</a></h1>
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