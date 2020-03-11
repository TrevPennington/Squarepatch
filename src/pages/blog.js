import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogThumbnail from '../components/ItemThumbnail/BlogThumbnail';

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

const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
`

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = 'data.site.siteMetadata.title'
    const items = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Title>Articles</Title>
        <SEO title="All blogs" />
        <ThumbnailsWrapper>
        {items.map(({ node }) => {
          const { title, date } = node.frontmatter
          return (
            <BlogThumbnail
              key={node.fields.slug}
              link={node.fields.slug}
              heading={title}
              date={date}
            />
          )
        })}
      </ThumbnailsWrapper>
        

      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"  }}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
