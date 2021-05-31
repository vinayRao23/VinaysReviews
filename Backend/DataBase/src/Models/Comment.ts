import { sequelize } from "../connection";
import { DataTypes } from "sequelize";

export const Comment = sequelize.define("Comment", {
  author: { type: DataTypes.JSON, allowNull: false },
  body: { type: DataTypes.TEXT, allowNull: false },
  id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
});
