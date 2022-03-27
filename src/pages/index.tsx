import * as React from "react"
import { graphql } from 'gatsby'
import './index.scss'
import {PageFrontMatter, MarkdownFile} from "../Types";
import PageTemplate from "../templates/PageTemplate";

interface IndexParams {
  data:  { markdownRemark: MarkdownFile<PageFrontMatter> }
}

// markup
const Index = ({data}:IndexParams) => {
  return <PageTemplate data={data} />
}

export default Index

export const query = graphql`
query HomePageQuery {
   markdownRemark(frontmatter: {title: {eq: "Home"}}) {
      html
      frontmatter {
        slug
        title
        summary
        heroText
        heroImage {
          childImageSharp {
              fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroImageAttr
      }
    }
  }`
