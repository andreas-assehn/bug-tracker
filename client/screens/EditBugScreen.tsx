// @ts-nocheck
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { editBug } from '../services/ApiService';
import { checkFields } from '../services/helperService';


export default function AddBug({ navigation, route }) {

  const { bug } = route.params;

  const [newBug, setNewBug] = useState(bug);
  const [priority, setPriority] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    setPriority(newBug.priority);
    setStatus(newBug.status);
  })

  const handleSubmit = function() {
    if (checkFields(newBug)) return
    navigation.navigate({name: 'BugDetailsScreen', params: {newBug}});
    return editBug(newBug);
  }

  return (
    <View>
      <TextInput
        placeholder='Title'
        value={newBug.title}
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
        value={newBug.assignedTo}
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
        value={newBug.openedBy}
        onChangeText={text => setNewBug({...newBug, openedBy: text})}
        />
      <TextInput
        placeholder='Description'
        value={newBug.description}
        onChangeText={text => setNewBug({...newBug, description: text})}
      />
      <Button title='Submit' onPress={() => {handleSubmit()}}/>
    </View>
  )
}