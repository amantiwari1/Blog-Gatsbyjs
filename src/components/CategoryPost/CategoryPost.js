import React from "react";
import { Header , ItemCat} from "../styles/RecentPosts";
import {Card} from "../styles/CardStyle";


export const CategoryPost = ({ data }) => {
  return (
    <div style={{marginBottom: "20px"}} >
    <Header>Category</Header>
      <Card style={{paddingBottom: "120px"}}   > 

      {data.map((node) => (
        <ItemCat to={`/${node.slug}`}>{node.name}</ItemCat>
        ))}
        </Card>
        </div>
  );
};
