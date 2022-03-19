import React from 'react'
import {graphql, Link, useStaticQuery} from "gatsby";
import './Navigation.sass'

// @ts-ignore
import logo from '../images/logo.png'
import {FileNode, FrontMatter, Nodes} from "../Types";

interface Navigation {
    allFile : Nodes<FileNode<FrontMatter>>
}

const Navigation = () => {
    const {allFile} = useStaticQuery<Navigation>(graphql`
                query NavQuery {
                  allFile(
                    filter: {relativeDirectory: {eq: ""}, sourceInstanceName: {eq: "content"}}
                  ) {
                    nodes {
                      id
                      name
                      relativeDirectory
                      sourceInstanceName
                      childMarkdownRemark {
                        frontmatter {
                          slug
                          title
                        }
                      }
                    }
                  }
                }`)

    return (
        <nav>
            <img src={logo} />
            <ul>
                {
                    allFile.nodes.map(({id, childMarkdownRemark}) => {
                        return <li key={id}><Link to={childMarkdownRemark.frontmatter.slug}>{childMarkdownRemark.frontmatter.title}</Link></li>
                    })
                }
                <li key="projects"><Link to={'/projects'}>Projects</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation