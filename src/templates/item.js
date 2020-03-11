// This is the template for each programmatically generated item in the shop. It will be populated with data from markdown files in the content folder.

import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components"
import Video from "../components/video"
import './item.css'

import Layout from "../components/layout";

const Heading = styled.h1`
  font-size: 2.2em;
  font-weight: 400;
  text-align: left;
  width: 100%;
  min-height: 45px;
  margin: auto;
`

const Shadow = styled.div`
  box-shadow: 1px 1px 40px rgba(0,0,0,0.08);
`

const ImgStyled = styled(Img)`
  width: 100px;
  height: 100px;
`

const Price = styled.p`
  padding: 10px;
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

// const Dropdown = styled.select`
//   display: block;
//   padding: 10px;
//   margin: 10px 0;
//   background: ${props => props.theme.colors.secondaryAccent};
//   font-weight: 700;
//   border: none;
//   outline: none;
// `
// const DropdownOption = styled.option`
//   padding: 10px;
//   background: ${props => props.theme.colors.secondaryAccent};
//   font-weight: 700;
//   border: none;
//   outline: none;
// `

const BuyButton = styled.button`
  padding: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 35px;
  width: 100px;
  border-radius: 12px;
  font-size: 0.6em;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: ${props => props.theme.colors.indySplashing};
  color: ${props => props.theme.colors.text};
  border: 2px solid  transparent;
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

class Item extends React.Component {
  // state = {
  //   selected: this.props.data.markdownRemark.frontmatter.customField.values[0].name
  // }

  // setSelected = (value) => {
  //   this.setState({ selected: value })
  // }

  // // create the string required by snipcart to allow price changes based on option chosen
  // createString = (values) => {
  //   return values.map(option => {
  //     const price = option.priceChange >= 0 ? `[+${option.priceChange}]` : `[${option.priceChange}]`
  //     return `${option.name}${price}`
  //   }).join('|')
  // }

  //  // calculate price based on option selected for display on item page
  // updatePrice = (basePrice, values) => {
  //   const selectedOption = values.find(option => option.name === this.state.selected)
  //   return (basePrice + selectedOption.priceChange).toFixed(2)
    
  // }

  render() {
    const item = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
     
      <Layout location={this.props.location} title={siteTitle}>
        <div className='itemContainer'>
          <Shadow className='shadow'>
          <Video video={item.frontmatter.video.publicURL} className='video' />
          </Shadow>
          {/* <Price>£{this.updatePrice(item.frontmatter.price, item.frontmatter.customField.values)}</Price> */}
          <div class='info'>
            <Heading>{item.frontmatter.title}</Heading>
            <Price><p>$</p>{item.frontmatter.price}</Price>
      
            {/* <Dropdown
              id={item.frontmatter.customField.name}
              onChange={(e) => this.setSelected(e.target.value)}
              value={this.state.selected}>
              {item.frontmatter.customField.values.map((option) => (<DropdownOption key={option.name}>{option.name}</DropdownOption>))}
            </Dropdown> */}
  
            <BuyButton
              className='snipcart-add-item'
              data-item-id={item.frontmatter.id}
              data-item-price={item.frontmatter.price}
              data-item-name={item.frontmatter.title}
              data-item-description={item.frontmatter.description}
              data-item-image={item.frontmatter.image.childImageSharp.fluid.src}
              data-item-url={"https://gatsby-snipcart-starter.netlify.com" + item.fields.slug} //REPLACE WITH OWN URL
              // data-item-custom1-name={item.frontmatter.customField ? item.frontmatter.customField.name : null}
              // data-item-custom1-options={this.createString(item.frontmatter.customField.values)}
              // data-item-custom1-value={this.state.selected}>
              >Add to cart
            </BuyButton>
          
            <p className='description'>{item.frontmatter.description}</p>
          </div>
        </div>

        {/* <ImgStyled fluid={item.frontmatter.image.childImageSharp.fluid} /> */}
        

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
        video {
          publicURL
        }
        gif {
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
