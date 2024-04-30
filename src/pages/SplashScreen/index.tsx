import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Unklab, Back } from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <ImageBackground source={Back} style={styles.container}>
      <View style={styles.header}>
        <Animatable.View animation="zoomInUp" duration={1500}>
          <Image
            source={Unklab}
            style={styles.logo}
            resizeMode="stretch"
          />
        </Animatable.View>
      </View>

      <View style={[styles.footer, { backgroundColor: '#F0000', justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ fontFamily: 'Poppins-Bold', color: 'white', marginTop: -450, fontSize: 40 }}>
          Unklab Votes
        </Text>
      </View>
    </ImageBackground>
  );
};

const { height } = Dimensions.get('screen');
const height_logo = height * 0.25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 1,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
});

export default SplashScreen;
