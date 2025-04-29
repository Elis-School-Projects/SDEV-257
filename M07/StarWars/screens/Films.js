import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import NetInfo from "@react-native-community/netinfo";

const connectedMap = {
  none: "Disconnected",
  unknown: "Disconnected",
  wifi: "Connected",
  cell: "Connected",
  mobile: "Connected",
};

import FilmsImage from "../assets/films.jpg";
import LazyImage from "../components/LazyImage";
import Swipeable from "../components/Swipeable";
import styles from "../styles";

export default function Films({ navigation }) {
  // Create var for API Data
  const [data, setData] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertData, setAlertData] = useState({});
  const [connected, setConnected] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Check Network Connection
  useEffect(() => {
    function onNetworkChange(connection) {
      setConnected(connectedMap[connection.type]);
    }

    const unsubscribe = NetInfo.addEventListener(onNetworkChange);

    return () => {
      unsubscribe();
    };
  }, []);

  // Fetch Films Data from SWAPI
  useEffect(() => {
    fetch('https://www.swapi.tech/api/films')
      .then(response => response.json())
      .then((data) => {
        setData(data.result);
      });
  }, []);

  // Helper Functions
  const dismiss = () => setAlertVisible(false);
  function onSwipe(item) {
    return () => {
      setAlertData(item);
      setAlertVisible(true);
      setData(data.filter((value) => value.properties.title !== item.properties.title));
    };
  }

  const DetailsPage = () => {
    if (alertData && alertData.properties) {
      return (
        <View style={alertVisible ? styles.detailsContainer : styles.hidden}>
          <TouchableOpacity onPress={() => dismiss()}>
            <Text style={styles.closePage}>X</Text>
            <Text style={styles.detailsTitle}>{alertData.properties.title}</Text>
            <Text style={styles.detailsBody}>{alertData.properties.director}</Text>
            <Text style={styles.detailsBody}>Episode: {alertData.properties.episode_id}</Text>
            <Text style={styles.detailsCrawl}>{alertData.properties.opening_crawl}</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
    
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <LazyImage
        style={{ width: 200, height: 150 }}
        resizeMode="contain"
        source={FilmsImage}
      />

      <Text style={styles.title}>Films</Text>
      <Text>{connected}</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={'Search for Films'} value={searchTerm} onChangeText={text => setSearchTerm(text)} />
      </View>
        
      {/* Display List Items */}
      <View style={styles.itemContainer}>
        <ScrollView style={styles.list}>
          {
            data.filter(value => {return value.properties.title.includes(searchTerm)}).map((item, index) => {
              return <Animated.View key={index} entering={SlideInLeft} exiting={SlideOutRight}><Swipeable name={item.properties.title} onSwipe={onSwipe(item)} /></Animated.View>
            })
          }
        </ScrollView>
      </View>

      <DetailsPage />
    
    </View>
  );
}