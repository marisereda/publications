import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { useAuthGlobal } from "../globalStore";
import { useUserGlobal } from "../globalStore";
import { ButtonSubmit } from "../components/ButtonSubmit";

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { Input } from "../components/Input";
import { SecuredInput } from "../components/SecuredInput";
import { Avatar } from "../components/Avatar";
import { useScreen } from "../hooks/useScreen";

export const RegistrationScreen = ({ navigation }) => {
  const [isAuth, setIsAuth] = useAuthGlobal();
  const [user, setUser] = useUserGlobal();
  const [isPasswordSecured, setIsPasswordSecured] = useState(true);
  const [isLoadedAvatar, setIsLoadedAvatar] = useState(false);
  const [loadedAvatar, setLoadedAvatar] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { screenWidth, isShowKeyboard, hideKeyboard, showKeyboard } = useScreen();

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
    hideKeyboard();
    // console.log(`name:${name}`);
    // console.log(`email:${email}`);
    // console.log(`password:${password}`);
    // console.log(`avatar:${loadedAvatar?.uri}`);

    setUser({});
    setUser({ name, email, loadedAvatar });
    setName("");
    setEmail("");
    setPassword("");
    setLoadedAvatar(null);
    setIsPasswordSecured(true);
    setIsLoadedAvatar(false);
    setIsAuth(true);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <ImageBackground source={require("../assets/images/photo-bg.jpg")} style={styles.backgroundImage}>
          <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : ""}>
            <TouchableWithoutFeedback onPress={hideKeyboard}>
              <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 32 : 45, width: screenWidth }}>
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
                    {/* <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit}>
                      <Text style={styles.textButton}>Sign up</Text>
                    </TouchableOpacity> */}
                    <Text style={styles.text}>
                      Have an account already?{" "}
                      <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",

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
