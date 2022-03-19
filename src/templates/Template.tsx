import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";
import {FrontMatter, MarkdownFile} from "../Types";



interface DataParams {
    markdownRemark: MarkdownFile<FrontMatter>
}

interface TemplateParams {
    data : DataParams
}

const Template = ({ data } : TemplateParams) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout pageTitle={frontmatter.title}>
            <div>
                <h1>{frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export default Template

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`