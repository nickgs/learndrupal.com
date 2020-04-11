import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Learn Drupal" />
    <h1>Learn the Drupal Content Management System</h1>
    <p>We are cooking something up! We are currently looking for training partners.</p>
    <p>If you provide Drupal training please reach out to us at <a href="mailto:info@segosolutions.com">info@segosolutions.com</a></p>
    <div style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
