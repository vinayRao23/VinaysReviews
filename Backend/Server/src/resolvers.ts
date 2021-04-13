import { IResolvers } from "graphql-tools";
const { User } = require("../../DataBase/src/Models/User");
import { UserArgsInt } from "../src/Interfaces/UserArgsInt";
import jwt from "jsonwebtoken";
import config from "config";
import bcrypt from "bcrypt";

const resolvers: IResolvers = {
  Query: {
    getAllUsers: async (_: void, __: void) => {
      const users = await User.findAll();
      return users;
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
        profilePicture: args.profilePicture,
        id: args.id,
      });
      const token = jwt.sign(
        {
          username: user.username,
          email: user.email,
          id: user.id,
          profilePicture: user.profilePicture,
        },
        config.get("jwtPrivateKey")
      );
      await user.save();
      return token;
    },
    loginUser: async (_: void, args: UserArgsInt) => {
      const user = await User.findOne({
        where: {
          email: args.email,
        },
      });
      if (!user) {
        return "Invalid email and/or password";
      }
      const validPassword = await bcrypt.compare(args.password, user.password);
      if (!validPassword) {
        return "Invalid email and/or password";
      }
      const token = jwt.sign(
        { username: user.username, email: user.email, id: user.id },
        config.get("jwtPrivateKey")
      );
      return token;
    },
  },
};
export default resolvers;
