import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ref, onValue } from 'firebase/database';
import { db } from '../config/config';
import Card from '../assets/components/Card';

export default function HistorialScreen() {
  const [listaCuentas, setListaCuentas] = useState([]);

  useEffect(() => {
    const leerCuentasBancarias = () => {
      const cuentasRef = ref(db, 'accounts/');
      onValue(cuentasRef, (snapshot) => {
        const data = snapshot.val();

        // Transformación de datos si es necesario
        if (data) {
          const listaTemporal = Object.keys(data).map((id) => ({
            id,
            ...data[id],
          }));
          setListaCuentas(listaTemporal);
        } else {
          setListaCuentas([]);
        }
      });
    };

    leerCuentasBancarias();
  }, []); // El array vacío indica que useEffect se ejecuta solo una vez al montar el componente

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Cuentas Bancarias</Text>
      <FlatList
        data={listaCuentas}
        renderItem={({ item }) => (
          <Card
            nombre={`ID: ${item.id}`}
            monto={`Saldo: ${item.balance}`}
            descripcion={`Tipo de cuenta: ${item.accountType}`}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
