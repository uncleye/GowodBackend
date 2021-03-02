import { getAllMobilityTests, getMobilityTest } from "../controllers/MobilityTestController";

/**
 * @description holds mobilityTest queries
 */

export const MobilityTestQuery = {
  mobilityTests: {
    resolve: async (parent, args, info) => {
      return await getAllMobilityTests()
    },
  },
  mobilityTest: {
    resolve: async(parent, args, info) => {
      return await getMobilityTest(args.id)
    },
  }
}