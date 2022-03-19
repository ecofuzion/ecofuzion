import * as React from "react"
import './projects.sass'
import Layout from "../components/Layout";
import {FileNode, MarkdownFile, Nodes, ProjectFrontMatter} from "../Types";
import {graphql, Link, useStaticQuery} from "gatsby";
import ProjectCard from "../components/ProjectCard";

interface Projects {
    allFile : Nodes<FileNode<ProjectFrontMatter>>
}
// markup
const Projects = () => {
    const {allFile} = useStaticQuery<Projects>(graphql`
                query ProjectQuery {
                  allFile(
                    filter: {relativeDirectory: {glob: "projects/**"}, sourceInstanceName: {eq: "content"}, base: {glob: "*.md"}}
                    sort: {fields: name, order: ASC}
                  ) {
                    nodes {
                      id
                      name
                      relativeDirectory
                      sourceInstanceName
                      childMarkdownRemark {
                        frontmatter {
                          projectId
                          slug
                          title
                          summary
                          heroImage {
                            childImageSharp {
                                gatsbyImageData(width: 200)
                              }
                          }
                        }
                      }
                    }
                  }
                }`)

    return (<Layout pageTitle={"Projects"}><div className="project-grid">
        {
            allFile.nodes.map(({ id, childMarkdownRemark}) => {
                return <ProjectCard key={id} data={childMarkdownRemark}/>
            })
        }
    </div></Layout>)

}

export default Projects;