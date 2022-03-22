import React from 'react'
import './ProjectCard.scss'
import {MarkdownFile, ProjectFrontMatter} from "../Types";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

interface CardParams {
    data: MarkdownFile<ProjectFrontMatter>
}

const ProjectCard = ({data}: CardParams) => {
    const heroImage : any = getImage(data.frontmatter.heroImage)

    return (<article className="card">
        <header>
            <h2>{data.frontmatter.title}</h2>
        </header>
        { heroImage !== null ?
            <GatsbyImage image={heroImage} alt={data.frontmatter.title}/>
            : null }
        { data.frontmatter.summary !== null ?
            <div className="summary">
                {data.frontmatter.summary}
            </div> : null }
        <div className="footer">
            <a className="btn btn-primary" href={data.frontmatter.slug}>Read more</a>
            { process.env.DONATE_ENABLED === 'true' ? <a className="btn btn-primary btn-donate" href={'/donate?projectId=' + data.frontmatter.projectId}>Donate now</a> : null }
        </div>
    </article>)
}

export default ProjectCard;
