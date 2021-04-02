import { IResolvers } from "graphql-tools";

const resolver: IResolvers = {
  Query: {
    helloWorld(_: void, __: void): string {
      return "Hello world!";
    },
  },
};
export default resolver;
