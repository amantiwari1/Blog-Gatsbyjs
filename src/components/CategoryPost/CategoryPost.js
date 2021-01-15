import React from "react";
import { Card, Header , ItemCat} from "../styles/RecentPosts";

export const CategoryPost = ({ data }) => {
  return (
    <Card>
      <Header>Category</Header>
      {data.map((node) => (
        <ItemCat to={`/${node.slug}`}>{node.name}</ItemCat>
      ))}
    </Card>
  );
};
