// @ts-nocheck
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import BugDetailsScreen from './components/BugDetailsScreen';
import AddBug from './components/AddBug';


const Stack = createNativeStackNavigator();

export default function App({bugs}) {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='All bugs' component={HomeScreen}  options={({ navigation }) => ({
          headerRight: () => (
            <Button title='+' onPress={() => navigation.navigate('AddBug', {bugs})} />
          )    
        })} />
        <Stack.Screen name='AddBug' component={AddBug}/>
        <Stack.Screen name='BugDetailsScreen' component={BugDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// REMEMBER CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
