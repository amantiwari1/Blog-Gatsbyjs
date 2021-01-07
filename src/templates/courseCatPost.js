import React from "react";
import { graphql } from "gatsby";
import { Container, CardColumns } from "react-bootstrap";
import { CardContent } from "../components";

const allPosts = ({ data }) => {
  const posts = data.allCourseCsv.nodes;

  return (
    <Container>
      <CardColumns>
        {posts.map((post) => (
          <>
            <>
              <CardContent
                image={post.localImage.childImageSharp.fluid}
                catlink={post.category.split(" ").join("-").toLowerCase()}
                cat={post.category}
                content=" "
                title={post.title}
                link={`/${post.slug}`}
              />
            </>
          </>
        ))}
      </CardColumns>
    </Container>
  );
};

export default allPosts;

export const CatQuery = graphql`
  query CourseCatQuery($name: String!) {
    allCourseCsv(filter: { category: { eq: $name } }) {
      nodes {
        category
        categoryslug
        date
        featureimage
        slug
        title
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
