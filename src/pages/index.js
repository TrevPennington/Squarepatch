// This is the homepage.

import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import ItemThumbnail from '../components/ItemThumbnail/ItemThumbnail';
import Layout from "../components/layout"
import SEO from "../components/seo"

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2px;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = 'data.site.siteMetadata.title'
    const items = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All items" />
      <ThumbnailsWrapper>
        {items.map(({ node }) => {
          const { title, price, video } = node.frontmatter
          return (
            <ItemThumbnail
              key={node.fields.slug}
              link={node.fields.slug}
              heading={title}
            
              price={price}
              video={video.publicURL}
            />
          )
        })}
      </ThumbnailsWrapper>
        

      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(items)/"  }}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            price
            video {
              publicURL
            }
          }
        }
      }
    }
  }
`
