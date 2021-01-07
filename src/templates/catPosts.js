// import React from "react";
// import { graphql } from "gatsby";
// import ReactHtmlParser from "react-html-parser";
// import { Container, CardColumns } from "react-bootstrap";
// import { CardContent } from "../components";

// const allPosts = ({ data }) => {
//   const posts = data.allWpPost.nodes;

//   return (
//     <Container>
//       <CardColumns>
//         {posts.map((post) => (
//           <>
//             <>
//               <CardContent
//                 catlink={post.categories.nodes[0].slug}
//                 cat={post.categories.nodes[0].name}
//                 title={post.title}
//                 content={ReactHtmlParser(post.content)}
//                 link={`/${post.slug}`}
//               />
//             </>
//           </>
//         ))}
//       </CardColumns>
//     </Container>
//   );
// };

// export default allPosts;

// export const CatQuery = graphql`
//   query CatQuery($Catid: Int!) {
//     allWpPost(
//       filter: {
//         categories: { nodes: { elemMatch: { databaseId: { eq: $Catid } } } }
//       }
//     ) {
//       nodes {
//         title
//         content
//         slug
//         categories {
//           nodes {
//             slug
//             name
//           }
//         }
//       }
//     }
//   }
// `;
