import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { ErollButton } from "../components/styles/Button";
import { LinkButton } from "../components/styles/Link";
import { CoupounText } from "../components/styles/Couponstyle";
import { Post } from "../components/styles/SingePost";
import { BreadcrumbLayout } from "../components/styles/BreadcrumbLayout";
import { CategoryPost } from "../components/CategoryPost/CategoryPost";
import { RecentPost, CourseRecentPost } from "../components/RecentPost/RecentPost";
import { CourseRelatedPost } from "../components/RelatedPost/RelatedPost";
import { FeatureImage } from "../components/styles/FeatureStyle";
import parse from 'html-react-parser';


const singlePost = ({ data }) => {
  const post = data.courseCsv;
  const FeatureImageUrl = post.localImage;
  const date = new Date(post.date);
  const catpost = data.allCourseCategoryCsv.nodes;

  return (
    <>
      <Container>
        <Row>
          <Col lg="8">
            <Row>
              <Col>
                <Post>
                  <BreadcrumbLayout>
                    <LinkButton to="/">Home</LinkButton> {" > "}
                    <LinkButton to="/coursefree">Course</LinkButton> {" > "}
                    <LinkButton
                      to={`/${post.category
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    >
                      {post.category}
                    </LinkButton>{" "}
                    {" > "}{" "}
                    {date.toDateString().substr(3, 5) +
                      " " +
                      date.getDate() +
                      ", " +
                      date.getFullYear()}
                  </BreadcrumbLayout>

                  <br />

                  {FeatureImageUrl ? (
                    <FeatureImage
                      fluid={FeatureImageUrl.childImageSharp.fluid}
                    />
                  ) : null}
                  <h1>{post.title}</h1>
                  <p>{parse(post.description)}</p>
                  <h3 style={{ textAlign: "center" }}> Coupon : </h3>
                  <CoupounText> {post.coupon} </CoupounText>
                  <Link style={{ textDecoration: "none" }} to={post.course_url}>
                    <ErollButton>Enroll</ErollButton>
                  </Link>
                </Post>
                  <CourseRelatedPost data={data.CourseRecentPost} />
                <br></br>
              </Col>
            </Row>
          </Col>
          <Col>
            <CourseRecentPost data={data.allCourseCsv} />
            <CategoryPost data={catpost}></CategoryPost>
          <RecentPost data={data.RecentPost} />

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default singlePost;

export const pageQuery = graphql`
  query CoursePostQuery($Postid: String!, $CategoryName: String!) {
    courseCsv(id: { eq: $Postid }) {
      category
      coupon
      course_url
      date
      description
      featureimage
      slug
      title
      categoryslug
      localImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allCourseCategoryCsv {
      nodes {
        name
        slug
      }
    }
    allCourseCsv(limit: 6)  {
    nodes {
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
  RecentPost: allMdx(sort: {fields: frontmatter___date, order: DESC}, limit:5) {
    nodes {
      frontmatter {
        title
      }
    }
  }
  CourseRecentPost: allCourseCsv(filter: { category: { eq: $CategoryName } }) {
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
