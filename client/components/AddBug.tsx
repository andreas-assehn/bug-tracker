// @ts-nocheck
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';


export default function AddBug() {

  // const initialState = {priority: '', status: ''}
  const [newBug, setNewBug] = useState();
  const [priority, setPriority] = useState();
  const [status, setStatus] = useState();

  return (
    <View>
      <TextInput
        placeholder='Title'
        onChangeText={text => setNewBug({title: text})}
      />
      <Picker
        selectedValue={priority}
        onValueChange={value => {setPriority(value), setNewBug({priority: value})}}
      >
        <Picker.Item label='Select priority'/>
        <Picker.Item label='High' value='High'/>
        <Picker.Item label='Medium' value='Medium'/>
        <Picker.Item label='Low' value='Low'/>
      </Picker>
      <TextInput
        placeholder='Assigned to'
        onChangeText={text => setNewBug({assignedTo: text})}
        />
      <Picker
        selectedValue={status}
        onValueChange={value => {setStatus(value), setNewBug({status: value})}}
      >
        <Picker.Item label='Select status'/>
        <Picker.Item label='In limbo' value='In limbo'/>
        <Picker.Item label='In progress' value='In progress'/>
        <Picker.Item label='Fixed' value='Fixed'/>
      </Picker>
      <TextInput
        placeholder='Opened by'
        onChangeText={text => setNewBug({openedBy: text})}
        />
      <TextInput
        placeholder='Description'
        onChangeText={text => setNewBug({description: text})}
        />
    </View>
  )
}