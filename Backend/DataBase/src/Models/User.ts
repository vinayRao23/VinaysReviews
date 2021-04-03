import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

export const User = sequelize.define("User", {
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
});
