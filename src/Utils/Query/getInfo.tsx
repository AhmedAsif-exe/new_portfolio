// src/queries/GetWorks.js
import { gql } from "@apollo/client";

export const GET_Info = gql`
  query GetInfo {
    allAboutMe(where: {}) {
      _id
      description

      image {
        asset {
          url
        }
      }
      skills {
        name
        proficiency
      }
    }
  }
`;
