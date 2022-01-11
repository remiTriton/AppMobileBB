import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import React from 'react';
import ArchesB from '.././assets/ArchesB.png'; 

export default class EnTete extends React.Component {
  render() {
    return (
        <ScrollView>
      <View style={styles.container}>
          <Image source={ArchesB} style={{ width: 250, height: 159, marginTop: 80 }} /> 
        <Text style={{marginVertical: 50, fontSize: 20, color: '#fff' }}>Bonjour {this.props.name} bienvenue !</Text>


        {/* <Button style={{ marginTop: 25, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1 }}
        title="Bulles"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> 
      <Button 
        title="Rouge"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> 
      <Button 
        title="Blanc"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Button 
        title="Rosé"
        onPress={() => Alert.alert('Simple Button pressed')}
      />   
      <Button 
        title="Ovni"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> 
      <Button 
        title="Magnum"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> 
      <Button 
        title="Bière"
        onPress={() => Alert.alert('Simple Button pressed')}
      /> 
      <Button 
        title="Alchool"
        onPress={() => Alert.alert('Simple Button pressed')}
      />  */}
          
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
  
});