import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import { AllPostCard } from "../components/Card/AllCard"
import SEO from "../components/seo"

// import ReactPaginate from 'react-paginate';
// import styled from "styled-components";

// const pagination = styled.div`
//   .pagination {
//   margin: 15px auto;
//   display: flex;
//   list-style: none;
//   outline: none;
// }

// `

const AllPosts = ({ data }) => {
  const post = data.allMdx.nodes
  return (
    <>
      <Container>
        <SEO title="Blog" />

        <AllPostCard xs={6} sm={6} md={4} lg={3} post={post} />
        {/* <pagination>
        
      <ReactPaginate
                  previousLabel="prev"
                  nextLabel="next"
                  breakLabel="..."
                  breakClassName="break-me"
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  containerClassName="pagination"
                  subContainerClassName="pages pagination"
                  activeClassName="active" />
      </pagination> */}
      </Container>
    </>
  )
}

export default AllPosts

export const pageQuery = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        fields {
        categorySlug
        slug
      }
        timeToRead
        frontmatter {
          date(formatString: "MMM DD, YYYY")
          featureImage {
            childImageSharp {
              fluid(
                cropFocus: CENTER
                fit: COVER
                maxHeight: 300
                maxWidth: 600
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          category
        }
      }
    }
  }
`
