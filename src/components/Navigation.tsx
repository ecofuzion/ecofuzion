import React from 'react'
import {graphql, Link, useStaticQuery} from "gatsby";
import './Navigation.scss'

// @ts-ignore
import logo from '../images/logo.png'
import {FileNode, FrontMatter, Nodes} from "../Types";
import {Features} from "../Features";

interface Navigation {
    allFile : Nodes<FileNode<FrontMatter>>
}

const Navigation = () => {
    const {allFile} = useStaticQuery<Navigation>(graphql`
                query NavQuery {
                  allFile(
                    filter: {
                        relativeDirectory: {eq: ""}, 
                        sourceInstanceName: {eq: "content"},
                        childMarkdownRemark: {frontmatter: {order: {ne: null}}}
                    }
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
        <nav className="navbar">
            <div className="logo">ecofuzion</div>
            <input id="menu-toggle" type="checkbox"/>
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'/>
            </label>
            <ul className="menu">
                    {
                        allFile.nodes.map(({id, childMarkdownRemark}) => {
                            return <li key={id}><Link to={childMarkdownRemark.frontmatter.slug}>{childMarkdownRemark.frontmatter.title}</Link></li>
                        })
                    }
                    { Features.isProjectsEnabled ? <li key="projects"><Link to={'/projects'}>Projects</Link></li> : null }
                </ul>
        </nav>
    )
}

export default Navigation