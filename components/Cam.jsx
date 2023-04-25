import { MaterialIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { View, StyleSheet, TouchableOpacity } from "react-native";

export const Cam = ({
  type,
  ref,
  onCameraReady,
  onPressCamera,
  onPressSwitchCamera,
}) => {
  return (
    <Camera
      style={styles.camera}
      type={type}
      ref={ref}
      onCameraReady={() => onCameraReady(true)}
    >
      <View style={styles.buttonSnapContainer}>
        <TouchableOpacity onPress={onPressCamera}>
          <MaterialIcons name="camera" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonToggleContainer}>
        <TouchableOpacity onPress={onPressSwitchCamera}>
          <MaterialIcons name="flip-camera-android" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  buttonSnapContainer: {
    position: "absolute",
    height: 60,
    width: 60,
    bottom: 20,
    right: "50%",
    transform: [{ translateX: 30 }],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
  },
  buttonToggleContainer: {
    position: "absolute",
    height: 60,
    width: 60,
    bottom: 20,
    right: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
  },
});
