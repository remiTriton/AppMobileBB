import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function FicheVin() {
  const [wines, setWines] = useState([]);
  const [pictures, setPictures] = useState([]);

  const getWines = async () => {
    try {
      const response = await fetch('https://stock.babelbabel.fr/api/wines/all/0/24');
      const data = await response.json();
      setWines(data.wines);
      console.log(json.wines)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWines();
  }, []);

  //new fonct picture
  const fetchPic = async () => {
    const response = await fetch(
      "https://stock.babelbabel.fr/api/wines/_id/imgBase64/data:image/png;base64/"
    );
    const data = await response.json();
    setPictures(data.wines);
    for (let post of data["data"]) {
      for (let img of post["img64BAse"]) {
        if (img['type'] == "image/png" || img["type"] == "image/jpeg") {
          setPictures => [...pictures, img];
        }
      }
    }
    useEffect(() => {
      fetchPic();
    }, []);
  }
  return (wines.map((wine) =>
    <View key={wine.id} style={styles.main_container}>
      <Image
        style={styles.image}
        source={{ uri: "imgBase64" }}
      />
      <View style={styles.content_container}>
        <View style={styles.header_container}>
          <Text style={styles.cuvee_text}>{wine.cuvee}</Text>
          <Text style={styles.couleur_text}>{wine.couleur}</Text>
        </View>
        <View style={styles.description_container}>
          <Text style={styles.description_text} numberOfLines={6}>{wine.description}</Text>
          {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
        </View>
        <View style={styles.date_container}>
          <Text style={styles.quantite_text}>{wine.quantite}</Text>
        </View>
      </View>
    </View>
  )
  )
}


const styles = StyleSheet.create({
  main_container: {
    height: 190,
    marginTop: 30,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: '#fff'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  cuvee_text: {
    fontWeight: 'bold',
    color: "#fff",
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  couleur_text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#fff'
  },
  date_container: {
    flex: 1
  },
  quantite_text: {
    textAlign: 'right',
    fontSize: 15,
    color: '#fff'

  }
})
