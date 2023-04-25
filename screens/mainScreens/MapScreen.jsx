import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export const MapScreen = ({ route }) => {
  const postItem = route.params;

  const region = {
    latitude: postItem?.location.latitude,
    longitude: postItem?.location.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        mapType="standard"
        minZoomLevel={15}
      >
        <Marker title={postItem.title} coordinate={region} description="" />
      </MapView>
    </View>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
