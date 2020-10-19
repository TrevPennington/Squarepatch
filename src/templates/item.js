import React, { useState, useEffect } from 'react';
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"
import Video from "../components/video"
import Kofi from "../components/Kofi"

import Layout from "../components/layout";

const ItemContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  font-style: italic;
  font-size: 1.9em;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  
  margin: auto;
  margin-bottom: 50px;
  margin-top: 40px;
`

const Info = styled.div`
  width: 50%;
  margin: auto;
  
  @media(max-width: 900px) {
    flex-direction: column;
    width: 90%;
    margin: auto;
    justify-self: center;
  }
`

const Description = styled.p`

  height: auto;
  width: 100%;
`

const Shadow = styled.div`
  padding: 60px;
  box-shadow: 1px 1px 40px rgba(0,0,0,0.08);
  margin: auto;
  margin-top: 50px;
  @media(max-width: 900px) {
    padding: 20px;
  }

`

const DonateBox = styled.div`
  background-color: ${props => props.theme.colors.grey2};
  // border: 2px solid ${props => props.theme.colors.indySplashed};
  box-shadow: 1px 1px 15px ${props => props.theme.colors.indySplashLight};
  border-radius: 7px;
  padding: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`

const DonateLink = styled.a`
  width: 100%;
  height: 100%;
  z-index: 10;
`

const Donate = styled.p`
  padding-bottom: 10px;
`

const FinePrint = styled.p`
  margin-top: 30px;
  padding: 10px;
  font-size: 0.9em;
  color: #777;
`

const CodeTitle = styled.h1`
  margin-bottom: 15px;
  @media (max-width: 900px) {
    margin-top: 0px;
  }
`
const Code = styled.p`
  width: 100%
  font-size: 14px;

  border-radius: 10px;
  h1 {
    font-size: 1.2em;
    font-weight: 600;
  }
`

const Bottom = styled.div`
  height: 100px;
`



function Item(props) {

    const [width, setWidth] = useState("330");

    const checkWidth = () => {
      if(window.innerWidth >= '900px') {
        setWidth("550")
      } else {
        setWidth("230")
      }
    }

    useEffect(() => {
      checkWidth()
      window.addEventListener('resize', checkWidth)
    }, []);

    const item = props.data.markdownRemark
    const siteTitle = props.data.site.siteMetadata.title

    let code
    let priceCheck = () => {
      
        code = ( 
        <>
        <CodeTitle>Copy and paste the code below - instructions found <Link to='/Instructions/blog' style={{ color:'rgba(205,133,63,1)', fontStyle: `italic`}}>here</Link></CodeTitle>
        <Code dangerouslySetInnerHTML={{ __html: item.html }} /> 
        </>
        )

      
    }

    return (
     
      <Layout location={props.location} title={siteTitle}>
        <ItemContainer>
          <Shadow>
            <Video video={item.frontmatter.video.publicURL} size={width} />
          </Shadow>
          <Info>
            <Heading>{item.frontmatter.title}</Heading>

            

            <Description>{item.frontmatter.description}</Description>
            <DonateLink href="https://ko-fi.com/trevorpennington" target="_blank">
              <DonateBox>
              
                <Donate>✌️ <em style={{fontStyle: `italic`}}>If you enjoy the plugin, consider supporting me on Kofi below to help keep the site running!</em></Donate>
                <Kofi />
              
              </DonateBox>
            </DonateLink>
            {/* CODE GO HUR */}
            {priceCheck()}
            {code}

            <FinePrint className='finePrint'>
            For Squarespace official templates only. May not work with third-party templates or in conjunction with other plugins that affect the same components. If you have any problems or questions, please <Link to='/contact' style={{ color:'#222', fontWeight:`500`, fontStyle: `italic`}}>contact us!</Link>
            </FinePrint>
          </Info>
          
        </ItemContainer>
        
        <Bottom></Bottom>
      </Layout>
      
    )
  }


export default Item;

export const pageQuery = graphql`
  query ItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        price
        id
        guid
        video {
          publicURL
        }
        image {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
