import { createUser, deleteUser, updateUser } from "../controllers/UserController"

/**
 * @description holds user mutations
 */

export const UserMutation = {
  createUser: {
    resolve: async (parent, args, info) => {
      return await createUser(args.input);
    },
  },
  updateUser: {
    resolve: async (parent, args,  info) => {
      return await updateUser(args.input);
    },
  },
  deleteUser: {
    resolve: async (parent, args, info) => {
      return await deleteUser(args.id);
    },
  },
}