import { useState } from "react";
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
import { useDispatch } from "react-redux";

import { Input, SecuredInput } from "../components";
import { useScreen } from "../hooks/useScreen";
import { authSignIn } from "../redux/auth/authOperations";

export const LoginScreen = ({ navigation }) => {
  const [isPasswordSecured, setIsPasswordSecured] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { screenWidth, isShowKeyboard, hideKeyboard, showKeyboard } =
    useScreen();

  const dispatch = useDispatch();

  // ******************** Handle submit ********************
  // *
  const handleSubmit = () => {
    hideKeyboard();
    dispatch(authSignIn({ email, password }));
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
                  paddingBottom: isShowKeyboard ? 32 : 144,
                  width: screenWidth,
                }}
              >
                <Text style={styles.title}>Enter</Text>
                <View style={styles.fieldsWrap}>
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
                    <TouchableOpacity
                      style={styles.buttonSubmit}
                      onPress={handleSubmit}
                    >
                      <Text style={styles.textButton}>Sign in</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>
                      Haven't got an account yet?{" "}
                      <Text
                        style={styles.link}
                        onPress={() => navigation.navigate("Register")}
                      >
                        Sign up
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
  link: {
    color: "#FF6C00",
  },
});
