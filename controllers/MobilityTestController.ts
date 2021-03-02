import MobilityTestModel, { IMobilityTest } from "../models/MobilityTestModels"
import { ApolloError } from "apollo-server";

/**
 * 
 * @description holds crud operations for the mobilityTest entity 
 */

/**
 * gets all mobilityTests
 * @param connection database connection
 * @returns {IMobilityTest[]} mobilityTest list
 */
export const getAllMobilityTests = async () => { 
  let list: IMobilityTest[];

  try {
    list = await MobilityTestModel.find();
    
  } catch(error) {
    console.error("> getAllMobilityTests error: ", error);
    throw new ApolloError("Error retrieving all mobilityTests");
  }

  return list;
}

/**
 * gets mobilityTest by id
 * @param connection database connection
 * @param id mobilityTest id
 * @returns {IMobilityTest | null} mobilityTest or null
 */
export const getMobilityTest = async (id: string) => {
  let mobilityTest: IMobilityTest | null;

  try {
    mobilityTest = await MobilityTestModel.findById(id);
    if (mobilityTest != null) {
      mobilityTest = mobilityTest;
    }
  } catch(error) {
    console.error("> getMobilityTest error: ", error);
    throw new ApolloError("Error retrieving mobilityTest with id: " + id);
  }

  return mobilityTest;
}

/**
 * creates mobilityTest
 * @param connection database connection
 * @param args mobilityTest
 * @returns {IMobilityTest} created mobilityTest
 */
export const createMobilityTest = async (args: IMobilityTest) => {
  let createdMobilityTest: IMobilityTest;
  
  try {
    createdMobilityTest = (await MobilityTestModel.create(args));
  } catch(error) {
    console.error("> createMobilityTest error: ", error);
    throw new ApolloError("Error saving mobilityTest* with name: " + args.userRef);
  }

  return createdMobilityTest;
}
