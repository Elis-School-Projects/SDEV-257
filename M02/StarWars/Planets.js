import React from "react";
import { View, Text, Button, StatusBar } from "react-native";

import styles from "./styles";

export default function Planets({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Planets Screen</Text>
    </View>
  );
}