// @ts-nocheck
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BugDetailsScreen from './screens/BugDetailsScreen';
import AddBugScreen from './screens/AddBugScreen';
import EditBugScreen from './screens/EditBugScreen';
import Login from './screens/Login';
import RegisterModal from './screens/RegisterScreen';
import RegisterScreen from './screens/RegisterScreen';


const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: {backgroundColor: '#2C32C0'},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          statusBarStyle: 'white',
          statusBarColor: '#2C32C0'
        }}
      >
        <Stack.Screen name='Login' component={Login} options={{headerShown: false, statusBarColor: '#161A77'}} />
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown: false, statusBarColor: '#161A77'}} />
        <Stack.Screen name='All bugs' component={HomeScreen} options={{ title: 'All bugs' }} />
        <Stack.Screen name='AddBugScreen' component={AddBugScreen} options={{title: 'New bug'}} />
        <Stack.Screen name='EditBugScreen' component={EditBugScreen} options={{title: 'Edit bug'}} />
        <Stack.Screen name='BugDetailsScreen' component={BugDetailsScreen} options={{title: 'Details'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
