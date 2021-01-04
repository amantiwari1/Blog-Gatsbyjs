import React from "react";
import { graphql } from "gatsby";
import ReactHtmlParser from "react-html-parser";
import {CardContent} from "../components";
import "bootstrap/dist/css/bootstrap.css";
import {Container , CardColumns } from "react-bootstrap";
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
  const posts = data.wordpress.posts.nodes;
  return (
    <>
   
    <Container>
          <CardColumns>
      {posts.map((post) => (
        <>
        <CardContent image={data.wordpress.post.featuredImage.node.imageFile.childImageSharp.fluid} catlink={post.categories.nodes[0].slug} cat={post.categories.nodes[0].name} title={post.title} content={ReactHtmlParser(post.content)} link={`/${post.slug}`} />
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
    wordpress {
      post(id: "cG9zdDo1OQ==") {
        
      featuredImage {
        node {
          sourceUrl
          imageFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
      posts {
        nodes {
          title
          content
          slug
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

