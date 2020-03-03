import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>{data.movies.Title}</h1>
      </div>
    </Layout>
  )
}

export const query = graphql`
query($slug:String) {
    movies(FriendlyName: {eq: $slug}) {
      Title
      Trailer
      Img
    }
  }
  
`