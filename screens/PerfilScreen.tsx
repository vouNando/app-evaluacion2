import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth'; // Asegúrate de importar correctamente el método de logout desde Firebase
import { auth } from '../config/config';

export default function PerfilScreen( { navigation }: any) {
  // Aquí 'user' representa la información del usuario activo que recibirías como prop

  function handleLogout() {
    // Implementa la lógica para cerrar sesión aquí
    signOut(auth)
      .then(() => {
        // Cerrar sesión exitosamente, navegar a la ventana de registro u otra pantalla necesaria
        navigation.navigate('Register');
      })
      .catch((error) => {
        // Manejar errores de cierre de sesión si es necesario
        console.error('Error al cerrar sesión:', error);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil de Usuario</Text>
       
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mis Productos</Text>
        <View style={styles.horizontalList}>
          <TouchableOpacity style={styles.accountType}>
            <Text style={styles.accountTypeText}>Principal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountType}>
            <Text style={styles.accountTypeText}>Trabajo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountType}>
            <Text style={styles.accountTypeText}>Estudios</Text>
          </TouchableOpacity>
          {/* Agrega más tipos de cuenta según sea necesario */}
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  username: {
    fontSize: 18,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountType: {
    backgroundColor: '#76ABAE',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  accountTypeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
