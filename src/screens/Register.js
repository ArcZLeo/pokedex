import React from "react";
import { SafeAreaView, Text } from "react-native"; // importamos de aca, porque el SafeArea del paquete de react native no funciona

import LoginFormRegister from "../components/Register/LoginFormRegister"
export default function Register() {
  
  return (
    <SafeAreaView>
      <LoginFormRegister/>
    </SafeAreaView>
  );
}
