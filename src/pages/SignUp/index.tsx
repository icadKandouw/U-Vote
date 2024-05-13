import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
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
import {LinearGradient} from 'react-native-linear-gradient';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [nim, setNim] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const data = {
      fullName : fullName,
      nim : nim,
      registrationNumber : registrationNumber,
      email : email,
      password :password,
    };
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed up 
        const user = userCredential.user;
        console.log(user);
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    // ..
  });
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/icons/ket.png')}
        style={styles.image}
        resizeMode="cover">
        <Animatable.View animation="zoomInUp" style={styles.formContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.subText}>Fill in your personal information</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}></View>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="#ABABA7"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}></View>
            <TextInput
              style={styles.input}
              placeholder="NIM"
              placeholderTextColor="#ABABA7"
              value={nim}
              onChangeText={setNim}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}></View>
            <TextInput
              style={styles.input}
              placeholder="Registration Number"
              placeholderTextColor="#ABABA7"
              value={registrationNumber}
              onChangeText={setRegistrationNumber}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}></View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#ABABA7"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}></View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#ABABA7"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          

          <View style={{marginBottom: 25}}></View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onSubmit}>
              <LinearGradient
                colors={['#161B90', '#161B90']}
                style={styles.loginButton}>
                <Text style={styles.loginText}>Creare account</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
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
    marginBottom: 10,
    fontFamily: 'Poppins-Bold',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    height: '20%',
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
    height: '75%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
    alignSelf: 'center',
    position: 'absolute',
    top: '10%',
  },
  subText: {
    color: 'black',
    fontSize: 14,
    marginBottom: 10,
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
    width: 200,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
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
    color: '#003f5c',
    fontSize: 15,
    alignSelf: 'center',
  },
  rememberMeContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 180,
  },
});

export default SignUp;
