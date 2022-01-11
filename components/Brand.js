import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, TextInput, loginButton, loginTextSection, loginButtonSection, ScrollView } from 'react-native';
import React from 'react';
import ArchesB from '.././assets/ArchesB.png';
import { CurrentRenderContext } from '@react-navigation/native';

export default class Brand extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={ArchesB} style={{ width: 250, height: 159, marginTop: 250 }} />
          <Text style={{ marginVertical: 20, fontSize: 20, color: '#fff' }}>Bonjour {this.props.name} bienvenue !</Text>

          {/* <View style={styles.loginTextSection}>
            <TextInput placeholder='UserName' style={styles.inputText} />
            <TextInput placeholder='Password' style={styles.inputText} secureTextEntry={true} />
          </View>

          <View style={styles.loginButtonSection}>
            <Button onPress={() => doLoginStuff()}
              style={styles.loginButton}
              title="Login"
            />

          </View> */}
        </View>
        </ScrollView>
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
  // loginTextSection: {
  //   width: '100%',
  //   height: '30%',
  // },

  // loginButtonSection: {
  //   width: '100%',
  //   height: '30%',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },

  // TextInput: {
  //   marginLeft: '60%',
  //   width: '60%'
  // },

  // loginButton: {
  //   backgroundColor: 'white',
  //   color: 'white'
  // }
}

);
