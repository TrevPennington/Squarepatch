import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components";
import Img from "gatsby-image"

const Image = styled(Img)`
    width: 170px;
`

export default () => {

    const data = useStaticQuery(graphql`
      query {
        pilgrim: file(relativePath: { eq: "kofi.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    
    return (
        <a href="https://ko-fi.com/trevorpennington" target="_blank">
            <Image fluid={data.pilgrim.childImageSharp.fluid} alt='kofi' />
        </a>
      )
    }