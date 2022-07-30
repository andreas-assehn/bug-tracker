// @ts-nocheck
import { StyleSheet, Text, View, Button } from 'react-native';
import { deleteBug, editBug } from '../services/ApiService';
import { useEffect, useState } from 'react';

export default function BugDetailsScreen({ route, navigation } ) {
  
  const { bug } = route.params;

  const [bugState, setBugState] = useState(bug);

  useEffect(() => {
    if (route.params?.newBug) {
      setBugState(route.params.newBug)
    }
  })

  const handleEditSubmit = function() {
    return editBug(bugState);
  }

  const handleDeleteSubmit = function() {
    return deleteBug(bugState);
  }

  return (
    <View>
      <Text>{bugState.title}</Text>
      <Text>{bugState.priority}</Text>
      <Text>{bugState.assignedTo}</Text>
      <Text>{bugState.status}</Text>
      <Text>{bugState.openedBy}</Text>
      <Text>{bugState.description}</Text>
      <Button title='Edit' onPress={() => {handleEditSubmit(), navigation.navigate('EditBugScreen', {bugState})}}/>
      <Button title='Delete' onPress={() => {handleDeleteSubmit(), navigation.goBack()}}/>
    </View>
  )
}