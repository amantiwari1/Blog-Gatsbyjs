import React from "react";
import { Card, Header, Item } from "../styles/RecentPosts";

export const CategoryPost = ({ data }) => {
  return (
    <Card>
      <Header>Category</Header>
      {data.map((node) => (
        <Item to={`/${node.slug}`}>{node.name}</Item>
      ))}
    </Card>
  );
};
