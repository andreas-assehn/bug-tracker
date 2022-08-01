// @ts-nocheck
import { useState } from 'react';
import { View, TextInput, Text, Button } from "react-native";
import { globalStyles } from "../services/styles";
import { useFonts } from 'expo-font'
import { Login } from './Login';

export default function RegisterScreen({ navigation }) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = function() {
    navigation.goBack()
    return true;
  }

  const [loaded] = useFonts({
    Splash: require('../assets/fonts/Splash/Splash-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.loginBackground}>
      <View style={globalStyles.login}>
      <View style={globalStyles.registerTitle}>
          <Text style={{ fontFamily: 'Splash', color: 'white', fontSize: 65}}> beDone </Text>
      </View>
        <TextInput
          style={globalStyles.loginInputText}
          placeholder='Email'
          placeholderTextColor={'white'}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={globalStyles.loginInputText}
          placeholder='Firstname'
          placeholderTextColor={'white'}
          onChangeText={text => setFirstName(text)}
          value={firstName}
        />
        <TextInput
          style={globalStyles.loginInputText}
          placeholder='Lastname'
          placeholderTextColor={'white'}
          onChangeText={text => setLastName(text)}
          value={lastName}
        />
        <TextInput
          style={globalStyles.loginInputText}
          placeholder='Role'
          placeholderTextColor={'white'}
          onChangeText={text => setRole(text)}
          value={role}
        />
        <TextInput
          style={globalStyles.loginInputText}
          placeholder='Password'
          placeholderTextColor={'white'}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <View style={globalStyles.loginButtonWidth}>
          <Button title='Register' onPress={() => {handleSubmit()}} style={globalStyles.loginButton} color='#2C32C0' />
        </View>
        <Text style={globalStyles.register} onPress={() => navigation.navigate('Login')}>Cancel</Text>
      </View>
    </View>
  )
  
}