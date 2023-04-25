import { doc, updateDoc } from "firebase/firestore";
import { Alert } from "react-native";

import { db } from "../firebase/config";

export const mutateData = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
  } catch (error) {
    Alert.alert("⚠️Something went wrong", error.message);
  }
};
