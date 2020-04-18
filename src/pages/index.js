import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const handleRedirect = () => {
    navigate("/page-2/")
  }
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <button onClick={() => console.log("hi")}>click me to test</button>
      <br />
      <a onClick={handleRedirect}>Go to page 2</a>
    </Layout>
  )
}

export default IndexPage
