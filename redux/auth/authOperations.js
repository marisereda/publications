import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { Alert } from "react-native";

import { setUser } from "./authSlice";
import { auth } from "../../firebase/config";
import { uploadPhoto } from "../../helpers";

// ******************** Sign up ********************
// *
export const authSignUp = ({ name, email, password, avatar }) => {
  return async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      const photoURL = avatar
        ? await uploadPhoto(avatar, "images/avatars/", user.uid)
        : "";

      await updateProfile(user, { displayName: name, photoURL });

      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          uid: user.uid,
        })
      );
    } catch (error) {
      Alert.alert("Something went wrong", error.message);
    }
  };
};

// ******************** Sign in ********************
// *
export const authSignIn = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      Alert.alert("Something went wrong", error.message);
    }
  };
};

// ******************** Sign out ********************
// *
export const authSignOut = () => {
  return async (dispatch) => {
    try {
      await signOut(auth);
    } catch (error) {
      Alert.alert("Something went wrong", error.message);
    }
  };
};

// ******************** Update avatar ********************
// *
export const updateAvatar = (avatar) => {
  return async (dispatch) => {
    try {
      const user = auth.currentUser;
      const photoURL = avatar
        ? await uploadPhoto(avatar, "images/avatars/", user.uid)
        : "";

      await updateProfile(user, { photoURL });

      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          avatar: user.photoURL,
          uid: user.uid,
        })
      );
    } catch (error) {
      Alert.alert("Something went wrong", error.message);
    }
  };
};

// ******************** Subscription to auth changes ********************
// *
export const authStateChange = () => {
  return async (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
            uid: user.uid,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });
  };
};
