import { IResolvers } from "graphql-tools";
const { User } = require("../../DataBase/src/Models/User");
const { Review } = require("../../DataBase/src/Models/Review");
import { ReviewArgsInt } from "./Interfaces/ReviewArgsInt";
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
    getAllReviews: async (_: void, __: void) => {
      const reviews = await Review.findAll();
      return reviews;
    },
    getMyReviews: async (_: void, args: ReviewArgsInt) => {
      const reviews = await Review.findAll({
        where: { authorid: args.authorid },
      });
      return reviews;
    },
    getOneReview: async (_: void, args: ReviewArgsInt) => {
      const review = await Review.findOne({
        where: { id: args.id },
      });
      return review;
    },
  },
  Mutation: {
    registerUser: async (_: void, args: UserArgsInt) => {
      // await User.sync({ force: true });
      try {
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
      } catch (err) {
        console.log(err.message);
      }
    },
    loginUser: async (_: void, args: UserArgsInt) => {
      const user = await User.findOne({
        where: {
          email: args.email,
        },
      });
      if (!user) {
        return "Invalid email or password";
      }
      const validPassword = await bcrypt.compare(args.password, user.password);
      if (!validPassword) {
        return "Invalid email or password";
      }
      const token = jwt.sign(
        {
          username: user.username,
          email: user.email,
          id: user.id,
          profilePicture: user.profilePicture,
        },
        config.get("jwtPrivateKey")
      );
      return token;
    },
    Review: async (_: any, args: ReviewArgsInt) => {
      // await Review.sync({ force: true });
      try {
        const review = await Review.build({
          title: args.title,
          author: args.author,
          image: args.image,
          id: args.id,
          comments: args.comments,
          stars: args.stars,
          body: args.body,
          authorid: args.authorid,
        });
        await review.save();
        return true;
      } catch (error) {
        console.log("ERR", error);
      }
    },
  },
};
export default resolvers;
