import React from "react"
import { Row, Col } from "react-bootstrap"
import { Card } from "../RecentPost/RecentPosts"
import { NewCardContent } from "./Card"
import { Topicstyle } from "../styles/Homestyle"

const HomeFeatureCard = props => {
  const { post } = props

  return (
    <Card>
      <Row>
        {post.map(post => (
          <Col
            key={post.frontmatter.title}
            style={{ marginBottom: "20px" }}
            {...props}
          >
            <NewCardContent
              image={post.frontmatter.featureImage.childImageSharp.fluid}
              catlink={post.frontmatter.category}
              cat={post.frontmatter.category}
              title={post.frontmatter.title}
              link={post.frontmatter.title}
              time={post.timeToRead}
            />
          </Col>
        ))}
      </Row>
    </Card>
  )
}

const AllPostCard = props => {
  const { post } = props
  return (
    <Card>
      <Row>
        {post.map(post => (
          <Col
            key={post.frontmatter.title}
            style={{ marginBottom: "20px" }}
            {...props}
          >
            <NewCardContent
              image={post.frontmatter.featureImage.childImageSharp.fluid}
              catlink={post.frontmatter.category}
              cat={post.frontmatter.category}
              title={post.frontmatter.title}
              link={post.frontmatter.title}
              time={post.timeToRead}
            />
          </Col>
        ))}
      </Row>
    </Card>
  )
}

const AllCourseCard = props => {
  const { post } = props

  return (
    <Card>
      <Row>
        {post.map(post => (
          <Col key={post.title} style={{ marginBottom: "20px" }} {...props}>
            <NewCardContent
              image={post.localImage.childImageSharp.fluid}
              catlink={post.category}
              cat={post.category}
              title={post.title}
              link={post.title}
            />
          </Col>
        ))}
      </Row>
    </Card>
  )
}
const AllHomeCourseCard = props => {
  const { post } = props

  return (
    <Card>
      <Topicstyle>{post[0].category}</Topicstyle>
      <Row>
        {post.map(post => (
          <Col key={post.title} style={{ marginBottom: "20px" }} {...props}>
            <NewCardContent
              image={post.localImage.childImageSharp.fluid}
              catlink={post.category}
              cat={post.category}
              title={post.title}
              link={post.title}
            />
          </Col>
        ))}
      </Row>
    </Card>
  )
}

const HomeAllPostCard = props => {
  const { post } = props

  return (
    <Card>
      <Topicstyle>{post[0].frontmatter.category}</Topicstyle>

      <Row>
        {post.map(post => (
          <Col
            key={post.frontmatter.title}
            style={{ marginBottom: "20px" }}
            {...props}
          >
            <NewCardContent
              image={post.frontmatter.featureImage.childImageSharp.fluid}
              catlink={post.frontmatter.category}
              cat={post.frontmatter.category}
              title={post.frontmatter.title}
              link={post.frontmatter.title}
              time={post.timeToRead}
            />
          </Col>
        ))}
      </Row>
    </Card>
  )
}

export {
  HomeFeatureCard,
  AllPostCard,
  AllCourseCard,
  AllHomeCourseCard,
  HomeAllPostCard,
}
