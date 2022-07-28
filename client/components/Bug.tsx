// @ts-nocheck
import { StyleSheet, Text, View } from 'react-native';

export default function Bug({bug}) {
  return (
    <View>
      <Text>
        {bug.description}
      </Text>
    </View>
  )
}