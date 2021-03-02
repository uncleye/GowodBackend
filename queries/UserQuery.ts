import { getAllUsers, getUser, login } from "../controllers/UserController";

/**
 * @description holds user queries
 */

export const UserQuery = {
  users: {
    resolve: async (parent, args, info) => {
      return await getAllUsers()
    },
  },
  user: {
    resolve: async(parent, args, info) => {
      return await getUser(args.id)
    },
  },
  login: {
    resolve:async(parent, args, info) => {
      return await login(args.email, args.password)
    }
  }
}