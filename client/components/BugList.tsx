// @ts-nocheck
import Bug from './Bug';
import { StyleSheet, Text, View } from 'react-native';

export default function BugList({bugs}) {
  return (
    <View>
      {bugs.map(bug => <Bug key={bug._id} bug={bug}></Bug>)}
    </View>
  )
}