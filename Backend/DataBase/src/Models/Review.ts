import { sequelize } from "../connection";
import { DataTypes } from "sequelize";

export const Review = sequelize.define("Review", {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.JSON, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  comments: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    defaultValue: [],
    allowNull: false,
  },
  stars: { type: DataTypes.INTEGER, allowNull: false },
});
