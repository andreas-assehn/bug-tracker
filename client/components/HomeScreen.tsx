// @ts-nocheck
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BugList from './BugList';

export default function HomeScreen() {

  const [bugs, setBugs] = useState([]);


  return (
    <View>
      <BugList bugs={bugs}></BugList>
    </View>
  )
}