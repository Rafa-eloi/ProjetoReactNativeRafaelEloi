import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";
import HomeScreen from './screens/Home';
import CrudScreen from './screens/Crud';
import EntrarScreen from './screens/Entrar';
import LoginScreen from './screens/Login';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entrar">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Crud" component={CrudScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Entrar" component={EntrarScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}



export default App;

