import React from "react"
import { useStaticQuery } from "gatsby"
import { graphql } from 'gatsby' 

import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"
import YouTube from "../components/youtube"
import Section from "../components/section"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000,
        filter: {
          fileAbsolutePath: {
            glob: "/app/src/markdown-projects/*"
          }
          frontmatter: { draft: { ne: true}}
        }
      ) {
        edges {
          node {
            frontmatter {
              icon,
              slug,
              title,
              tags,
              links { title, url }
            },
            html
          }
        }
      }
    }
  `)

  const projects = data.allMarkdownRemark.edges.map(
    edge => {
      const node = edge.node
      return {
        icon: node.frontmatter.icon,
        title: node.frontmatter.title,
        tags: node.frontmatter.tags,
        links: node.frontmatter.links,
        description: node.html
      }
    }
  )

  return (
    <Layout>
      <SEO title="Home" />
      <div className="sections">
        {/* <Section><YouTube /></Section> */}
        {projects.map(project => (
          <Section>
            <Project
              {...project}
            />
          </Section>  
        ))}
      </div>
    </Layout>
  );
}

export default IndexPage
