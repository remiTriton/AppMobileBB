import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Brand from './components/Brand';
import CatButon from './components/CatButon';
import Search from './components/Search';
import FicheVin from './components/FicheVin';

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        {/* <Brand name="Rémi" /> */}
        {/* <CatButon /> */}
        <FicheVin />
        <Search />
      </View>
    );
    }}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#2a574c',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  
