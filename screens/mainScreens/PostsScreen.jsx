import { Text, View, StyleSheet, FlatList } from "react-native";
import { PostAuthor } from "../../components/PostAuthor";
import { PostListItem } from "../../components/PostListItem";
import { useUserGlobal } from "../../globalStore";

const posts = [
  {
    id: "1",
    photo: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681745149/cld-sample-2.jpg",
    title: "Forest",
    commentsAmount: "8",
    likesAmount: "42",
    location: "Ukraine",
  },
  {
    id: "2",
    photo: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681745149/cld-sample-2.jpg",
    title: "Black Sea Sunset",
    commentsAmount: "4",
    likesAmount: "37",
    location: "Ukraine",
  },
  {
    id: "3",
    photo: "https://res.cloudinary.com/diaxwbc3c/image/upload/v1681745149/cld-sample-2.jpg",
    title: "Venice house",
    commentsAmount: "5",
    likesAmount: "58",
    location: "Italy",
  },
];
export const PostsScreen = ({ navigation }) => {
  const [user, setUser] = useUserGlobal();

  const handleNavigateComments = (postItem) => {
    navigation.navigate("Comments", postItem);
  };

  const handleNavigateLocation = (postItem) => {
    navigation.navigate("Map", postItem);
  };

  return (
    <View style={styles.container}>
      <PostAuthor avatar={user?.loadedAvatar ? user.loadedAvatar : ""} name={user?.name} email={user?.email} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#fff",
  },
});
