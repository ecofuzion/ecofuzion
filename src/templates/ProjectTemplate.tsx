import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import {MarkdownFile, ProjectFrontMatter} from "../Types";
import './ProjectTemplate.scss'
import Img from "gatsby-image";

interface ProjectTemplateParams {
    data : {markdownRemark: MarkdownFile<ProjectFrontMatter>}
}

const ProjectTemplate = ({ data } : ProjectTemplateParams) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout pageTitle={frontmatter.title}>
            <article className="project-container">
            <h1>{frontmatter.title}</h1>
            <div className="hero">
                <Img className="hero-image" fluid={frontmatter.heroImage?.childImageSharp.fluid} alt={frontmatter.title}/>
                <div className="hero-summary">{frontmatter.heroText}</div>
            </div>
            <div className="project-contents" dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        </Layout>
    )
}

export default ProjectTemplate

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        projectId
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
      }
    }
  }
`