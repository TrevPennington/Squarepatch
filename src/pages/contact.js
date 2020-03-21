import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components";
import "./contact.css"

const infoTitle = 'Questions / Comments / Concerns'
const info = 'Leave a short message below with a title and we will get back to you as soon as possible! We aim for 24 hours.'

const Title = styled.h1`
    margin: auto;
    text-align: center;
    width: 100%;
    margin-bottom: 65px;

    font-size: 2em;
    letter-spacing: 3px;
    font-style: italic;
    text-transform: uppercase;
    
`
const InfoTitle = styled.h2`
    width: 75%;
    margin: auto;
    text-align: left;

    font-weight: 500;
    font-size: 1.2em;
    margin-bottom: 16px;
    text-transform: bold;
` 

const Info = styled.p`
    width: 75%;
    margin: auto;

    font-size: 0.9em;
`

export default () => {
    return (
        <Layout location='contact'>
            <Title>
                CONTACT 👋
            </Title>
            <InfoTitle>{infoTitle}</InfoTitle>
            <Info>{info}</Info>

            <form name='contact' method='POST' className='contactForm' data-netlify="true" data-netlify-honeypot="bot-field" action='/success' >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="inquiry" />
    
                  <input id='f1' type='text' name='name' required 
                    placeholder="name*"/>

                  <input id='f6' type='email' name='address' required 
                    placeholder="email address*"/>

                  <textarea id='f5' id='message' name='message' required
                    placeholder="message*"></textarea>

                  <button id='f8' type='submit' className='submitForm' name='submit'>
                    submit!</button>
           
          </form>
        </Layout>
    )
}