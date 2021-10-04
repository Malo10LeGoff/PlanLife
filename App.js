
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import TaskListScreen from './screens/TaskListScreen';
import ForgotPwdScreen from './screens/ForgotPwdScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SplashScreen} />
        <Stack.Screen name="SignInTab" component={SignInScreen} />
        <Stack.Screen name="SignUpTab" component={SignUpScreen} />
        <Stack.Screen name="TaskListTab" component={TaskListScreen} />
        <Stack.Screen name="ForgotPwdTab" component={ForgotPwdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;