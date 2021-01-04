import React from "react";
import { graphql } from "gatsby";
import ReactHtmlParser from 'react-html-parser';
import {Container,CardColumns } from "react-bootstrap";
import {CardContent } from "../components";




const allPosts = ({ data }) => {
  const posts = data.wordpress.posts.nodes;

  return (

<Container>
        <CardColumns>
      {posts.map((post) => (
        <>
        <>
        <CardContent catlink={post.categories.nodes[0].slug} cat={post.categories.nodes[0].name} title={post.title} content={ReactHtmlParser(post.content)} link={`/${post.slug}`} />
        </>
        </>
      ))}

</CardColumns> 
        
        
        </Container>
  );
};

export default allPosts;

export const CatQuery = graphql`
  query CatQuery($Catid: Int!) {
    wordpress {
    posts(where: {categoryId: $Catid}) {
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
