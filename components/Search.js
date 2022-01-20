import React, {useEffect, useState} from 'react'
import {View, Button, TextInput, StyleSheet, FlatList, Text} from 'react-native'
import FicheVin from '../components/FicheVin';

export default function () {
    const [wines, setWines] = useState([]);

    const getWines = async () => {
        try {
            const response = await fetch('https://stock.babelbabel.fr/api/wines/all/0/24');
            const data = await response.json();

            return data.wines;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    useEffect(async () => {
        const wines = await getWines();
        console.log('nb of wines: ', wines.length);
        setWines(wines);
    }, []);

    return (
        <View style={styles.main_container}>
            <FlatList
                data={wines}
                keyExtractor={(item) => String(item._id)}
                renderItem={({ item }) => <FicheVin wine={item} />} />

            <TextInput style={styles.textinput} placeholder="Nom de la Cuvée"/>

            <Button style={{height: 50}} title="Rechercher" onPress={() => {
            }}/>
        </View>
    );
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