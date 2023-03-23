import { useState, useEffect } from "react";
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
} from "react-native";
import { Input } from "../components/Input";
import { SecuredInput } from "../components/SecuredInput";

export const LoginScreen = () => {
  const [passwordSecure, setPasswordSecure] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  // -------------- Submit enter --------------
  const handleSubmit = () => {
    keyboardHide();
    // console.log(name, email, password);
    console.log(`email:${email}`);
    console.log(`password:${password}`);
    setEmail("");
    setPassword("");
    setPasswordSecure(true);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground source={require("../assets/images/photo-bg.jpg")} style={styles.backgroundImage}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
          <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 32 : 144 }}>
              <Text style={styles.title}>Enter</Text>
              <View style={styles.fieldsWrap}>
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
                    <Text style={styles.textButton}>Sign in</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>
                    Haven't got an account yet? <Text style={styles.link}>Sign up</Text>
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
    marginTop: 45,
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
