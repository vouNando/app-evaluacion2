import React, { useState } from 'react';
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, set } from 'firebase/database';

export default function RegisterScreen({ navigation } : any) {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [celular, setCelular] = useState('');

  const registro = () => {
    createUserWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        guardarUsuario(celular, usuario, correo, contrasenia);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error al registrar usuario:', errorCode, errorMessage);
        Alert.alert('Error', errorMessage);
      });
  };

  const guardarUsuario = (cedula: string, nombre: string, correo: string, comentario: string) => {
    try {
      set(ref(db, 'usuarios/' + cedula), {
        nombre: nombre,
        email: correo,
        comentario: comentario,
      })
        .then(() => {
          Alert.alert('Mensaje', 'Guardado con éxito');
          limpiarFormulario();
          navigation.navigate('AlmacenamientoScreen');
        })
        .catch((error) => {
          console.error('Error al guardar el usuario:', error);
          Alert.alert('Error', 'No se pudo guardar el usuario');
        });
    } catch (error) {
      console.error('Error al intentar guardar:', error);
      Alert.alert('Error', 'No se pudo completar la operación');
    }
  };
  
  const limpiarFormulario = () => {
    setUsuario('');
    setCorreo('');
    setContrasenia('');
    setCelular('');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/ad/02/90/ad02902b6476eea9cb27540c540e1312.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>REGISTRO</Text>
        <Image source={require('../assets/fileLogo.png')} style={styles.image} />

        <TextInput
          style={styles.input}
          placeholder='Ingresa tu Usuario'
          value={usuario}
          onChangeText={(texto) => setUsuario(texto)}
        />

        <TextInput
          style={styles.input}
          placeholder='Ingresa tu correo electrónico'
          value={correo}
          onChangeText={(texto) => setCorreo(texto)}
          keyboardType='email-address'
        />

        <TextInput
          style={styles.input}
          placeholder='Ingresa contraseña'
          value={contrasenia}
          onChangeText={(texto) => setContrasenia(texto)}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder='Ingresa tu celular'
          value={celular}
          onChangeText={(texto) => setCelular(texto)}
          keyboardType='phone-pad'
        />

        <Button title='Registrar' onPress={registro} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
