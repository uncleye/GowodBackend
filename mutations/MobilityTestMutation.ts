import { createMobilityTest} from "../controllers/MobilityTestController"

/**
 * @description holds user mutations
 */

export const MobilityTestMutation = {
  createMobilityTest: {
    resolve: async (parent, args, info) => {
      return await createMobilityTest(args.input);
    },
  },
}