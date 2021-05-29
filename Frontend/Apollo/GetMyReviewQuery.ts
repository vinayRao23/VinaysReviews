import { gql } from "@apollo/client";

export const getMyReviews = gql`
  query getMyReviews($authorid: String!) {
    getMyReviews(authorid: $authorid) {
      title
      author {
        username
        email
        password
        profilePicture
        id
      }
      body
      image
      id
      comments {
        author
        body
      }
      stars
      time
    }
  }
`;
