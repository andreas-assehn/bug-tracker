// @ts-nocheck
import Bug from './Bug';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';


export default function BugList({ bugs, navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {bugs.map(bug => <Bug key={bug._id} bug={bug} navigation={navigation}></Bug>)}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
  }
})