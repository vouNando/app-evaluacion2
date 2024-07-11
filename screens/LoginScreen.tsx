import React, { useState } from 'react';
import { Alert, Button, Image, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/config';

export default function LoginScreen({ navigation } : any) {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Main');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        let titulo = '';
        let mensaje = '';

        if (errorCode === 'auth/weak-password') {
          titulo = 'Error';
          mensaje = 'La contraseña debe tener al menos 6 caracteres';
        } else if (errorCode === 'auth/invalid-email') {
          titulo = 'Error';
          mensaje = 'El correo no es válido';
        }

        Alert.alert('Error', errorMessage);
      });
  }

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/ad/02/90/ad02902b6476eea9cb27540c540e1312.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image source={require('../assets/fileLogo.png')} style={styles.image} />
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Ingresa tu correo electrónico'
            onChangeText={(texto) => setCorreo(texto)}
            keyboardType='email-address'
          />
          <TextInput
            style={styles.input}
            placeholder='Ingresa contraseña'
            onChangeText={(texto) => setContrasenia(texto)}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => login()}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>👉 Regístrate aquí 👈</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#76ABAE',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
  },
});
