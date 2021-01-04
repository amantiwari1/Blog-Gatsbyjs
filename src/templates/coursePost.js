import React from "react";
import { graphql, Link } from "gatsby"; 
import ReactHtmlParser from "react-html-parser";
import { Container, Row, Col } from "react-bootstrap";
import { ErollButton } from "../components/styles/Button";
import { LinkButton } from "../components/styles/Link";
import { CoupounText } from "../components/styles/Couponstyle";
import { Post } from "../components/styles/SingePost";
import { BreadcrumbLayout } from "../components/styles/BreadcrumbLayout";
import {  RecentPost} from "../components/RecentPost/RecentPost";
import {  CategoryPost} from "../components/CategoryPost/CategoryPost";
import { FeatureImage } from "../components/styles/FeatureStyle";


const singlePost = ({ data }) => {
  const post = data.courseCsv;
  const FeatureImageUrl = post.localImage;
  const date = new Date(post.date)
  const datestr  = date.toDateString()
  const recentpost = data.allCourseCategoryCsv.nodes


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
                  <LinkButton to={`/${post.categoryslug}`}>
                    {post.category}
                  </LinkButton>  {" > "} {datestr}
                </BreadcrumbLayout>

                <br />

                {FeatureImageUrl ? (
                  <FeatureImage
                  fluid={FeatureImageUrl.childImageSharp.fluid}
                  />
                ) : null}
                <h1>{post.title}</h1>
                <p>{ReactHtmlParser(post.description)}</p>
                <h3 style={{textAlign: "center"}}  > Coupon : </h3>
                <CoupounText>  {post.coupon}  </CoupounText>
                <Link style={{textDecoration:"none"}} to={post.course_url} ><ErollButton>Enroll</ErollButton></Link>
                </Post>

            <br></br>
              </Col>
            </Row>
          </Col>
            <Col>
              <RecentPost data={data}></RecentPost>
              <CategoryPost data={recentpost}></CategoryPost>
            </Col>
        </Row>
      </Container>
    </>
  );
};

export default singlePost;

export const pageQuery = graphql`
  query CoursePostQuery($Postid: String!) {
    wordpress {
      posts(first: 4) {
      nodes {
        title
        slug
      }
    }
      
    }
    courseCsv(id: {eq: $Postid}) {
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
  }
`;
