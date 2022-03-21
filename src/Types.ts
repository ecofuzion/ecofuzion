import {graphql} from "gatsby";

export interface FrontMatter {
    title : string
    slug : string
}

export interface ProjectFrontMatter extends FrontMatter {
    projectId : string
    heroImage : any
    heroText : string
    summary: string
}

export interface PageFrontMatter extends FrontMatter {
    heroImage : any
    heroText : string
    heroImageAttr : string
}

export interface Parent {
    relativeDirectory: string
}

export interface MarkdownFile<T> {
    frontmatter : T
    html : string
    parent: Parent
}

export interface Nodes<T> {
    nodes : T[]
}

export interface MarkdownEntries<T> {
    allMarkdownRemark : Nodes<MarkdownFile<T>>
}

export interface FileNode<T> {
    id: string
    //@ts-ignore
    name: string
    relativeDirectory: string
    sourceInstanceName:string
    childMarkdownRemark: MarkdownFile<T>
}
