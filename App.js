import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import EnTete from './components/EnTete';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <EnTete name="Rémi"/>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a574c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

