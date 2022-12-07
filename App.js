import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import DrawerNavigator from "./src/navigation/Menu";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <DrawerNavigator/>
      </AuthProvider>

      
    </NavigationContainer>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/
