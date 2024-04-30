import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, SignIn, SignUp, SplashSuccess} from '../pages';
import HomeScreen from '../pages/HomeScreen';
import VoteScreen from '../pages/VoteScreen';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="VoteScreen"
        component={VoteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SplashSuccess"
        component={SplashSuccess}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;