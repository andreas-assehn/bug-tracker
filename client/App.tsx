// @ts-nocheck
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BugDetailsScreen from './screens/BugDetailsScreen';
import AddBugScreen from './screens/AddBugScreen';
import EditBugScreen from './screens/EditBugScreen';
import Login from './screens/Login';


const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerStyle: {backgroundColor: '#161A77'},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          statusBarStyle: 'white',
          statusBarColor: '#161A77'
        }}
      >
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
        <Stack.Screen
          name='All bugs'
          component={HomeScreen}
          options={{
            title: 'All bugs',
          }}
        />
        <Stack.Screen name='AddBugScreen' component={AddBugScreen} options={{title: 'New bug'}} />
        <Stack.Screen name='EditBugScreen' component={EditBugScreen} options={{title: 'Edit bug'}} />
        <Stack.Screen name='BugDetailsScreen' component={BugDetailsScreen} options={{title: 'Details'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
