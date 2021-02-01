import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Container, Row, Col } from "react-bootstrap"
import { FeatureImage } from "../components/styles/FeatureStyle"
import { CategoryPost } from "../components/CategoryPost/CategoryPost"
import {
  RecentPost,
  CourseRecentPost,
} from "../components/RecentPost/RecentPost"
import { RelatedPost } from "../components/RelatedPost/RelatedPost"
import { Post } from "../components/styles/SingePost"
import { BreadcrumbLayout } from "../components/styles/BreadcrumbLayout"
import { LinkButton } from "../components/styles/Link"
import { TimetoReadIcon } from "../images/icons"
import { TimeToRead } from "../components/Card/CardStyle"
import SEO from "../components/seo"

import { TOC } from "../components/styles/Tableofcontent"

export default ({ data }) => {
  const { body, frontmatter, tableOfContents, fields, timeToRead } = data.mdx
  const catpost = data.category.distinct
  const metaImage = frontmatter.featureImage.publicURL

  return (
    <Container fluid>
      <SEO title={frontmatter.title} ogImage={metaImage} />
      <Row>
        <Col md={0} lg={0} xl={1}></Col>
        <Col md={3} lg={3} xl={2}>
          <TOC>
            <h5>Table of Content</h5>
            <ul>
              {tableOfContents.items.map(i => (
                <li key={i.title}>
                  <a href={i.url}>{i.title}</a>
                </li>
              ))}
            </ul>
          </TOC>
        </Col>

        <Col md={9} lg={6} xl={5}>
          <Post>
            <BreadcrumbLayout>
              <LinkButton to="/">Home</LinkButton> {" > "}
              <LinkButton to="/posts">All Posts</LinkButton> {" > "}
              <LinkButton to={`/${fields.categorySlug}`}>
                {frontmatter.category}
              </LinkButton>{" "}
              {" > "} {frontmatter.date}
              {" > "}
              <TimetoReadIcon />
              <TimeToRead>{timeToRead} min read</TimeToRead>
            </BreadcrumbLayout>
            {frontmatter.featureImage ? (
              <FeatureImage
                fluid={frontmatter.featureImage.childImageSharp.fluid}
                alt={frontmatter.title}
              />
            ) : null}
            <h1>{frontmatter.title}</h1>
            <MDXRenderer>{body}</MDXRenderer>
          </Post>
          <RelatedPost data={data.RelatedPost} />
        </Col>
        <Col md={0} lg={3} xl={2}>
          <CourseRecentPost post={data.allCourseCsv.nodes} />
          <RecentPost
            xs={6}
            sm={4}
            md={2}
            lg={6}
            xl={6}
            post={data.RecentPost.nodes}
          />
          <CategoryPost data={catpost}></CategoryPost>
        </Col>
      </Row>
    </Container>
  )
}

export const query = graphql`
  query PostBySlug($title: String!, $category: String!) {
    mdx(frontmatter: { title: { eq: $title } }) {
      fields {
        categorySlug
      }
      frontmatter {
        category
        title
        date(formatString: "YYYY MMMM, DD")
        featureImage {
          publicURL
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
      }
      body
      excerpt
      tableOfContents
      timeToRead
    }

    RecentPost: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 6
    ) {
      nodes {
        frontmatter {
          title
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
        }
      }
    }
    RelatedPost: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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
    category: allCourseCsv {
      distinct(field: category)
    }
    allCourseCsv(limit: 6) {
      distinct(field: category)
      nodes {
        title
        localImage {
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
      }
    }
  }
`
