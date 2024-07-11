import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function WelcomeScreen({ navigation } : any) {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/ad/02/90/ad02902b6476eea9cb27540c540e1312.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>Welcome </Text>
          <Text style={styles.text}>NANCapital</Text>

          <Image source={require('../assets/fileLogo.png')} style={styles.image} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // Fondo semitransparente para ver la imagen de fondo
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#76ABAE',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
