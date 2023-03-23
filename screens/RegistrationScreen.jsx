import { useState, useEffect, useCallback } from "react";
import * as DocumentPicker from "expo-document-picker";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Input } from "../components/Input";
import { SecuredInput } from "../components/SecuredInput";
import { Avatar } from "../components/Avatar";

export const RegistrationScreen = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);
  const [passwordSecure, setPasswordSecure] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isLoadedAvatar, setIsLoadedAvatar] = useState(false);
  const [loadedAvatar, setLoadedAvatar] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = useCallback(() => {
    const width = Dimensions.get("window").width;
    setScreenWidth(width);
  });

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  // -------------- Adding or removing Avatar ---------------
  const handleAddingAvatar = async () => {
    if (!isLoadedAvatar) {
      const res = await DocumentPicker.getDocumentAsync({
        type: "image/*",
        copyToCacheDirectory: true,
      });

      if (res.type !== "success") {
        console.log("File picking failed");
        return;
      }
      setLoadedAvatar(res);
    } else if (isLoadedAvatar) {
      setLoadedAvatar(null);
    }
    setIsLoadedAvatar(!isLoadedAvatar);
  };

  // -------------- Submit registration --------------
  const handleSubmit = () => {
    keyboardHide();
    console.log(`name:${name}`);
    console.log(`email:${email}`);
    console.log(`password:${password}`);
    console.log(`avatar:${loadedAvatar.uri}`);

    setName("");
    setEmail("");
    setPassword("");
    setLoadedAvatar(null);
    setPasswordSecure(true);
    setIsLoadedAvatar(false);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground source={require("../assets/images/photo-bg.jpg")} style={styles.backgroundImage}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : ""}>
          <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 45 : 32, width: screenWidth }}>
              <Text style={styles.title}>Registration</Text>
              <Avatar
                isLoadedAvatar={isLoadedAvatar}
                loadedAvatar={loadedAvatar}
                handleAddingAvatar={handleAddingAvatar}
              />
              <View style={styles.fieldsWrap}>
                <Input
                  textContentType="username"
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                  showKeyboard={setIsShowKeyboard}
                />

                <Input
                  textContentType="emailAddress"
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  showKeyboard={setIsShowKeyboard}
                />

                <SecuredInput
                  textContentType="password"
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  showKeyboard={setIsShowKeyboard}
                  passwordSecure={passwordSecure}
                  onPress={setPasswordSecure}
                />
              </View>
              {!isShowKeyboard && (
                <View>
                  <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit}>
                    <Text style={styles.textButton}>Sign up</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>
                    Have an account already? <Text style={styles.link}>Sign in</Text>
                  </Text>
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 90,
    paddingBottom: 45,
  },
  title: {
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#212121",
    textAlign: "center",
  },
  fieldsWrap: {
    gap: 16,
  },
  buttonSubmit: {
    marginTop: 40,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  textButton: {
    paddingTop: 16,
    paddingBottom: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#fff",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
  link: {},
});
