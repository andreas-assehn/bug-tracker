// @ts-nocheck
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles } from '../services/styles';

export default function Bug({ bug, navigation }) {
  return ( 
    <TouchableOpacity style={globalStyles.bugContainer} onPress={() => navigation.navigate('BugDetailsScreen', {bug})}>
      <View style={globalStyles.row1} >
        <View>
          <Text style={globalStyles.bugTitle}>{bug.title}</Text>
        </View>
        <View style={{flex:1}}></View>
        <View style={globalStyles.rightSide}>
          <Text style={globalStyles.boldText}>{bug.priority} priority</Text>
        </View>
      </View>
      <Text style={globalStyles.whiteText}>Assigned to: {bug.assignedTo}</Text>
      <Text style={globalStyles.whiteText}>Status: {bug.status}</Text>
    </TouchableOpacity>
  )
}
