import React from "react"
import { Link } from "gatsby"

import Layout from "./../../components/layout"

const MyPage = () => (
  <Layout>
    
    <h1>My Page</h1>
    <p> this is my page from subfolder</p>
    <p>Now go build something great.</p>
   
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/Counting"> Counting </Link></p>
  </Layout>
)

export default MyPage
