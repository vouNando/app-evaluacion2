import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Card({ nombre, monto, descripcion }: any) {
  const mostrarMensaje = () => {
    Alert.alert(
      'Detalles de Cuenta Bancaria',
      `Tipo de cuenta: ${nombre}\nSaldo: ${monto}\nNúmero de cuenta: ${descripcion}`,
    );
  };

  return (
    <TouchableOpacity onPress={mostrarMensaje}>
      <View style={styles.container}>
        <Text style={styles.txt}>Tipo de cuenta: {nombre}</Text>
        <Text style={styles.txt}>Saldo: {monto}</Text>
        <Text style={styles.txt}>Número de cuenta: {descripcion}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#83a0ce',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 20,
    padding: 10,
  },
  txt: {
    fontSize: 16,
    marginBottom: 5,
  },
});
