import { gql } from "@apollo/client";

export const REVIEW = gql`
  mutation Review(
    $title: String!
    $author: Author1!
    $image: String!
    $body: String!
    $id: String!
    $stars: Int!
    $authorid: String!
  ) {
    Review(
      title: $title
      author: $author
      image: $image
      body: $body
      id: $id
      stars: $stars
      authorid: $authorid
    )
  }
`;
