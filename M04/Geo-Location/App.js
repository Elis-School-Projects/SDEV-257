import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import styles from "./styles";

export default function App() {
  Location.requestForegroundPermissionsAsync();

  return (
    <View style={styles.container}>
      <MapView style={styles.mapView} showsUserLocation={true} followsUserLocation={true} showsPointsOfInterest={false}>
        <Marker 
          title="The Cheesecake Factory"
          description="Local eatery with excellent desert options!"
          coordinate={{
            latitude:39.633217081392196,
            longitude: -86.1231590864407
          }}
        />
      </MapView>
    </View>
  );
}