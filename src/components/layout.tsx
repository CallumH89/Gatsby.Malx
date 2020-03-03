import React from 'react'
import styled from "styled-components"
import { StaticQuery, Link, graphql } from 'gatsby'


const Container = styled.div`
  width:90%;
  max-width:1440px;
  margin: 0 auto;
`;

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Link to={`/`}>
          <h3>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        {children}
      </Container>
    )}
  />
)
