import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you're using FontAwesome icons
import { LinearGradient } from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/icons/ket.png')}
        style={styles.image}
        resizeMode="cover">
        <Animatable.View animation="zoomInUp" style={styles.formContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#ABABA7"
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              placeholderTextColor="#ABABA7"
            />
          </View>
          <View style={{ marginBottom: 25 }}></View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <LinearGradient
                colors={['#161B90', '#161B90']}
                style={styles.loginButton}>
                <Text style={styles.loginText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.registerText}>Haven’t an account? Sign up here!</Text>
          </TouchableOpacity>
        </Animatable.View>
        <View style={styles.logoContainer}>
          <Animatable.Image
            animation="zoomIn"
            source={require('../../assets/icons/cb.png')}
            style={styles.logo}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  inputIcon: {
    paddingRight: 5,
  },
  redText: {
    color: 'red',
  },
  welcomeText: {
    color: '#2F86A6',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'Poppins-Bold',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    height: '50%',
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: 'black',
    fontSize: 30,
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 34,
    paddingVertical: 50,
    paddingHorizontal: 20,
    width: '90%',
    height: '55%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
    alignSelf: 'center',
    position: 'absolute',
    top: '25%',
  },
  inputContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF8DC',
    borderRadius: 25,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    color: '#003f5c',
  },
  forgotPassword: {
    color: '#003f5c',
    fontSize: 14,
    alignSelf: 'flex-end',
    marginBottom: 15,
  },
  loginButton: {
    width: 230,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  registerText: {
    color: '#2F86A6',
    fontSize: 15,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  rememberMeContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 180,
  },
});

export default SignIn;
