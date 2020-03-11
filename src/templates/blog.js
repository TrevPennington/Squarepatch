// This is the template for each programmatically generated item in the shop. It will be populated with data from markdown files in the content folder.

import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components"
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


class Blog extends React.Component {

  render() {
    const item = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
     
      <Layout location={this.props.location} title={siteTitle}>
          <Heading>{item.frontmatter.title}</Heading>
          <div>
            <div dangerouslySetInnerHTML={{ __html: item.html }} />
          </div>
      </Layout>
      
    )
  }
}

export default Blog;

export const pageQuery = graphql`
  query BlogBySlug($slug: String!) {
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
      }
    }
  }
`
