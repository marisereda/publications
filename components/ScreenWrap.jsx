import { View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { useScreen } from "../hooks/useScreen";

export const ScreenWrap = ({ children }) => {
  const { screenWidth, isShowKeyboard, hideKeyboard, showKeyboard } = useScreen();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
          <TouchableWithoutFeedback onPress={hideKeyboard}>{children}</TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#fff",
  },
});
