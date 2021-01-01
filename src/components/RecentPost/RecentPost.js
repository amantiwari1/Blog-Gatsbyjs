import React from "react";
import { Card,Header, Item } from "../styles/RecentPosts";

export const RecentPost = ({ data }) => {

  const recentpost = data.wordpress.posts.nodes;
  return (
      <Card>
          <Header>Recent Posts</Header>
            {
              recentpost.map(node => (
                <Item to={`/${node.slug}`} >{node.title}</Item>
              ))
            }
      </Card>
  );
};

