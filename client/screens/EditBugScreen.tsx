// @ts-nocheck
import { View, Button, TextInput, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { editBug } from '../services/ApiService';
import { checkFields } from '../services/helperService';
import { globalStyles } from '../services/styles';


export default function AddBug({ navigation, route }) {

  const { bugState } = route.params;

  const [newBug, setNewBug] = useState(bugState);
  const [priority, setPriority] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    setPriority(newBug.priority);
    setStatus(newBug.status);
  })

  const handleSubmit = function() {
    if (checkFields(newBug)) return
    navigation.navigate({name: 'BugDetailsScreen', params: {newBug: newBug}});
    return editBug(newBug);
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.bugContainer}>
        <Text style={globalStyles.whiteText}>Title:</Text>
        <TextInput
          placeholder='Title'
          value={newBug.title}
          onChangeText={text => setNewBug({...newBug, title: text})}
          placeholderTextColor={'white'}
          style={globalStyles.inputText}
        />
        <Text style={globalStyles.whiteText}>Assigned to:</Text>
        <TextInput
          placeholder='Assigned to'
          value={newBug.assignedTo}
          onChangeText={text => setNewBug({...newBug, assignedTo: text})}
          placeholderTextColor={'white'}
          style={globalStyles.inputText}
          />
        <Text style={globalStyles.whiteText}>Opened by:</Text>
        <TextInput
          placeholder='Opened by'
          value={newBug.openedBy}
          onChangeText={text => setNewBug({...newBug, openedBy: text})}
          placeholderTextColor={'white'}
          style={globalStyles.inputText}
          />
        <Text style={globalStyles.whiteText}>Description:</Text>
        <TextInput
          placeholder='Description'
          value={newBug.description}
          onChangeText={text => setNewBug({...newBug, description: text})}
          placeholderTextColor={'white'}
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