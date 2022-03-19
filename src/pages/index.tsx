import * as React from "react"
import { graphql } from 'gatsby'
import './index.sass'
import Layout from "../components/Layout";
import ShutterPage from "../components/ShutterPage";
import {FrontMatter, MarkdownFile, Nodes} from "../Types";

interface IndexParams {
  data:  { allMarkdownRemark: Nodes<MarkdownFile<FrontMatter>> }
}

// markup
const Index = ({data}:IndexParams) => {
  const { allMarkdownRemark } = data

  if (process.env.SHUTTER_ENABLED !== 'true' && allMarkdownRemark.nodes.length > 0) {
    const indexPage = allMarkdownRemark.nodes[0].frontmatter
    return <Layout pageTitle={indexPage.title}>{indexPage.title}</Layout>
  } else {
    return <ShutterPage />
  }
}

export default Index

export const query = graphql`
query HomePageQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title 
        }
      }
    }
  }`
