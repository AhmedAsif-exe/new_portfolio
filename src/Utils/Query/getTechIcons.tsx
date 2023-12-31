// src/queries/GetWorks.js
import { gql } from "@apollo/client";

export const GET_TechIcons = gql`
  query GetTechIcons {
    allTechIcon(where: {}) {
      _id
      name
      icon {
        asset {
          url
        }
      }
    }
  }
`;
