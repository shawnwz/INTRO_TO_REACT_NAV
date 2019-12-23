import React from 'react';
import { View, StyleSheet } from 'react-native';

import ScreenName from '../components/ScreenName.js'

export default class ScreenOne extends React.Component {

  static navigationOptions = {

  };

  render() {
    return (
      <View style={styles.container}>
        <ScreenName name={'Screen One'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
