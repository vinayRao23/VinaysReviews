import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

export const User = sequelize.define("User", {
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  profilePicture: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue:
      "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
  },
});
