// @ts-nocheck
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';


export default function Bug({ bug, navigation }) {
  return ( 
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('BugDetailsScreen', {bug})}>
      <>
        <Text>{bug.title}</Text>
        <Text>Priority: {bug.priority}</Text>
      </>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    margin: '2%',
    marginBottom: '0%',
    padding: '1%',
    borderRadius: 5
  }
})