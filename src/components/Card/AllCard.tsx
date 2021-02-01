import React from "react"
import { Row, Col } from "react-bootstrap"
import { Card } from "../RecentPost/RecentPosts"
import { NewCardContent } from "./Card"
import { Topicstyle } from "../styles/Homestyle"


interface HomeFeatureProps {
  post: any;
}

const HomeFeatureCard = (props: any ) => {
  const { post }: HomeFeatureProps = props

  return (
    <Card>
      <Row>
        {post.map((post : any) => (
          <Col
            key={post.frontmatter.title}
            style={{ marginBottom: "20px" }}
            {...props}
          >
            <NewCardContent
              image={post.frontmatter.featureImage.childImageSharp.fluid}
              catlink={post.fields.categorySlug}
              cat={post.frontmatter.category}
              title={post.frontmatter.title}
              link={post.fields.slug}
              time={post.timeToRead}
            />
          </Col>
        ))}
      </Row>
    </Card>
  )
}

const AllPostCard = (props: any) => {
  const { post }: HomeFeatureProps = props
  return (
    <Card>
      <Row>
        {post.map((post : any) => (
          <Col
            key={post.frontmatter.title}
            style={{ marginBottom: "20px" }}
            {...props}
          >
            <NewCardContent
              image={post.frontmatter.featureImage.childImageSharp.fluid}
              catlink={post.fields.categorySlug}
              cat={post.frontmatter.category}
              title={post.frontmatter.title}
              link={post.fields.slug}
              time={post.timeToRead}
            />
          </Col>
        ))}
      </Row>
    </Card>
  )
}

const AllCourseCard = (props : any )  => {
  const { post }: HomeFeatureProps = props

  return (
    <Card>
      <Row>
        {post.map((post : any) => (
          <Col key={post.title} style={{ marginBottom: "20px" }} {...props} >
            <NewCardContent
              image={post.localImage.childImageSharp.fluid}
              catlink={post.fields.categorySlug}
              cat={post.category}
              title={post.title}
              link={post.fields.slug}
            />
          </Col>
        ))}
      </Row>
    </Card>
  )
}
const AllHomeCourseCard = (props: any)  => {
  const { post }: HomeFeatureProps = props

  return (
    <Card>
      <Topicstyle>{post[0].category}</Topicstyle>
      <Row>
        {post.map((post : any) => (
          <Col key={post.title} style={{ marginBottom: "20px" }} {...props}>
            <NewCardContent
              image={post.localImage.childImageSharp.fluid}
              catlink={post.fields.categorySlug}
              cat={post.category}
              title={post.title}
              link={post.fields.slug}
            />
          </Col>
        ))}
      </Row>
    </Card>
  )
}

const HomeAllPostCard = (props: any  )  => {
  const { post }: HomeFeatureProps = props

  return (
    <Card>
      <Topicstyle>{post[0].frontmatter.category}</Topicstyle>

      <Row>
        {post.map((post : any) => (
          <Col
            key={post.frontmatter.title}
            style={{ marginBottom: "20px" }}
            {...props}
          >
            <NewCardContent
              image={post.frontmatter.featureImage.childImageSharp.fluid}
              catlink={post.fields.categorySlug}
              cat={post.frontmatter.category}
              title={post.frontmatter.title}
              link={post.fields.slug}
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
