import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectDetails = () => {
  return (
    <Layout>
      <div className={styles.details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={styles.featured}>
          {/* <GatsbyImage
            image={getImage(project.frontmatter.featuredImg)}
            alt="Image"
          /> */}
        </div>
        {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
      </div>
    </Layout>
  )
}

export default ProjectDetails
