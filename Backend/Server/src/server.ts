import express from "express";
import { ApolloServer } from "apollo-server-express";
import depthLimit from "graphql-depth-limit";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import resolvers from "./resolvers";
import fs from "fs";
import path from "path";
const { connectToDB } = require("../../DataBase/src/connection");
const app = express();
const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, "schema/schema.graphql"),
    "utf-8"
  ),
  resolvers,
});
app.use("*", cors());
app.use(compression());
connectToDB();
server.applyMiddleware({ app, path: "/graphql" });

const port = process.env.PORT || 4000;
server.applyMiddleware({
  app,
  path: "/graphql",
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}/graphql`);
});
