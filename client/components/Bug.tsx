// @ts-nocheck
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Bug({ bug, navigation }) {
  return ( 
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('BugDetailsScreen', {bug})}>
      <View style={styles.row1} >
        <View>
          <Text style={styles.title}>{bug.title}</Text>
        </View>
        <View style={{flex:1}}></View>
        <View style={styles.rightSide}>
          <Text style={styles.boldText}>{bug.priority} priority</Text>
        </View>
      </View>
      <Text style={styles.whiteText}>Assigned to: {bug.assignedTo}</Text>
      <Text style={styles.whiteText}>Status: {bug.status}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C651E',
    margin: '2%',
    marginBottom: '0%',
    padding: '3%',
    borderRadius: 10,
  },
  row1: {
    flexDirection: 'row'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: '2%',
    color: '#EFEFEF'
    
  },
  boldText: {
    fontWeight: 'bold',
    color: '#EFEFEF'
  },
  whiteText: {
    color: '#EFEFEF'
  }
})