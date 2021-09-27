
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import TaskListScreen from './components/TaskListScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SplashScreen} />
        <Stack.Screen name="SignInTab" component={SignInScreen} />
        <Stack.Screen name="SignUpTab" component={SignUpScreen} />
        <Stack.Screen name="TaskListTab" component={TaskListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;