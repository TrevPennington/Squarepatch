// This is the template for each programmatically generated item in the shop. It will be populated with data from markdown files in the content folder.

import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components"
import './item.css'

import Layout from "../components/layout";

const Article = styled.div`
  width: 80%;
  max-width: 650px;
  margin: auto;
`

const Heading = styled.div`
  width: 100%;
  height: 400px;
  margin: auto;
  padding-top: 20%;


`

const Title = styled.h1`
  font-style: italic;
  font-size: 2.2em;
  font-weight: 500;
  text-align: left;
  letter-spacing: 1.8px;
`

const Date = styled.p`
  padding-top: 20px;

  color: #777;
  font-size: 1em;
  font-weight: 200px;
`

const Body = styled.div`
  margin-bottom: 150px;

  & > * img {
    width: 350px;
    height: 350px;
    cursor: auto;
  }
`

const Text = styled.p`


  & > * {
  line-height: 35px;
  font-size: 1.1em;
  }

  h1 {
    margin-bottom: 5px;
    line-height: 45px;

    font-weight: 500;
    font-size: 1.5em;
  }

  em {
    font-weight: 600;
    background-color: ${props => props.theme.colors.indySplashing};
    padding: 3px;
  }

  a {
    font-weight: 600;
    border-bottom: 3px solid ${props => props.theme.colors.indySplashing};
  }

  .large {
    height: 100px;
  }

`

const Closing = styled(Text)`

`
const Questions = styled.p`
  margin-bottom: 200px;
`

class Blog extends React.Component {

  render() {
    const item = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    // const formatDate = date => moment.utc(date).format(config.dateFormat)
    // const date = formatDate(item.frontmatter.date)

    return (
     
      <Layout location={this.props.location} title={siteTitle}>
        <Article>
          <Heading>
            <Title>{item.frontmatter.title}</Title>
            <Date>{item.frontmatter.date}</Date>
          </Heading>
          <Body>
            <Text dangerouslySetInnerHTML={{ __html: item.html }} />
          </Body>

          <Closing>
            <Questions>🙋Have a question / comment / concern? Feel free to <Link to='/contact' style={{ fontWeight: `500`, fontStyle: `italic` }}>reach out!</Link></Questions>
          </Closing>
        </Article>
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
    markdownRemark(fields: { slug: { eq: $slug } })  {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
      }
    }
  }
`
