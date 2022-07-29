// @ts-nocheck
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BugDetailsScreen from './screens/BugDetailsScreen';
import AddBug from './components/AddBug';


const Stack = createNativeStackNavigator();

export default function App({setBugs}) {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='All bugs' component={HomeScreen}  options={({ navigation }) => ({
          headerRight: () => (
            <Button title='+' onPress={() => navigation.navigate('Add Bug', {setBugs})} />
          )    
        })} />
        <Stack.Screen name='Add Bug' component={AddBug}/>
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
