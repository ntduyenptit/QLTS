import React from 'react';
import { Text, View } from 'react-native';
import CustomGridView from './CustomGridView';
import 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <CustomGridView />
      </View>

    );
  }
}

