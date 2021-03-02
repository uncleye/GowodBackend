import { gql } from "apollo-server";

/**
 * @description holds user schema
 */

export const UserSchema = gql`
  type User {
    id: ID!,
    firstname: String!,
    lastname: String!,
    password: String!,
    email: String!
    age:Int!
    genre:String!
  }

  input CreateUserInput {
    firstname: String!,
    lastname: String!,
    password: String!,
    email: String!
    age:Int!
    genre:String!
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input UpdateUserInput {
    id: String!,
    name: String!,
    email: String!
    age:Int!
    genre:String!
  }
  
  extend type Query {
    users: [User]
    user(id: String!): User
    login(email: String!, password: String!): AuthData!
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: String!): User
  }
`