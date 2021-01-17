import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import imggif from "../images/computer.gif";
import { HeaderImage, Topicstyle } from "../components/styles/Homestyle";
import { CategoryPost } from "../components/CategoryPost/CategoryPost";
import {HomeFeatureCard, AllHomeCourseCard, HomeAllPostCard} from "../components/Card/AllCard"
import  SEO from "../components/seo";


const AllPosts = ({ data }) => {
  const catpost = data.allCourseCategoryCsv.nodes;
  const post = data.allMdx.nodes;

  return (
    <>
      <Container>
        <SEO />
        <Row>
          <Col>
            <center style={{ margin: "100px 0" }}>
              <h1>Be More Learn Everything is Free!!</h1>
            </center>
          </Col>
          <Col>
            <HeaderImage src={imggif} />
          </Col>
        </Row>
        <Row>
          <Col lg={8}>
            <Topicstyle>Featured Posts</Topicstyle>
            <HomeFeatureCard xs={6} sm={4}  post={post} />
          </Col>
          <Col lg={4}>
            <CategoryPost data={catpost}></CategoryPost>
          </Col>
        </Row>
        <Row>
          <Col>
          <HomeAllPostCard xs={6} sm={4} md={4} lg={3} post={data.Internship.nodes} /> 
          <AllHomeCourseCard xs={6} sm={4} md={4} lg={3} post={data.WebDevelopment.nodes} /> 
          <AllHomeCourseCard xs={6} sm={4} md={4} lg={3} post={data.ArtificialIntelligence.nodes} /> 
          <AllHomeCourseCard xs={6} sm={4} md={4} lg={3} post={data.CyberSecurity.nodes} /> 
          <AllHomeCourseCard xs={6} sm={4} md={4} lg={3} post={data.ProgrammingLanguages.nodes} /> 
          <AllHomeCourseCard xs={6} sm={4} md={4} lg={3} post={data.Editing.nodes} /> 
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AllPosts;

export const pageQuery = graphql`
  {
    allMdx(filter: { frontmatter: { feature: { eq: true } } }) {
      nodes {
        timeToRead
        frontmatter {
          date(formatString: "MMM DD, YYYY")
          featureImage {
            childImageSharp {
              fluid(cropFocus: CENTER, fit: COVER, maxHeight: 300, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          category
        }
      }
    }
    allCourseCategoryCsv {
      nodes {
        name
        slug
      }
    }

    Internship: allMdx(filter: { frontmatter: { category: { eq: "internship" } } }) {
      nodes {
        timeToRead
        frontmatter {
          date(formatString: "MMM DD, YYYY")
          featureImage {
            childImageSharp {
              fluid(cropFocus: CENTER, fit: COVER, maxHeight: 300, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          category
        }
      }
    }
    WebDevelopment: allCourseCsv(limit: 6, filter: {category: {eq: "Web Development"}}) {
    nodes {
      category
      date
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
  ArtificialIntelligence: allCourseCsv(limit: 6, filter: {category: {eq: "Artificial Intelligence"}}) {
    nodes {
      category
      date
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
  ProgrammingLanguages: allCourseCsv(limit: 6, filter: {category: {eq: "Programming Languages"}}) {
    nodes {
      category
      date
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
  Editing: allCourseCsv(limit: 6, filter: {category: {eq: "Editing"}}) {
    nodes {
      category
      date
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
  CyberSecurity: allCourseCsv(limit: 6, filter: {category: {eq: "Cyber Security"}}) {
    nodes {
      category
      date
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

// Programming Languages,programming-languages
// Artificial Intelligence,artificial-intelligence
// Cyber Security,cyber-security
// Web Development,web-development
// Editing