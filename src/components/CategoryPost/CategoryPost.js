import React from "react";
import { Card,Header, Item } from "../styles/RecentPosts";

export const CategoryPost = ({ data }) => {

  const recentpost = data.wordpress.categories.nodes;
  return (
      <Card>
          <Header>Category</Header>
            {
              recentpost.map(node => (
                <Item to={`/${node.slug}`} >{node.name}</Item>
              ))
            }
      </Card>
  );
};

