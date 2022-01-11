import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import ArchesB from './assets/ArchesB.png'; 



export default function App() {
  return (
    <View style={styles.container}>
        <Image source={require('./assets/ArchesB.png')} style={{ width: 250, height: 159 }} />
      <Text style={{color: '#fff', marginVertical: 15, fontSize: 20 }}>Bienvenue sur Babel Babel Stock</Text>
      <StatusBar style="auto" />

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ marginVertical: 50 }}>
        <Text style={{ fontSize: 20, color: '#DFBCC2' }}>Click to Sign In</Text>
      </TouchableOpacity>

     

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a574c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

