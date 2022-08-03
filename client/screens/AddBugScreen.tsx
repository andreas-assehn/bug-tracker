// @ts-nocheck
import { View, Button, TextInput, Text } from 'react-native';
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
    // navigation.goBack();
    return addBug(newBug)
      .then(response => response.json())
      .then(addedBug => {
        console.log(addedBug);
        navigation.navigate({name: 'All bugs', params: {newBug: addedBug}})
      })
      .catch(e => console.log(e))
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.bugContainer}>
        <Text style={globalStyles.whiteText}>Title:</Text>
        <TextInput
          placeholder='Enter title...'
          placeholderTextColor={'white'}
          onChangeText={text => setNewBug({...newBug, title: text})}
          style={globalStyles.inputText}
        />
        <Text style={globalStyles.whiteText}>Assigned to:</Text>
        <TextInput
          placeholder='Enter assignee...'
          placeholderTextColor={'white'}
          onChangeText={text => setNewBug({...newBug, assignedTo: text})}
          style={globalStyles.inputText}
          />
        <Text style={globalStyles.whiteText}>Opened by:</Text>
        <TextInput
          placeholder='Enter creator...'
          placeholderTextColor={'white'}
          onChangeText={text => setNewBug({...newBug, openedBy: text})}
          style={globalStyles.inputText}
          />
        <Text style={globalStyles.whiteText}>Description:</Text>
        <TextInput
          placeholder='Enter description...'
          placeholderTextColor={'white'}
          onChangeText={text => setNewBug({...newBug, description: text})}
          style={globalStyles.inputText} 
          multiline = {true}
        />
        <Picker
          selectedValue={priority}
          onValueChange={value => {setPriority(value), setNewBug({...newBug, priority: value})}}
          dropdownIconColor={'white'}
          mode='dropdown'
          style={{color: 'white'}}
        >
          <Picker.Item label='Select priority'/>
          <Picker.Item label='High' value='High'/>
          <Picker.Item label='Medium' value='Medium'/>
          <Picker.Item label='Low' value='Low'/>
        </Picker>
        <Picker
          selectedValue={status}
          onValueChange={value => {setStatus(value), setNewBug({...newBug, status: value})}}
          color={'white'}
          dropdownIconColor={'white'}
          mode='dropdown'
          style={{color: 'white'}}
        >
          <Picker.Item label='Select status'/>
          <Picker.Item label='To be fixed' value='To be fixed'/>
          <Picker.Item label='In progress' value='In progress'/>
          <Picker.Item label='Fixed' value='Fixed'/>
        </Picker>
        <View style={globalStyles.bugSubmitButton}>
          <Button color='#2C32C0' title='Submit' onPress={() => {handleSubmit()}}/>
        </View>
      </View>
    </View>
  )
}