import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import Img from "gatsby-image"


const info = 'Squarepatch exists to brand Squarespace websites above and beyond the standard templates. We believe all website owners should be able to customize the style of our plugins to fit their branding. We welcome all suggestions for plugins and love creating custom style plugins for all who ask!'

const Title = styled.h1`
    width: auto;
    margin: auto;
    height: 15vh;
    margin-top: 90px;
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
    margin-bottom: 120px;
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