import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { set, ref } from "firebase/database";
import { db } from "../config/config";

export default function BankScreen() {
  const [id, setId] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  const [balance, setBalance] = useState("");

  function guardarDatos() {
    // Validar que los campos no estén vacíos
    if (!id || !accountNumber || !accountType || !balance) {
      Alert.alert('Todos los campos son requeridos');
      return;
    }

    // Guardar los datos en Firebase
    set(ref(db, "accounts/" + id), {
      accountNumber: accountNumber,
      accountType: accountType,
      balance: balance,
    })
      .then(() => {
        Alert.alert('Mensaje', 'Datos guardados correctamente');
        limpiar();
      })
      .catch((error) => {
        console.error('Error al guardar los datos:', error);
        Alert.alert('Error', 'No se pudo guardar los datos');
      });
  }

  // Limpiar campos
  function limpiar() {
    setId("");
    setAccountNumber("");
    setAccountType("");
    setBalance("");
  }

  return (
    <View style={styles.container}>
      {/*------------------ GUARDAR -------------------------- */}
      <View style={styles.guardar}>
        <Text style={styles.titulo}>GUARDAR</Text>
        <TextInput
          placeholder="ID"
          style={styles.input}
          onChangeText={(texto) => setId(texto)}
          value={id}
        />
        <TextInput
          placeholder="Número de cuenta"
          style={styles.input}
          onChangeText={(texto) => setAccountNumber(texto)}
          value={accountNumber}
        />
        <TextInput
          placeholder="Tipo de cuenta"
          style={styles.input}
          onChangeText={(texto) => setAccountType(texto)}
          value={accountType}
        />
        <TextInput
          placeholder="Saldo"
          style={styles.input}
          onChangeText={(texto) => setBalance(texto)}
          value={balance}
        />
        <Button title="Guardar" onPress={guardarDatos} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "80%",
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  guardar: {
    backgroundColor: "#d1e5e1",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
});
