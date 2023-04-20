import { Text, View, StyleSheet, Dimensions } from "react-native";

import MapView, { Marker } from "react-native-maps";

const region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const markers = [
  {
    title: "I am here",
    latitude: 37.78825,
    longitude: -122.4324,
    description: "Hello",
  },
];

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        mapType="standard"
        minZoomLevel={15}
        // onMapReady={() => console.log("Map is ready")}
        // onRegionChange={() => console.log("Region change")}
      >
        <Marker title="I am here" coordinate={{ latitude: 37.78825, longitude: -122.4324 }} description="Hello" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height
  },
});
