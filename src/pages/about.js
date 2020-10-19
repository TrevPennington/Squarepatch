import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import Img from "gatsby-image"
import Kofi from "../components/Kofi"
import OtherProjects from "../components/OtherProjects"


const info = 'Squarepatch exists to brand Squarespace websites above and beyond the standard templates. The plugins are as customizable as they can be so they can to fit the colors / branding of whatever site they are on. All suggestions / questions / custom code inquires are welcomed!'
const info2 = ' If you like Squarepatch, feel free to support me on Kofi and check out my other projects below!'

const AboutContainer = styled.div`
  width: 60vw;
  margin: auto;
  @media(max-width: 900px) {
    width: 90vw;
  }
`

const Title = styled.h1`
    width: auto;
    margin: auto;
    
    margin-top: 90px;
    margin-bottom: 30px;
    text-align: left;
    
    font-size: 2em;
    letter-spacing: 3px;
    font-style: italic;
    text-transform: uppercase;

    @media(max-width: 900px) {
      margin-top: 50px;
      margin-bottom: 20px;
    }
`

const Image = styled(Img)`
    width: 50vw;
    max-width: 400px;
    margin: auto;
    margin-bottom: 120px;
    margin-top: 120px;
    @media(max-width: 900px) {
      width: 85vw;
    }
`

const Info = styled.p`
    font-size: 1.2em;
    letter-spacing: .5px;
    text-align: left;
    line-height: 35px;
`
const InfoEnd = styled.p`
  font-size: 1.2em;
  letter-spacing: .5px;
  text-align: left;
  line-height: 35px;
  margin-top: 15px;
`

const KofiButton = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
`

export default () => {

    const data = useStaticQuery(graphql`
      query {
        pilgrim: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    
    return (
        <Layout location = 'about'>
          <SEO title='About Squarepatch' />
            <AboutContainer>
                <Title>about</Title>
                <Info>{info}{info2}</Info>
                <InfoEnd>-Trevor Pennington</InfoEnd>
                <KofiButton>
                  <Kofi></Kofi>
                </KofiButton>
                <OtherProjects />
                
            </AboutContainer>
                <Image fluid={data.pilgrim.childImageSharp.fluid} alt='profile' />
        </Layout>
      )
    }