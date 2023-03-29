import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Input } from "../../components/Input";
import { InputLocation } from "../../components/InputLocation";
import { useScreen } from "../../hooks/useScreen";
import { ScreenWrap } from "../../components/ScreenWrap";
import { PostedPhoto } from "../../components/PostedPhoto";
import * as DocumentPicker from "expo-document-picker";
import { AntDesign } from "@expo/vector-icons";
import { ButtonIconOval } from "../../components/ButtonIconOval";
import { ButtonSubmit } from "../../components/ButtonSubmit";

export const CreatePostsScreen = () => {
  const [isLoadedPhoto, setIsLoadedPhoto] = useState(false);
  const [loadedPhoto, setLoadedPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const { screenWidth, isShowKeyboard, hideKeyboard, showKeyboard } = useScreen();

  const handleAddPhoto = async () => {
    const res = await DocumentPicker.getDocumentAsync({
      type: "image/*",
      copyToCacheDirectory: true,
    });
    if (res.type !== "success") {
      console.log("File picking failed");
      return;
    }
    setLoadedPhoto(res);
    setIsLoadedPhoto(true);
  };

  const handleSubmit = () => {
    setIsLoadedPhoto(false);
    setLoadedPhoto("");
    setTitle("");
    setLocation("");
  };
  const handleDeletePost = () => {
    setIsLoadedPhoto(false);
    setLoadedPhoto("");
    setTitle("");
    setLocation("");
  };

  return (
    <ScreenWrap hideKeyboard={hideKeyboard}>
      <View style={styles.container}>
        <PostedPhoto isLoadedPhoto={isLoadedPhoto} loadedPhoto={loadedPhoto} handleAddPhoto={handleAddPhoto} />
        <Text style={styles.title} onPress={handleAddPhoto}>
          {isLoadedPhoto ? "Edit photo" : "Download photo"}
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
          <View>
            <ButtonSubmit text="Post" disabled={!isLoadedPhoto} onPress={handleSubmit} />
            <ButtonIconOval
              icon={AntDesign}
              iconProps={{ name: "delete" }}
              disabled={!isLoadedPhoto}
              onPress={handleDeletePost}
            />
          </View>
        )}
      </View>
    </ScreenWrap>
  );
};

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
    marginTop: 40,
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
