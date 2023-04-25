import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Alert } from "react-native";

import { db } from "../firebase/config";

export const uploadData = async (collectionName, data) => {
  try {
    await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: Timestamp.now(),
    });
  } catch (error) {
    Alert.alert("⚠️Something went wrong", error.message);
  }
};
