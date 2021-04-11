import React from "react";
import { AppRegistry } from "react-native";
import AppNavigator from "./Navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AuthStackNavigator from "./Navigation/AuthStackNavigator";

const client = new ApolloClient({
  uri: "localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent("VinaysReviews", () => App);
