import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
        author
        simpleData
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>Name :{title} </h1>
    </div>
  )
}

export default FetchData
