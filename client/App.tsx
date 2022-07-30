// @ts-nocheck
import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BugDetailsScreen from './screens/BugDetailsScreen';
import AddBugScreen from './screens/AddBugScreen';
import EditBugScreen from './screens/EditBugScreen';


const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='All bugs'>
        <Stack.Screen
          name='All bugs'
          component={HomeScreen}
          options={({ navigation }) => ({headerRight: () => (
            <Pressable style={styles.button} onPress={() => navigation.navigate('AddBugScreen')} >
              <Text style={styles.button}>+</Text>
            </Pressable>
          )})}
        />
        <Stack.Screen name='AddBugScreen' component={AddBugScreen} options={{title: 'New bug'}} />
        <Stack.Screen name='EditBugScreen' component={EditBugScreen} options={{title: 'Edit bug'}} />
        <Stack.Screen name='BugDetailsScreen' component={BugDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// REMEMBER CSS
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    color: '#2C651E',
    padding: 5,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 30
    
  }
});
