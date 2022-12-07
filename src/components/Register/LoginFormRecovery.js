import React, { useState,useEffect } from "react";

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

export default function LoginForm() {
  const [error, setError] = useState("");


  const formik = useFormik({
    initialValues: initialValues(), //valores inciales del formularios
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false, //Para que solo parezca al presiona le boton


    onSubmit: (formValue) => {

      setError("");
      const { username,email } = formValue;
     
    },
  });

  return (
    <View>
      <Text style={styles.title}>Recuperar contraseña</Text>
      
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
        value={formik.values.email}
        onChangeText={(text) => formik.setFieldValue("email", text)}
      />
      <View style={styles.containnerButton}>
        <View style={styles.buttonRegister}>
          <Button
            title="Mandar Correo"
            color={"#008000"}
            onPress={formik.handleSubmit}
          />
        </View>
      </View>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.email}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    email: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    email: Yup.string().required("El email es obligatorio"),
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
    color: "#7fff00",
    marginTop: 20,
  },
  containnerButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  buttonRegister: {
    width: "95%",
  },
});
