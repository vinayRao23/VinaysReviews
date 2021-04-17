import React, { useContext } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import storage from "../auth/storage";
import AppText from "../Components/AppText";
import { AuthContext } from "../Context/authContext";

const MyAccountScreen = () => {
  const authContext = useContext(AuthContext);
  const handleSubmit = async () => {
    try {
      await storage.removeToken();
      authContext.setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity onPress={handleSubmit}>
      <SafeAreaView>
        <AppText>Logout</AppText>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default MyAccountScreen;
