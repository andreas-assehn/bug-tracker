// @ts-nocheck
import React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import BugList from '../components/BugList';
import { getBugs } from '../services/ApiService';
import { globalStyles } from '../services/styles';



export default function HomeScreen({ navigation }) {

  const [bugs, setBugs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getBugs()
      .then(response => response.json())
      .then(bugsList => setBugs(bugsList))
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {

  })

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable style={globalStyles.addButton} onPress={() => navigation.navigate('AddBugScreen')} >
          <Text style={globalStyles.addButton}>+</Text>
        </Pressable>
      )
    });
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
      <TextInput
        placeholder='Search...'
        onChangeText={setSearch}
        value={search}
      />
      <BugList bugs={bugs} navigation={navigation}></BugList>
    </View>
  )
}

