import React, { useState, useEffect } from "react";
import { View, Text, Button, StatusBar } from "react-native";

import styles from "../styles";

export default function Spaceships({ navigation }) {
  // Create var for API Data
  const [data, setData] = useState([]);
    
  // Fetch Films Data from SWAPI
  useEffect(() => {
    fetch('https://www.swapi.tech/api/starships')
      .then(response => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);
    
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Spaceships</Text>
        
      {/* Display List Items */}
      <View style={styles.itemContainer}>
          {
          data.map((item, index) => {
            return <Text key={index} style={styles.listName}>{item.name}</Text>
          })
        }
      </View>
    
    </View>
  );
}