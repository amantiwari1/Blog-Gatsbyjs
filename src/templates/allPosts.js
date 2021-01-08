import React from "react";
import { graphql } from "gatsby";
import { CardContent } from "../components";
import "bootstrap/dist/css/bootstrap.css";
import { Container, CardColumns } from "react-bootstrap";
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
  const post = data.allMdx.nodes;
  return (
    <>
      <Container>
        <CardColumns>
          {post.map((post) => (
            <>
              <CardContent
                image={
                  post.frontmatter.featureImage.childImageSharp.fluid
                }
                catlink={post.frontmatter.category.split(" ").join("-").toLowerCase()}
                cat={post.frontmatter.category}
                title={post.frontmatter.title}
                content=" "
                link={`/${post.frontmatter.title.split(" ").join("-").toLowerCase()}`}
              />
            </>
          ))}
        </CardColumns>
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
  );
};

export default AllPosts;

export const pageQuery = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        featureImage {
          childImageSharp {
            fluid {
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
`;
