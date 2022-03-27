import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import {MarkdownFile, ProjectFrontMatter} from "../Types";
import './ProjectTemplate.scss'
import {GatsbyImage} from "gatsby-plugin-image";

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
                <GatsbyImage className="hero-image" image={frontmatter.heroImage?.childImageSharp.gatsbyImageData} alt={frontmatter.title}/>
                <h1 className="hero-summary">{frontmatter.heroText}</h1>
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
              gatsbyImageData(
                width: 350
                layout: CONSTRAINED
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
          }
        }
      }
    }
  }
`