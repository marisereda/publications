import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Alert } from "react-native";

import { storage } from "../firebase/config";

export const uploadPhoto = async (fromPath, toPath, uid) => {
  try {
    // const fileName = fromPath.split("/").pop();
    const avatarRef = ref(storage, `${toPath}${uid}`);
    const response = await fetch(fromPath);
    const file = await response.blob();
    await uploadBytes(avatarRef, file);
    const url = await getDownloadURL(avatarRef);
    return url;
  } catch (error) {
    Alert.alert("⚠️Something went wrong", error.message);
  }
};
