import { gql } from "@apollo/client";

export const getOneReview = gql`
  query getOneReview($id: String!) {
    getOneReview(id: $id) {
      title
      author {
        username
        email
        password
        profilePicture
        id
      }
      image
      body
      id
      comments {
        author
        body
      }
      stars
    }
  }
`;
