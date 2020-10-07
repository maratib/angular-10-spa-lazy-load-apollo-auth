import { gql } from 'apollo-angular';

export const GET_USERS = gql`
  {
    allUsers {
      id
      username
      email
    }
  }
`;
