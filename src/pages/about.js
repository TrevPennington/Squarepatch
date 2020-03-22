import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import Img from "gatsby-image"


const info = 'Squarepatch was born out of a desire to brand Squarespace websites beyond the standard templates. We believe all websites owners should be able to customize styles to their liking. We welcome all suggestions for plugins and love creating custom style plugins for all who ask!'

const Title = styled.h1`
    width: auto;
    margin: auto;
    height: 15vh;
    text-align: center;
    
    font-size: 2em;
    letter-spacing: 3px;
    font-style: italic;
    text-transform: uppercase;
`

const Image = styled(Img)`
    width: 50vw;
    max-width: 400px;
    margin: auto;
`

const Info = styled.p`
    margin: auto;
    width: 60vw;
    font-size: 1em;
    letter-spacing: 1.1px;
    text-align: center;
    line-height: 30px;
    margin-bottom: 10vh;
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
            <div className='aboutContainer'>
                <Title>about</Title>
                <Info>{info}</Info>
                <Info>-Trevor Pennington</Info>
                <Image fluid={data.pilgrim.childImageSharp.fluid} alt='profile' />
            </div>
        </Layout>
      )
    }