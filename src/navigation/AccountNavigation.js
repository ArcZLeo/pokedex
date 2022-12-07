import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../screens/Account";
import RecoveryScreen from "../screens/Recovery"
import RegisterScreen from "../screens/Register"

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerTitleAlign: "center", 
        headerShadowVisible: '#f0ffff',
      }}
    >
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        // options={{ title: "Mi cuenta" }}
        options={{
          title: "Mi cuenta",
          headerStyle: {
            backgroundColor: "#000000",
          },

          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
        }}
      />
      <Stack.Screen    
        name="Recovery"
        component={RecoveryScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#000000",
          },

          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          
        }}
      />
      <Stack.Screen
        
        name="Register"
        component={RegisterScreen}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#000000",
          },

          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          
        }}
      />

    </Stack.Navigator>
  );
}
