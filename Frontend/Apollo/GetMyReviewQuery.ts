import { gql } from "@apollo/client";

export const getMyReview = gql`
  query getMyReview($authorid: String!) {
    getMyReview(authorid: $authorid) {
      title
      author {
        username
        email
        password
        profilePicture
        id
      }
      image
      id
      comments {
        author
        body
      }
      stars
    }
  }
`;
