// src/queries/GetWorks.js
import { gql } from "@apollo/client";

export const GET_Info = gql`
  query GetInfo {
    allAboutme(where: {}) {
      _id
      personalInfo {
        description
      }
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
