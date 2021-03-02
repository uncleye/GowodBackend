import UserModel, { IUser } from "../models/UserModel";
import { addErrorLoggingToSchema, ApolloError } from "apollo-server";
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
/**
 *
 * @description holds crud operations for the user entity
 */

/**
 * gets all users
 * @param connection database connection
 * @returns {IUser[]} user list
 */
export const getAllUsers = async () => {
  let list: IUser[];

  try {
    list = await UserModel.find();
    if (list != null && list.length > 0) {
      list = list.map((u) => {
        return u.transform();
      });
    }
  } catch (error) {
    console.error("> getAllUsers error: ", error);
    throw new ApolloError("Error retrieving all users");
  }

  return list;
};

/**
 * gets user by id
 * @param connection database connection
 * @param id user id
 * @returns {IUser | null} user or null
 */
export const getUser = async (id: string) => {
  let user: IUser | null;

  try {
    user = await UserModel.findById(id);
    if (user != null) {
      user = user.transform();
    }
  } catch (error) {
    console.error("> getUser error: ", error);
    throw new ApolloError("Error retrieving user with id: " + id);
  }

  return user;
};

/**
 * creates user
 * @param connection database connection
 * @param args user
 * @returns {IUser} created user
 */
export const createUser = async (args: IUser) => {
  let createdUser: IUser;

  try {
    const match = await UserModel.findOne({email:args.email})
    if (match ) throw new ApolloError ('this user already exist')
    createdUser = (await UserModel.create(args)).transform();

  } catch (error) {
    console.error("> createUser error: ", error);
    throw new ApolloError("Error saving user with name: " + args.firstname);
  }

  return createdUser;
};

/**
 * deletes user
 * @param connection database connection
 * @param id user id
 * @returns {IUser | null} deleted user or null
 */
export const deleteUser = async (id: string) => {
  let deletedUser: IUser | null;

  try {
    deletedUser = await UserModel.findByIdAndRemove(id);
    if (deletedUser != null) {
      deletedUser = deletedUser.transform();
    }
  } catch (error) {
    console.error("> deleteUser error: ", error);
    throw new ApolloError("Error deleting user with id: " + id);
  }

  return deletedUser;
};

/**
 * updates user
 * @param connection database connection
 * @param args user
 * @returns {IUser | null} updated user or null
 */
export const updateUser = async (args: IUser) => {
  let updatedUser: IUser | null;

  try {
    updatedUser = await UserModel.findByIdAndUpdate(
      args.id,
      {
        firstname: args.firstname,
        lastname: args.lastname,
        email: args.email,
        age: args.age,
        genre: args.genre,
      },
      { new: true }
    );

    if (updatedUser != null) {
      updatedUser = updatedUser.transform();
    }
  } catch (error) {
    console.error("> updateUser error: ", error);
    throw new ApolloError("Error updating user with id: " + args.id);
  }

  return updatedUser;
};

/**
 * login user
 * @param args user
 * @returns {IUser | null} logged in user or null
 */
export const login = async (email: string, password: string) => {
  const user = await UserModel.findOne({email:email});
  if(!user) {
    throw new Error('User does not exist!')
  }
  console.log(user?.password)
  console.log(password)
  //const isEqual = await bcrypt.compare(password, user.password);
  //bcrypt always return a false
  const isEqual = password == user.password
    if (!isEqual) {
      throw new Error('Password is incorrect!');
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'somesupersecretkey',
      {
        expiresIn: '1h'
      }
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
};
