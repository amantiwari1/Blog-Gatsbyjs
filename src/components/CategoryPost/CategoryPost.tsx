import React from "react"
import { Header, ItemCat } from "../RecentPost/RecentPosts"
import { Card } from "../Card/CardStyle"

export const CategoryPost = ({ data }: any) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Header>Category</Header>
      <Card style={{ paddingBottom: "120px" }}>
        {data.map((name: string) => (
          <ItemCat
            key={name}
            to={`/${name
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/[^\w-]+/g, "")}`}
          >
            {name}
          </ItemCat>
        ))}
      </Card>
    </div>
  )
}
