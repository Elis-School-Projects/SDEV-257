import React, { useState } from "react";
import { View, Text, Button, StatusBar, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Films({ navigation }) {
  const [searchTerm, setSearchTerm] = useState();
    const [currentSearch, setCurrentSearch] = useState();
  
    function search() {
      setCurrentSearch(searchTerm);
    }
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.title}>Films</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={'Search for Films'} value={searchTerm} onChangeText={text => setSearchTerm(text)} />
          <TouchableOpacity style={styles.button} onPress={() => search()}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.currentSearch}><Text style={styles.bold}>Searching for:</Text> { currentSearch }</Text>
      </View>
    );
}