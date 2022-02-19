import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signup,Login,Options,Application } from '../screens';

const Stack = createNativeStackNavigator();
  function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,}}>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Options" component={Options} />
          <Stack.Screen name="Form" component={Application} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;
