import React from "react";
import { Topicstyle } from "../../components/styles/Homestyle";

import { AllPostCard, AllCourseCard } from "../Card/AllCard";

export const RelatedPost = ({ data }) => {
  const relatedpost = data.nodes;
  return (
    <>
      <Topicstyle>Related Posts</Topicstyle>
      <AllPostCard xs={6} sm={4} md={4} post={relatedpost} />
      <br></br>
    </>
  );
};

export const CourseRelatedPost = ({ data }) => {
  const relatedpost = data.nodes;
  return (
    <>
      <Topicstyle>Related Courses</Topicstyle>
      <AllCourseCard post={relatedpost} />
      <br></br>
    </>
  );
};
