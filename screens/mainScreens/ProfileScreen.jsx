import * as DocumentPicker from "expo-document-picker";
import { useState } from "react";
import {
  Text,
  ImageBackground,
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Avatar, ButtonLogOut, PostListItem } from "../../components";
import { usePosts, useScreen } from "../../hooks";
import { updateAvatar } from "../../redux/auth/authOperations";
import { selectUser } from "../../redux/auth/authSlice";

export const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const posts = usePosts();
  const userPosts = posts.filter((post) => post.uid === user.uid);
  const { screenWidth } = useScreen();
  const [isLoadedAvatar, setIsLoadedAvatar] = useState(!!user?.avatar);
  const [loadedAvatar, setLoadedAvatar] = useState(
    user?.avatar ? user.avatar : null
  );

  // ******************** Handle adding or removing Avatar ********************
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
      dispatch(updateAvatar(res.uri));
    } else if (isLoadedAvatar) {
      setLoadedAvatar(null);
      dispatch(updateAvatar(null));
    }
    setIsLoadedAvatar(!isLoadedAvatar);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/photo-bg.jpg")}
      style={styles.backgroundImage}
    >
      <View style={{ ...styles.form, width: screenWidth }}>
        <Avatar
          isLoadedAvatar={isLoadedAvatar}
          loadedAvatar={loadedAvatar}
          handleAddingAvatar={handleAddingAvatar}
        />
        <ButtonLogOut style={{ alignSelf: "flex-end", marginBottom: 48 }} />
        <Text style={styles.title}>{user?.name ? user.name : user.email}</Text>
        <FlatList
          data={userPosts}
          renderItem={({ item }) => (
            <PostListItem
              postItem={item}
              onPress={() => navigation.navigate("Comments")}
            />
          )}
          keyExtractor={({ id }) => id}
        />
      </View>
    </ImageBackground>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    paddingTop: 120,
    alignItems: "flex-end",
  },
  form: {
    height: "95%",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24,
    paddingBottom: 45,
  },
  title: {
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#212121",
    textAlign: "center",
  },
});
