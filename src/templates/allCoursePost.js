import React from "react";
import { graphql } from "gatsby";
import {CardContent} from "../components";
import "bootstrap/dist/css/bootstrap.css";
import {Container , CardColumns } from "react-bootstrap";


const AllPosts = ({ data }) => {
  const posts = data.allCourseCsv.nodes;
  return (
    <>
   
    <Container>
          <CardColumns>
      {posts.map((post) => (
        <>
        <CardContent image={post.localImage.childImageSharp.fluid} catlink={post.categoryslug} cat={post.category} title={post.title} content=" " link={`/${post.slug}`} />
        </>
      ))}
      </CardColumns>
    </Container> 
    </>
  );
};

export default AllPosts;

export const pageQuery = graphql`
  {
    allCourseCsv {
    nodes {
      categoryslug
      category
      title
      slug
      localImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
            
          }
    }
  }
    }
  }
  }
`;

