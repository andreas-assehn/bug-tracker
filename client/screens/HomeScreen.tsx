// @ts-nocheck
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BugList from '../components/BugList';
import { getBugs } from '../services/ApiService';


export default function HomeScreen({ navigation }) {

  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    getBugs()
      .then(response => response.json())
      .then(bugsList => setBugs(bugsList))
      .catch(e => console.log(e))
  }, [bugs])

  return (
    <View>
      <BugList bugs={bugs} navigation={navigation}></BugList>
    </View>
  )
}