import { Keyboard, Dimensions } from "react-native";
import { useState, useEffect, useCallback } from "react";

export const useScreen = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get("window").width);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

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

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const showKeyboard = () => {
    setIsShowKeyboard(true);
  };
  console.log("Use Screen isShowKeyboard:", isShowKeyboard);
  return {
    screenWidth,
    isShowKeyboard,
    hideKeyboard,
    showKeyboard,
  };
};
