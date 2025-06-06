import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";

import PlanetsImage from "../assets/planet.png";
import LazyImage from "../components/LazyImage";
import Swipeable from "../components/Swipeable";
import Alert from "../components/Alert";
import styles from "../styles";

export default function Planets({ navigation }) {
  // Create var for API Data
  const [data, setData] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  
  // Fetch Films Data from SWAPI
  useEffect(() => {
    fetch('https://www.swapi.tech/api/planets')
      .then(response => response.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  // Helper Functions
  const dismiss = () => setAlertVisible(false);
  function onSwipe(name) {
    return () => {
      setAlertMessage(name);
      setAlertVisible(true);
      setData(data.filter((item) => item.name !== name));
    };
  }
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <LazyImage
        style={{ width: 200, height: 150 }}
        resizeMode="contain"
        source={PlanetsImage}
      />

      <Text style={styles.title}>Planets</Text>
      
      {/* Display List Items */}
      <View style={styles.itemContainer}>
        <ScrollView style={styles.list}>
          {
            data.map((item, index) => {
              return <Animated.View key={index} entering={SlideInLeft} exiting={SlideOutRight}><Swipeable name={item.name} onSwipe={onSwipe(item.name)} /></Animated.View>
            })
          }
        </ScrollView>
      </View>

      <Alert
        message={alertMessage}
        visible={alertVisible}
        buttons={[
          {
            text: "Dismiss",
            onPress: dismiss
          },
        ]}
      />
  
    </View>
  );
}