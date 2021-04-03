import { IResolvers } from "graphql-tools";
const { User } = require("../../DataBase/src/Models/User");
import { UserArgsInt } from "../src/Interfaces/UserArgsInt";

const resolvers: IResolvers = {
  Query: {
    helloWorld(_: void, __: void): string {
      return "Hello world!";
    },
  },
  Mutation: {
    registerUser: async (_: void, args: UserArgsInt) => {
      await User.sync({ force: true });
      const user = User.build({
        username: args.username,
        email: args.email,
        password: args.password,
        id: args.id,
      });
      await user.save();
      return user;
    },
  },
};
export default resolvers;
