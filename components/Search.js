import React from 'react'
import { View, Button, TextInput } from 'react-native'

class Search extends React.Component {
    render() {
        return (
            <View>
                <TextInput style={{marginBottom: 30, color: "#fff" }} placeholder="Nom de la Cuvée" />
                <Button title="Rechercher" onPress={() => {}}/>
            </View>
        )
    }
}
export default Search