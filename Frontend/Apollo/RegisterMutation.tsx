import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation registerUser(
    $username: String!
    $email: String!
    $password: String!
    $profilePicture: String!
    $id: String!
  ) {
    registerUser(
      username: $username
      email: $email
      password: $password
      profilePicture: $profilePicture
      id: $id
    )
  }
`;
