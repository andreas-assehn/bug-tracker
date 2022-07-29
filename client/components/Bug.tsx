// @ts-nocheck
import { StyleSheet, Text, View } from 'react-native';

export default function Bug({bug}) {
  return (
    <View style={styles.container}>
      <Text>{bug.title}</Text>
      <Text>{bug.priority}</Text>
    </View>
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