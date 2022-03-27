/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
    siteMetadata: {
        title: `ecofuzion`,
        siteUrl: `https://www.ecofuzion.co.uk`
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-image", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "content",
                "path": "./src/content/"
            },
            __key: "content"
        }, {
            resolve: `gatsby-transformer-remark`,
            options: {
                footnotes: true,
                gfm: true,
            }
        }]
};