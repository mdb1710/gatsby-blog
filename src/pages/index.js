import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to the Code Composer blog</h1>
    <p>This is where I will talk about my web dev journey post bootcamp</p>
    
  
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
