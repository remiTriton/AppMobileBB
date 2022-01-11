import React from 'react'
import { View, Button, TextInput, StyleSheet} from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder="Nom de la Cuvée" />
                <Button style={{ height: 50 }} title="Rechercher" onPress={() => {}}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1
    },

    textinput: {
        color: "#fff",
        marginLeft: 5, 
        marginRight: 5,
        marginTop: 10,
        height: 50,       
        borderColor: "#fff",
        borderWidth: 0.5,
        borderRadius: 20,
        paddingLeft: 5
    }
})
export default Search