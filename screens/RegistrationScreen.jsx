import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";

import { Avatar, ButtonSubmit, Input, SecuredInput } from "../components";
import { useScreen } from "../hooks/useScreen";
import { authSignUp } from "../redux/auth/authOperations";

export const RegistrationScreen = ({ navigation }) => {
  const [isPasswordSecured, setIsPasswordSecured] = useState(true);
  const [isLoadedAvatar, setIsLoadedAvatar] = useState(false);
  const [loadedAvatar, setLoadedAvatar] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { screenWidth, isShowKeyboard, hideKeyboard, showKeyboard } =
    useScreen();
  const dispatch = useDispatch();

  // ******************** Adding or removing Avatar ********************
  // *
  const handleAddingAvatar = async () => {
    if (!isLoadedAvatar) {
      const res = await DocumentPicker.getDocumentAsync({
        type: "image/*",
        copyToCacheDirectory: true,
      });

      if (res.type !== "success") {
        return;
      }
      setLoadedAvatar(res.uri);
    } else if (isLoadedAvatar) {
      setLoadedAvatar(null);
    }
    setIsLoadedAvatar(!isLoadedAvatar);
  };

  // ******************** Handle Submit registration ********************
  // *
  const handleSubmit = () => {
    hideKeyboard();
    dispatch(authSignUp({ name, email, password, avatar: loadedAvatar?.uri }));
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <ImageBackground
          source={require("../assets/images/photo-bg.jpg")}
          style={styles.backgroundImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <TouchableWithoutFeedback onPress={hideKeyboard}>
              <View
                style={{
                  ...styles.form,
                  paddingBottom: isShowKeyboard ? 32 : 45,
                  width: screenWidth,
                }}
              >
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
                    showKeyboard={showKeyboard}
                  />

                  <Input
                    textContentType="emailAddress"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    showKeyboard={showKeyboard}
                  />

                  <SecuredInput
                    textContentType="password"
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    showKeyboard={showKeyboard}
                    isPasswordSecured={isPasswordSecured}
                    onPress={setIsPasswordSecured}
                  />
                </View>
                {!isShowKeyboard && (
                  <View>
                    <ButtonSubmit text="Sign up" onPress={handleSubmit} />
                    <Text style={styles.text}>
                      Have an account already?{" "}
                      <Text
                        style={styles.link}
                        onPress={() => navigation.navigate("Login")}
                      >
                        Sign in
                      </Text>
                    </Text>
                  </View>
                )}
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
  },
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
  link: {
    color: "#FF6C00",
  },
});
