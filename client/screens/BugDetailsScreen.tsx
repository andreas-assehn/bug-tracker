// @ts-nocheck
import { StyleSheet, Text, View, Button } from 'react-native';
import { deleteBug, editBug } from '../services/ApiService';
import { useState } from 'react';

export default function BugDetailsScreen({ route, navigation } ) {
  
  const { bug } = route.params;

  const handleEditSubmit = function() {
    return editBug(bug);
  }

  const handleDeleteSubmit = function() {
    return deleteBug(bug);
  }

  return (
    <View>
      <Text>{bug.title}</Text>
      <Text>{bug.priority}</Text>
      <Text>{bug.assignedTo}</Text>
      <Text>{bug.status}</Text>
      <Text>{bug.openedBy}</Text>
      <Text>{bug.description}</Text>
      <Button title='Edit' onPress={() => {handleEditSubmit(), navigation.navigate('EditBugScreen', {bug})}}/>
      <Button title='Delete' onPress={() => {handleDeleteSubmit(), navigation.goBack()}}/>
    </View>
  )
}