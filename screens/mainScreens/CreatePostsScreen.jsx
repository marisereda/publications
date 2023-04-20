import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState, useEffect, useRef } from "react";
import { Input } from "../../components/Input";
import { InputLocation } from "../../components/InputLocation";
import { useScreen } from "../../hooks/useScreen";
import { ScreenWrap } from "../../components/ScreenWrap";
import { PostedPhoto } from "../../components/PostedPhoto";
import { AntDesign } from "@expo/vector-icons";
import { ButtonIconOval } from "../../components/ButtonIconOval";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { MaterialIcons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import * as DocumentPicker from "expo-document-picker";
import * as Location from "expo-location";

export const CreatePostsScreen = ({ navigation }) => {
  const [loadedPhoto, setLoadedPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const { screenWidth, isShowKeyboard, hideKeyboard, showKeyboard } = useScreen();

  const [coordsLocation, setCoordsLocation] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [camPermission, requestCamPermission] = Camera.useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();

  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isCameraTurnOn, setIsCameraTurnOn] = useState(false);

  const ref = useRef();

  useEffect(() => {
    (async () => {
      await requestCamPermission();
      await requestMediaPermission();
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return (
          <View style={styles.noAccessMessage}>
            <Text style={{ fontSize: 16 }}>Permission to access location was denied</Text>
          </View>
        );
      }
    })();
  }, []);

  if (!camPermission) {
    return <View />;
  }
  if (!camPermission.granted) {
    return (
      <View style={styles.noAccessMessage}>
        <Text style={{ fontSize: 16 }}>No access to camera</Text>
      </View>
    );
  }

  const handleAddPhoto = async () => {
    setIsCameraTurnOn(true);
  };

  const toggleCameraType = () => {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  };

  const takePhoto = async () => {
    if (isCameraReady) {
      try {
        const { uri } = await ref.current.takePictureAsync();
        setLoadedPhoto(uri);
        if (mediaPermission.granted) {
          await MediaLibrary.createAssetAsync(uri);
        }
        setIsCameraTurnOn(false);
      } catch (error) {
        return (
          <View style={styles.noAccessMessage}>
            <Text style={{ fontSize: 16 }}>error</Text>
          </View>
        );
      }
    }
  };

  const handleDownloadPhoto = async () => {
    const res = await DocumentPicker.getDocumentAsync({
      type: "image/*",
      copyToCacheDirectory: true,
    });
    if (res.type !== "success") {
      return;
    }
    setLoadedPhoto(res.uri);
  };

  const handleSubmit = async () => {
    if (!Boolean(loadedPhoto)) {
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    // console.log("🚧 location:", location);

    setCoordsLocation(location);
    setLoadedPhoto("");
    setTitle("");
    setLocation("");
    navigation.navigate("Posts");
  };
  const handleDeletePost = () => {
    setLoadedPhoto("");
    setTitle("");
    setLocation("");
  };
  // --------------------------- Render Camera  -----------------------------
  if (isCameraTurnOn) {
    return (
      <Camera style={styles.camera} type={type} ref={ref} onCameraReady={() => setIsCameraReady(true)}>
        <View style={styles.buttonSnapContainer}>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <MaterialIcons name="camera" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonToggleContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialIcons name="flip-camera-android" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </Camera>
    );
  }

  // ----------------------- Render Create Post ---------------------------
  return (
    <ScreenWrap hideKeyboard={hideKeyboard}>
      <View>
        <PostedPhoto isLoadedPhoto={Boolean(loadedPhoto)} loadedPhoto={loadedPhoto} handleAddPhoto={handleAddPhoto} />
        <Text style={styles.title} onPress={handleDownloadPhoto}>
          {Boolean(loadedPhoto) ? "Edit photo" : "Download photo"}
        </Text>
        <View style={styles.form}>
          <Input
            variant="flushed"
            textContentType="text"
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            showKeyboard={showKeyboard}
          />
          <InputLocation
            variant="flushed"
            textContentType="text"
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
            showKeyboard={showKeyboard}
          />
        </View>
        {!isShowKeyboard && (
          <View style={styles.buttonsWrap}>
            <ButtonSubmit text="Post" disabled={!Boolean(loadedPhoto)} onPress={handleSubmit} />
            <ButtonIconOval
              icon={AntDesign}
              iconProps={{ name: "delete" }}
              disabled={!Boolean(loadedPhoto)}
              onPress={handleDeletePost}
            />
          </View>
        )}
      </View>
    </ScreenWrap>
  );
};

// ------------------------- Styles ---------------------------
const styles = StyleSheet.create({
  noAccessMessage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
    // borderWidth: 1,
    // borderColor: "green",
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  form: {
    gap: 16,
    marginBottom: 32,
  },
  buttonsWrap: {
    // justifyContent: "flex-end",
    // alignSelf: "stretch",
    // borderWidth: 1,
    // borderColor: "green",
  },

  buttonSubmit: {
    padding: 16,
    marginTop: 0,
    marginBottom: 120,
    alignItems: "center",
    borderRadius: 50,
  },
  textButton: {
    pAddTop: 16,
    pAddBottom: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    // color: "#fff",
  },
});
