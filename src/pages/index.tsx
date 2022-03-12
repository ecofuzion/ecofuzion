import * as React from "react"
import '../styles/index.sass'
import Layout from "../components/Layout";
import ShutterPage from "../components/ShutterPage";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <ShutterPage />
    </Layout>
  )
}

export default IndexPage
