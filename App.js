import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";

function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
});

export default App;