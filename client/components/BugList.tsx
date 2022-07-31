// @ts-nocheck
import Bug from './Bug';
import { ScrollView, View } from 'react-native';


export default function BugList({ bugs, navigation }) {
  return (
    <ScrollView>
      <View>
        {bugs.map(bug => <Bug key={bug._id} bug={bug} navigation={navigation}></Bug>)}
      </View>
    </ScrollView>
  )
}

