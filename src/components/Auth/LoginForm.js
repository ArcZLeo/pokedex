import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
} from "react-native";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import db from "../../database/firebase"


export default function LoginForm() {
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const [users,setUsers]=useState([]);

  const formik = useFormik({
    initialValues: initialValues(), //valores inciales del formularios
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false, //Para que solo parezca al presiona le boton
    


    onSubmit: (formValue) => {    
      setError("");
      const { username, password } = formValue;
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
        secureTextEntry={true} //punto en lugar de puntos
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Text 
        style={styles.hiper}
        onPress={()=>navigation.navigate("Recovery")}
      >
        Recuperar contraseña
      </Text>
      
      <Text 
        style={styles.hiper}
        onPress={()=>navigation.navigate("Register")}
      >
        Registrarse
      </Text>
      
      <View style={styles.containnerButton}>
        <View style={styles.buttonLogin}>
          <Button
            title="Entrar"
            color={"#008000"}
            onPress={formik.handleSubmit}
          />
        </View>
      </View>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
  containnerButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  buttonLogin: {
    width: "95%",
  },
  hiper: {
    textAlign: "right",
    color: "#00008b",
    marginRight:10,
    textDecorationLine: 'underline',
    fontSize: 15,
  },
});
