import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { schema } from "./schemas";
import { context } from "./context";
import {models} from "./models"


/**
 * @description holds and creates apollo server
 */

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {models},
  playground: {
    endpoint: "/graphql"
  },
  introspection: true
});

export default apolloServer;