import { gql } from "apollo-server";

/**
 * @description holds mobilityTest schema
 */

export const MobilityTestSchema = gql`
  
  type MobilityTest {
    id: ID!
    userRef: User
    anckleScore: String!
  }

  input CreateMobilityTestInput {
    firstname: String!
    lastname: String!
    password: String!
    email: String!
    age: Int!
    genre: String!
  }

  input UpdateMobilityTestInput {
    id: String!
    name: String!
    email: String!
    age: Int!
    genre: String!
  }

  extend type Query {
    mobilityTests: [MobilityTest]
    mobilityTest(id: String!): MobilityTest
  }

  extend type Mutation {
    createMobilityTest(input: CreateMobilityTestInput!): MobilityTest
    updateMobilityTest(input: UpdateMobilityTestInput!): MobilityTest
    deleteMobilityTest(id: String!): MobilityTest
  }
`;
