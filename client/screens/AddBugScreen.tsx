// @ts-nocheck
import { View, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { addBug } from '../services/ApiService';
import { initialState, checkFields } from '../services/helperService';
import { globalStyles } from '../services/styles';

export default function AddBug({ navigation }) {

  const [newBug, setNewBug] = useState(initialState);
  const [priority, setPriority] = useState();
  const [status, setStatus] = useState();

  const handleSubmit = function() {
    if (checkFields(newBug)) return
    navigation.goBack()
    return addBug(newBug);
  }

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder='Title'
        onChangeText={text => setNewBug({...newBug, title: text})}
      />
      <Picker
        selectedValue={priority}
        onValueChange={value => {setPriority(value), setNewBug({...newBug, priority: value})}}
      >
        <Picker.Item label='Select priority'/>
        <Picker.Item label='High' value='High'/>
        <Picker.Item label='Medium' value='Medium'/>
        <Picker.Item label='Low' value='Low'/>
      </Picker>
      <TextInput
        placeholder='Assigned to'
        onChangeText={text => setNewBug({...newBug, assignedTo: text})}
        />
      <Picker
        selectedValue={status}
        onValueChange={value => {setStatus(value), setNewBug({...newBug, status: value})}}
      >
        <Picker.Item label='Select status'/>
        <Picker.Item label='In limbo' value='In limbo'/>
        <Picker.Item label='In progress' value='In progress'/>
        <Picker.Item label='Fixed' value='Fixed'/>
      </Picker>
      <TextInput
        placeholder='Opened by'
        onChangeText={text => setNewBug({...newBug, openedBy: text})}
        />
      <TextInput
        placeholder='Description'
        onChangeText={text => setNewBug({...newBug, description: text})}
      />
      <Button title='Submit' onPress={() => {handleSubmit()}}/>
    </View>
  )
}