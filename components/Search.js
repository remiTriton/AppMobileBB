import React from 'react'
import { View, Button, TextInput, StyleSheet, FlatList, Text } from 'react-native'
import Wines from '../Helpers/WinesData';
import FicheVin from '../components/FicheVin';


class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>           
                    <FlatList           
                        data={Wines}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <FicheVin Wines={item}/>}                           
                         />     
                         <TextInput style={styles.textinput} placeholder="Nom de la Cuvée" />
                <Button style={{ height: 50 }} title="Rechercher" onPress={() => { }} />      
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
    },

    textinput: {
        color: "#fff",
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 35,
        height: 50,
        borderColor: "#fff",
        borderWidth: 0.5,
        borderRadius: 20,
        paddingLeft: 5
    },
})
export default Search