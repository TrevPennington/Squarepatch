// This is the template for each programmatically generated item in the shop. It will be populated with data from markdown files in the content folder.

import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"
import Video from "../components/video"
import './item.css'

import Layout from "../components/layout";

const Heading = styled.h1`
  font-style: italic;
  font-size: 1.4em;
  letter-spacing: 1.2px;
  text-transform: uppercase;


  text-align: left;
  width: 100%;
  min-height: 45px;
  margin: auto;
`

const Shadow = styled.div`
  box-shadow: 1px 1px 40px rgba(0,0,0,0.08);
  height: 350px;
  margin-top: 50px;
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

  border-radius: 15px;
  h1 {
    font-size: 1.2em;
    font-weight: 600;
  }
`



class Item extends React.Component {



  render() {
    const item = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

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
     
      <Layout location={this.props.location} title={siteTitle}>
        <div className='itemContainer'>
          <Shadow className='shadow'>
            <Video video={item.frontmatter.video.publicURL} className='video' />
          </Shadow>
          {/* <Price>£{this.updatePrice(item.frontmatter.price, item.frontmatter.customField.values)}</Price> */}
          <div class='info'>
            <Heading>{item.frontmatter.title}</Heading>

            {priceCheck()}

            <p className='description'>{item.frontmatter.description}</p>
            <Breaker></Breaker>
            <FinePrint className='finePrint'>
            **Purchase includes file with code and license for use with one website. Easy to install instructions can be found <Link to='/Instructions/blog' style={{ color:'#222', fontWeight:`500`, fontStyle: `italic`}}>here</Link>. For Squarespace official templates only. May not work with third-party templates or in conjunction with other plugins that affect the same components. All plugins are non-refundable due to the nature of the product. If you have any problems or questions, please <Link to='/contact' style={{ color:'#222', fontWeight:`500`, fontStyle: `italic`}}>contact us!</Link>
            </FinePrint>
          </div>

          
        </div>
        {code}
      </Layout>
      
    )
  }
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
