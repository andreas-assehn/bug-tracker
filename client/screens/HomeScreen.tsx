// @ts-nocheck
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BugList from '../components/BugList';


export default function HomeScreen() {

  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetch('https://4a40-80-62-116-88.eu.ngrok.io/bugs')
      .then(response => response.json())
      .then(bugsList => setBugs(bugsList))
  }, [])

  return (
    <View>
      <BugList bugs={bugs}></BugList>
    </View>
  )
}