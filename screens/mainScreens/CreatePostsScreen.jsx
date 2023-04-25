import { AntDesign } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import * as DocumentPicker from "expo-document-picker";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";
import { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useSelector } from "react-redux";

import {
  ButtonIconOval,
  ButtonSubmit,
  Cam,
  Input,
  InputLocation,
  PostedPhoto,
  ScreenWrap,
} from "../../components";
import { uploadData, uploadPhoto } from "../../helpers";
import { useScreen } from "../../hooks/useScreen";
import { selectUser } from "../../redux/auth/authSlice";

export const CreatePostsScreen = ({ navigation }) => {
  const { isShowKeyboard, hideKeyboard, showKeyboard } = useScreen();
  const { uid } = useSelector(selectUser);
  const [loadedPhoto, setLoadedPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [locationName, setLocationName] = useState("");

  const [type, setType] = useState(CameraType.back);
  const [camPermission, requestCamPermission] = Camera.useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isCameraTurnOn, setIsCameraTurnOn] = useState(false);

  const [mediaPermission, requestMediaPermission] =
    MediaLibrary.usePermissions();

  const ref = useRef();

  useEffect(() => {
    (async () => {
      await requestCamPermission();
      await requestMediaPermission();
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
      }
    })();
  }, []);

  if (!camPermission) {
    return;
  }
  if (!camPermission?.granted) {
    Alert.alert("Permission to access camera was denied.");
  }

  // ******************** handle press camera button ********************
  // *
  const handleAddPhoto = async () => {
    setIsCameraTurnOn(true);
  };

  // ******************** switch camera ********************
  // *
  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  // ******************** save and load photo from camera ********************
  // *
  const handleTakePhoto = async () => {
    if (isCameraReady) {
      try {
        const { uri } = await ref.current.takePictureAsync();
        setLoadedPhoto(uri);
        if (mediaPermission.granted) {
          await MediaLibrary.createAssetAsync(uri);
        }
        setIsCameraTurnOn(false);
      } catch (error) {
        Alert.alert("Something went wrong", error.message);
      }
    }
  };

  // ******************** handle download photo ********************
  // *
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

  // ******************** handle delete post ********************
  // *
  const handleDeletePost = () => {
    setLoadedPhoto("");
    setTitle("");
    setLocationName("");
  };

  // ******************** handle submit ********************
  // *
  const handleSubmit = async () => {
    if (!loadedPhoto) {
      return;
    }

    const locationPromise = Location.getCurrentPositionAsync({});
    const photoPromise = uploadPhoto(loadedPhoto, "images/photos/");
    const [location, photoURL] = await Promise.all([
      locationPromise,
      photoPromise,
    ]);

    await uploadData("posts", {
      photoURL,
      title,
      location: location.coords,
      locationName,
      uid,
      likes: [],
      comments: [],
    });

    setLoadedPhoto("");
    setTitle("");
    setLocationName("");

    navigation.navigate("Posts");
  };

  // ******************** render camera ********************
  // *
  if (isCameraTurnOn) {
    return (
      <Cam
        type={type}
        ref={ref}
        onCameraReady={setIsCameraReady}
        onPressCamera={handleTakePhoto}
        onPressSwitchCamera={toggleCameraType}
      />
    );
  }

  // ******************** reder CreatePostScreen ********************
  // *
  return (
    <ScreenWrap hideKeyboard={hideKeyboard}>
      <View>
        <PostedPhoto
          isLoadedPhoto={Boolean(loadedPhoto)}
          loadedPhoto={loadedPhoto}
          handleAddPhoto={handleAddPhoto}
        />
        <Text style={styles.title} onPress={handleDownloadPhoto}>
          {loadedPhoto ? "Edit photo" : "Download photo"}
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
            value={locationName}
            onChangeText={setLocationName}
            showKeyboard={showKeyboard}
          />
        </View>
        {!isShowKeyboard && (
          <View style={styles.buttonsWrap}>
            <ButtonSubmit
              text="Post"
              disabled={!loadedPhoto}
              onPress={handleSubmit}
            />
            <ButtonIconOval
              icon={AntDesign}
              iconProps={{ name: "delete" }}
              disabled={!loadedPhoto}
              onPress={handleDeletePost}
            />
          </View>
        )}
      </View>
    </ScreenWrap>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
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
  },
});
