import React, { useState, useEffect } from 'react';
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"
import Video from "../components/video"

import Layout from "../components/layout";

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  margin: auto;
  margin-top: 50px;
  box-shadow: 1px 1px 40px rgba(0,0,0,0.08);
  @media(max-width: 900px) {
    flex-direction: column;
    width: 90%;
  }
`

const Heading = styled.h1`
  font-style: italic;
  font-size: 1.4em;
  letter-spacing: 1.2px;
  text-transform: uppercase;


  text-align: left;
  width: 100%;
  
  margin: auto;
`

const Info = styled.div`
  width: 50%;
  height: auto;
  padding: 20px;
  
  @media(max-width: 900px) {
    flex-direction: column;
    width: 90%;
    margin: auto;
    
    justify-self: center;
  }
`

const Description = styled.p`
  padding: 10px;
  height: auto;
  width: 100%;
`

const Shadow = styled.div`
  // box-shadow: 1px 1px 40px rgba(0,0,0,0.08);
  // width: 100%;
  // height: 350px;
  box-shadow: 1px 1px 40px rgba(0,0,0,0.08);
  margin-top: 50px;
  align-self: start;
  @media(max-width: 900px) {
    align-self: center;
    margin-top: 0px;
    box-shadow: none;
    border-bottom: 1px solid #efefef;
  }

`

const ImgStyled = styled(Img)`
  width: 100px;
  height: 100px;
`

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column nowrap;
  width: 100%;
  margin-top: 20px;
`

const Price = styled.p`
  padding: 10px;
  margin-right: 20px;
  font-weight: 500;
  font-size: 1.2em;
  width: 50px;
  height: 50px;
  color: ${props => props.theme.colors.primaryColor};
  letter-spacing: 2.5px;
  display: flex;

  p {
    font-size: 0.8em;
    font-weight: 300;
  }
`

const BuyButton = styled.button`
  padding: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 35px;
  width: 100px;

  font-size: 0.6em;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: transparent;
  color: ${props => props.theme.colors.text};
  border: 2px solid #333;
  transition-duration: 0.3s;

  &:hover {
    background: ${props => props.theme.colors.indySplashed};

    border: 2px solid ${props => props.theme.colors.indySplashed};
    transition-duration: 0.3s;
  }

  &:focus {
    outline: 0;
  }
`

const Breaker = styled.div`
  width: 60%;
  // margin: auto;
  margin-left: 10px;
  border-bottom: 2px solid #555;
  margin-top: 20px;
`

const FinePrint = styled.p`
  margin-top: 30px;
  padding: 10px;
  font-size: 0.9em;
  color: #777;
`
const Free = styled.p`
  margin-left: 10px;
  margin-top: 5px;
  color: ${props => props.theme.colors.indySecond};
  font-weight: 600;
`
const CodeTitle = styled.h1`
  width: 50%;
  margin: auto;
  text-align: center;
  font-weight: 600;
  margin-bottom: 15px;
  margin-top: -120px;
  @media (max-width: 900px) {
    margin-top: 0px;
  }
`
const Code = styled.p`
  width: 300px;
  font-size: 14px;
  margin: auto;
  background-color: ${props => props.theme.colors.grey};
  padding: 20px;

  border-radius: 10px;
  h1 {
    font-size: 1.2em;
    font-weight: 600;
  }
`



function Item(props) {

    const [width, setWidth] = useState("330");

    const checkWidth = () => {
      if(window.innerWidth >= '900px') {
        setWidth("450")
      } else {
        setWidth("330")
      }
    }

    useEffect(() => {
      checkWidth();
      window.addEventListener('resize', checkWidth())
    });

    const item = props.data.markdownRemark
    const siteTitle = props.data.site.siteMetadata.title

    let code
    let priceCheck = () => {
      if(item.frontmatter.price == 0) {
        code = ( 
        <>
        <CodeTitle>copy and paste the code below, use the instructions found <Link to='/Instructions/blog' style={{ color:'#222', fontWeight:`600`, fontStyle: `italic`, backgroundColor: 'rgba(205,133,63,0.8)', padding: `2px`}}>here</Link></CodeTitle>
        <Code dangerouslySetInnerHTML={{ __html: item.html }} /> 
        </>
        )
        return (
          <Free>FREE (scroll down for code)</Free>
        )
        
      } else {
        return (
          <PriceContainer>
            <Price><p>$</p>{item.frontmatter.price}</Price>
            <BuyButton
              className='snipcart-add-item'
              data-item-id={item.frontmatter.id}
              data-item-file-guid={item.frontmatter.guid}
              data-item-price={item.frontmatter.price}
              data-item-name={item.frontmatter.title}
              data-item-description={item.frontmatter.description}
              data-item-image={item.frontmatter.image.childImageSharp.fluid.src}
              data-item-url={"https://www.squarepatch.io/" + item.fields.slug} //REPLACE WITH OWN URL
              >Add to cart
            </BuyButton>
          </PriceContainer>
        )
      }
    }

    return (
     
      <Layout location={props.location} title={siteTitle}>
        <ItemContainer>
          <Shadow>
            <Video video={item.frontmatter.video.publicURL} size={width} />
          </Shadow>
          {/* <Price>£{this.updatePrice(item.frontmatter.price, item.frontmatter.customField.values)}</Price> */}
          <Info>
            <Heading>{item.frontmatter.title}</Heading>

            {priceCheck()}

            <Description>{item.frontmatter.description}</Description>
            <Breaker></Breaker>
            <FinePrint className='finePrint'>
            **Purchase includes file with code and license for use with one website. Easy to install instructions can be found <Link to='/Instructions/blog' style={{ color:'#222', fontWeight:`500`, fontStyle: `italic`}}>here</Link>. For Squarespace official templates only. May not work with third-party templates or in conjunction with other plugins that affect the same components. All plugins are non-refundable due to the nature of the product. If you have any problems or questions, please <Link to='/contact' style={{ color:'#222', fontWeight:`500`, fontStyle: `italic`}}>contact us!</Link>
            </FinePrint>
          </Info>

          
        </ItemContainer>
        {code}
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
