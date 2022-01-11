import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ArchesB from '.././assets/ArchesB.png'; 

export default class EnTete extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Image source={ArchesB} style={{ width: 250, height: 159 }} /> 
        <Text style={{marginVertical: 50, fontSize: 20, color: '#fff' }}>Bonjour {this.props.name} bienvenue !</Text>      
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