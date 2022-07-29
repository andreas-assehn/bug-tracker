// @ts-nocheck
import { StyleSheet, Text, View, Button } from 'react-native';
import { deleteBug } from '../services/ApiService';

export default function BugDetailsScreen({ route, navigation } ) {
  
  const { bug } = route.params;

  const handleSubmit = function() {
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
      <Button title='Delete' onPress={() => {handleSubmit(), navigation.goBack()}}/>
    </View>
  )
}