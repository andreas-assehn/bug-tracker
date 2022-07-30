// @ts-nocheck
import { Alert } from 'react-native';

exports.initialState = {
  title: undefined,
  priority: undefined,
  assignedTo: undefined,
  status: undefined,
  openedBy: undefined,
  description: undefined
}

exports.checkFields = function(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === 'Select priority' || value === 'Select status') {
      Alert.alert('All fields are required')
      return true;
    }
  }
  return false;
}