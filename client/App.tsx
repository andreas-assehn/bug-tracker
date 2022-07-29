// @ts-nocheck
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BugDetailsScreen from './screens/BugDetailsScreen';
import AddBug from './screens/AddBugScreen';



const Stack = createNativeStackNavigator();

export default function App({ setBugs }) {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='All bugs'>
        <Stack.Screen
          name='All bugs'
          component={HomeScreen}
          options={({ navigation }) => ({headerRight: () => (
            <Button title='+' onPress={() => navigation.navigate('AddBugScreen', {setBugs})} />
          )})}
        />
        <Stack.Screen name='AddBugScreen' component={AddBug} options={{title: 'New bug'}} />
        <Stack.Screen name='BugDetailsScreen' component={BugDetailsScreen}
          options={{title: 'Details'}, ({ navigation }) => ({headerRight: () => (
            <Button title='Edit' onPress={() => navigation.navigate('AddBugScreen', {setBugs})} />
          )})}
        />
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
