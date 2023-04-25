import { View, StyleSheet, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

import { PostAuthor, PostListItem } from "../../components";
import { usePosts } from "../../hooks/usePosts";
import { selectUser } from "../../redux/auth/authSlice";

export const PostsScreen = ({ navigation }) => {
  const user = useSelector(selectUser);
  const posts = usePosts();

  if (!posts) {
    return <Text>Loading...</Text>;
  }

  const handleNavigateComments = (postItem) => {
    navigation.navigate("Comments", postItem);
  };

  const handleNavigateLocation = (postItem) => {
    navigation.navigate("Map", postItem);
  };

  return (
    <View style={styles.container}>
      <PostAuthor
        avatar={user?.avatar ? user.avatar : ""}
        name={user?.name}
        email={user?.email}
      />
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostListItem
            postItem={item}
            onPressComments={handleNavigateComments}
            onPressLocation={handleNavigateLocation}
          />
        )}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

// ******************** Styles ********************
// *
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#fff",
  },
});
