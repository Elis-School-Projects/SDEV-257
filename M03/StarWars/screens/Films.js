import React, { useState, useEffect } from "react";
import { View, Text, StatusBar } from "react-native";

import styles from "../styles";

export default function Films({ navigation }) {
  // Create var for API Data
  const [data, setData] = useState([]);

  // Fetch Films Data from SWAPI
  useEffect(() => {
    fetch('https://www.swapi.tech/api/films')
      .then(response => response.json())
      .then((data) => {
        setData(data.result);
      });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Films</Text>
      
      {/* Display List Items */}
      <View style={styles.itemContainer}>
        {
          data.map((item, index) => {
            return <Text key={index} style={styles.listName}>{item.properties.title}</Text>
          })
        }
      </View>

    </View>
  );
}