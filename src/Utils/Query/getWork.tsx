// src/queries/GetWorks.js
import { gql } from "@apollo/client";

export const GET_WORKS = gql`
  query GetWorks {
    allWorks(where: {}) {
      _id
      name
      description
      link
      github
      badges
      src {
        asset {
          url
        }
      }
    }
  }
`;
