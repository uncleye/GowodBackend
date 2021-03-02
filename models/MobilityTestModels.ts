import mongoose from "mongoose";
import {Types} from "mongoose"
import UserModel from "./UserModel";
import { userCollectionName } from "./UserModel";
/**
 * @description holds user model
 */

/**
 * User interface
 */
export interface IMobilityTest extends mongoose.Document<any> {
  id: string;
  userRef: Types.ObjectId | Record<string, unknown>;
  anckleScore: number;
}

/**
 * user schema
 */
const schema: mongoose.SchemaDefinition = {
  userRef: { type: mongoose.Schema.Types.ObjectId, required: true, unique: true },
  anckleScore: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
};

// user collection name
const collectionName: string = "mobility test";

const mobilityTestSchema: mongoose.Schema = new mongoose.Schema(schema);

/**
 * creates user model
 * @param conn database connection
 * @returns user model
 */
const MobilityTestModel = mongoose.model<IMobilityTest>(
  collectionName,
  mobilityTestSchema
);

export default MobilityTestModel;
