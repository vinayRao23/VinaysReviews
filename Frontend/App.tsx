import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./Navigation/AuthStackNavigator";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import storage from "./auth/storage";
import AppNavigator from "./Navigation/AppNavigator";
import AppLoading from "expo-app-loading";
import { AuthContext } from "./Context/authContext";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  const [user, setUser] = useState<string | null | undefined>("");
  const [isReady, setIsReady] = useState(false);
  const restoreUser = async () => {
    const user: any = await storage.getUser();
    setUser(user);
  };
  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

AppRegistry.registerComponent("App", () => App);
