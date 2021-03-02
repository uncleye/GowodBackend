import { UserSchema } from "./UserSchema";
import { BookSchema } from "./BookSchema";
import { MobilityTestSchema} from "./MobilityTestSchema"
import { DefaultSchema } from "./DefaultSchema";

/**
 * @description holds all schemas
 */

export const schema = [ DefaultSchema, UserSchema, BookSchema, MobilityTestSchema ];
