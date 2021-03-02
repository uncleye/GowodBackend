import { MobilityTestQuery } from "../queries/MobilityTestQuery";
import { MobilityTestMutation } from "../mutations/MobilityTestMutation";
import { IResolvers } from "apollo-server";

/**
 * @description holds user resolver
 */

export const MobilityTestResolver: IResolvers = {
  Query: MobilityTestQuery,
  Mutation: MobilityTestMutation
}