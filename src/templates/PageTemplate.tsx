import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import {MarkdownFile, PageFrontMatter} from "../Types";
import './PageTemplate.scss'
import Img from "gatsby-image";

interface PageTemplateParams {
    data : {markdownRemark: MarkdownFile<PageFrontMatter>}
}

const PageTemplate = ({ data } : PageTemplateParams) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout pageTitle={frontmatter.title}>
            <article className="page-container">
                <div className="hero">
                    <Img className="hero-image" fluid={frontmatter.heroImage?.childImageSharp.fluid} alt={frontmatter.title}/>
                    <h1 className="hero-summary">{frontmatter.heroText}</h1>
                </div>
                <div className="page-contents" dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        </Layout>
    )
}

export default PageTemplate

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        summary
        heroText
        heroImage {
          childImageSharp {
              fluid(maxWidth: 480, maxHeight: 480, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroImageAttr
      }
    }
  }
`