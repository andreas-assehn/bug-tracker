// @ts-nocheck
import { Text, View, Button } from 'react-native';
import { deleteBug, editBug } from '../services/ApiService';
import { useEffect, useState } from 'react';
import { globalStyles } from '../services/styles';

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
    <View style={globalStyles.container}>
      <View style={globalStyles.bugDetailsContainer}>
      <View style={globalStyles.row1}>
        <Text style={globalStyles.bugTitle}>{bugState.title}</Text>
        <View style={{flex:1}}></View>
        <View style={globalStyles.rightSide}>
          <Text style={globalStyles.rightSide}>{bugState.priority} priority</Text>
        </View>
      </View>
        <Text style={globalStyles.bugDetailsText}><Text style={globalStyles.boldText}>Assigned to: </Text>{bugState.assignedTo}</Text>
        <Text style={globalStyles.bugDetailsText}><Text style={globalStyles.boldText}>Status: </Text>{bugState.status}</Text>
        <Text style={globalStyles.bugDetailsText}><Text style={globalStyles.boldText}>Opened by: </Text>{bugState.openedBy}</Text>
        <Text style={globalStyles.bugDetailsTextBold}>Description:</Text>
        <Text style={globalStyles.bugDetailsDescription}>{bugState.description}</Text>
        <View style={globalStyles.bugDetailsButtons}>
          <Button
            color={'#2C32C0'}
            title='Edit'
            onPress={() => {handleEditSubmit(), navigation.navigate('EditBugScreen', {bugState})}}/>
          <Button
            color={'#C23333'}
            title='Delete' onPress={() => {handleDeleteSubmit(), navigation.goBack()}}/>
        </View>
      </View>
    </View>
  )
}