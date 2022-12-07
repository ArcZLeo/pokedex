import React from "react";
import { SafeAreaView, Text } from "react-native"; // importamos de aca, porque el SafeArea del paquete de react native no funciona

import LoginFormRecovery from "../components/Register/LoginFormRecovery";

export default function Recovery() {
  return(
    <SafeAreaView>
      <LoginFormRecovery/>
    </SafeAreaView>
  );
}
