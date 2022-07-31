// @ts-nocheck
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, TextInput, Button, Alert, Text, Pressable } from 'react-native';
import { globalStyles } from '../services/styles';

export default function Login() {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Move this login function to services!!!
  const login = () => {
    if (email === 'A' && password === 'S') {
      navigation.reset({
        index: 0,
        routes: [{name: 'All bugs'}]
      })
    } else Alert.alert('Error', 'User does not exist')
  }


  return (
    <View style={globalStyles.loginBackground} >
      <View style={globalStyles.login}>
        <Text style={globalStyles.loginTitle}>beDone</Text>
        <TextInput
        style={globalStyles.loginInputText}
        placeholder='Email'
        placeholderTextColor={'white'}
        onChangeText={text => setEmail(text)}
        value={email}
        />
        <TextInput
        style={globalStyles.loginInputText}
        placeholder='Password'
        placeholderTextColor={'white'}
        onChangeText={text => setPassword(text)}
        value={password}
        />
        <Button title='Login' onPress={login} style={globalStyles.loginButton} color='#2C32C0' />
      </View>
    </View>
  )
}