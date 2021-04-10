import { IResolvers } from "graphql-tools";
const { User } = require("../../DataBase/src/Models/User");
import { UserArgsInt } from "../src/Interfaces/UserArgsInt";
import jwt from "jsonwebtoken";
import config from "config";
import bcrypt from "bcrypt";

const resolvers: IResolvers = {
  Query: {
    helloWorld(_: void, __: void): string {
      return "Hello world!";
    },
  },
  Mutation: {
    registerUser: async (_: void, args: UserArgsInt) => {
      await User.sync({ force: true });
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(args.password, salt);
      const user = User.build({
        username: args.username,
        email: args.email,
        password,
        id: args.id,
      });
      const token = jwt.sign(
        { username: user.username, email: user.email, id: user.id },
        config.get("jwtPrivateKey")
      );
      await user.save();
      return token;
    },
  },
};
export default resolvers;
