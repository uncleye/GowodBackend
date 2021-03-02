import mongoose from "mongoose";


/**
 * @description holds user model
 */

 /**
  * User interface
  */
export interface IUser extends mongoose.Document<any> {
  id: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  age:number;
  genre:Gender;
  transform: () => IUser;
}

/**
 * user schema
 */
const schema: mongoose.SchemaDefinition = {
  firstname: { type: mongoose.SchemaTypes.String, required: true },
  lastname: { type: mongoose.SchemaTypes.String, required: true },
  password: { type: mongoose.SchemaTypes.String, required: true },
  email: { type: mongoose.SchemaTypes.String, required: true, unique: true },
  age: { type: mongoose.SchemaTypes.Number, required: true },
  //genre: { type: mongoose.SchemaTypes.Number, enum:[0,1] , default: 0, required: true, unique: true },
  genre: { type: mongoose.SchemaTypes.String, required: true },
};


enum Gender {
  Male = 1,
  Female = 0
}


const userSchema: mongoose.Schema = new mongoose.Schema(schema);

// Methods



/**
 * transforms user object, removes password and 
 * changes _id to id
 */
userSchema.methods.transform = function() {
  var obj = this.toObject();
  //delete obj.password// changed

  var id = obj._id;
  delete obj._id;
  obj.id = id;

  return obj;
}
// user collection name

export const userCollectionName: string = "user";
/**
 * creates user model
 * @param conn database connection
 * @returns user model
 */
const UserModel = mongoose.model<IUser>(userCollectionName, userSchema);

export default UserModel;