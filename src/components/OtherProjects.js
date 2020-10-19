import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components";
import Img from "gatsby-image"

const Title = styled.h1`
    margin-bottom: 15px;
    font-size: 1.1em;
`

const AppContainer = styled.div`

`

const TagsyLink = styled.a`

`

const TagsyContainer = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 1px 1px 40px rgba(0,0,0,0.05);
    transition-duration: .15s;

    &:hover {
      transform: translateX(5px);
      transition-duration: .15s;
    }
    @media(max-width: 900px) {
      flex-direction: column;
    }
`
const TagsyIconContainer = styled.div`
    margin: 20px;
`

const TagsyIcon = styled(Img)`
    border-radius: 12px;
`
const TagsyText = styled.p`
    margin-left: 10px;
    margin-right: 10px;
    @media(max-width: 900px) {
      text-align: center;
      margin-bottom: 20px;
    }
`
 
export default () => {

    const data = useStaticQuery(graphql`
      query {
        pilgrim: file(relativePath: { eq: "tagsyicon.png" }) {
          childImageSharp {
            fixed(width: 80, height: 80) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)
    
    return (

        <AppContainer>
            <Title>Other projects :</Title>
            <TagsyLink href="https://apps.apple.com/us/app/id1529009539" target="_blank">
                <TagsyContainer>
                    <TagsyIconContainer>
                      <TagsyIcon fixed={data.pilgrim.childImageSharp.fixed} alt='kofi' />
                    </TagsyIconContainer>
                    <TagsyText>Tagsy - an iOS app for managing your Instagram hashtags and browsing lists of hashtags by location.</TagsyText>
                </TagsyContainer>
            </TagsyLink>
        </AppContainer>

      )
    }