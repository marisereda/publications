import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { Input } from "../../components/Input";
import { InputLocation } from "../../components/InputLocation";
import { useScreen } from "../../hooks/useScreen";
import { ScreenWrap } from "../../components/ScreenWrap";
import { ButtonDelete } from "../../components/ButtonDelete";
import { PostedPhoto } from "../../components/PostedPhoto";
import * as DocumentPicker from "expo-document-picker";

export const CreatePostsScreen = () => {
  const [isLoadedPhoto, setIsLoadedPhoto] = useState(false);
  const [loadedPhoto, setLoadedPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const { screenWidth, isShowKeyboard, hideKeyboard, showKeyboard } = useScreen();

  const handleAddingPhoto = async () => {
    if (!isLoadedPhoto) {
      const res = await DocumentPicker.getDocumentAsync({
        type: "image/*",
        copyToCacheDirectory: true,
      });

      if (res.type !== "success") {
        console.log("File picking failed");
        return;
      }
      setLoadedPhoto(res);
    } else if (isLoadedPhoto) {
      setLoadedPhoto(null);
    }
    setIsLoadedPhoto(!isLoadedPhoto);
  };

  const handleSubmit = () => {};

  return (
    <ScreenWrap>
      <View style={styles.container}>
        {/* <Image
          style={styles.photo}
          // source={"https://drive.google.com/file/d/1hUgV0C6hVGOA4cKiMGw6FIuolIvqliif/view?usp=sharing"}
          // src={postItem.photo}
          src={"https://drive.google.com/file/d/1hUgV0C6hVGOA4cKiMGw6FIuolIvqliif/view?usp=sharing"}
        /> */}
        <PostedPhoto isLoadedPhoto={isLoadedPhoto} loadedPhoto={loadedPhoto} handleAddingPhoto={handleAddingPhoto} />
        <Text style={styles.title}>{isLoadedPhoto ? "Edit photo" : "Download photo"}</Text>
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
          <View>
            <TouchableOpacity
              style={{ ...styles.buttonSubmit, backgroundColor: isLoadedPhoto ? "#FF6C00" : "#F6F6F6" }}
              onPress={handleSubmit}
            >
              <Text style={{ ...styles.textButton, color: isLoadedPhoto ? "#fff" : "#BDBDBD" }}>Post</Text>
            </TouchableOpacity>
            <ButtonDelete isDisabled={isLoadedPhoto ? false : true} />
          </View>
        )}
      </View>
    </ScreenWrap>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingHorizontal: 16,
    // paddingVertical: 32,
    // backgroundColor: "#fff",
  },

  // photo: {
  //   width: "100%",
  //   height: 240,
  //   borderRadius: 8,
  //   backgroundColor: "#F6F6F6",
  //   marginBottom: 8,
  // },
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
    marginTop: 40,
    marginBottom: 120,
    alignItems: "center",
    // backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  textButton: {
    paddingTop: 16,
    paddingBottom: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    // color: "#fff",
  },
});
