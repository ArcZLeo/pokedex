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
  ///const { navigation } = this.props;


  const formik = useFormik({
    initialValues: initialValues(), //valores inciales del formularios
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false, //Para que solo parezca al presiona le boton
    onSubmit: (formValue) => {
      setError("");
      const { username,password,firstname,lastname,email } = formValue;
      
      let data={
        LastName:lastname, 
        Name:firstname,
        User:username,
        email:email,
      }
      let data2={ 
        Password: password,
        User:username,
      }
           
    },
  });

  return (
    <View>
      <Text style={styles.title}>Crear Usuario</Text>
      
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
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
        value={formik.values.firstname}
        onChangeText={(text) => formik.setFieldValue("firstname", text)}
      />
      <TextInput
        placeholder="Apellido"
        style={styles.input}
        autoCapitalize="none" //Con esto al escribir, no empezara con mayuscula
        value={formik.values.lastname}
        onChangeText={(text) => formik.setFieldValue("lastname", text)}
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
            title="Registrar"
            color={"#008000"}
            onPress={formik.handleSubmit}
          />
        </View>
      </View>

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{formik.errors.firstname}</Text>
      <Text style={styles.error}>{formik.errors.lastname}</Text>
      <Text style={styles.error}>{formik.errors.email}</Text>

      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
    firstname: Yup.string().required("El nombre es obligatorio"),
    lastname: Yup.string().required("El apellido es obligatoria"),
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
    color: "#f00",
    marginTop: 20,
  },
  hiper: {
    textAlign: "right",
    color: "#00008b",
    marginRight:50,
  },
  containnerButton: {
    marginTop: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  buttonRegister: {
    width: "95%",
  },
});
