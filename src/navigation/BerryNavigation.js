import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BerryScreen from "../screens/Berry";
import BerryDexScreen from "../screens/BerryDex";

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Berries"
        component={BerryDexScreen}
        // options={{ title: "Pokedex" }}

        options={{ title: "", headerShown: false }} // headerShown: false, si quiero ocultar el header

      />
      <Stack.Screen
        name="Berry"
        component={BerryScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
