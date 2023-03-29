import { Text, View, StyleSheet, FlatList } from "react-native";
import { PostAuthor } from "../../components/PostAuthor";
import { PostListItem } from "../../components/PostListItem";
import { useUserGlobal } from "../../globalStore";

const posts = [
  {
    id: "1",
    photo: "https://drive.google.com/file/d/1hUgV0C6hVGOA4cKiMGw6FIuolIvqliif/view?usp=sharing",
    title: "Forest",
    commentsAmount: "8",
    likesAmount: "42",
    location: "Ukraine",
  },
  {
    id: "2",
    photo: "https://drive.google.com/file/d/1hWikkNzKyFe_DY2I4S0bAi0JjDiYaXoY/view?usp=sharing",
    title: "Black Sea Sunset",
    commentsAmount: "4",
    likesAmount: "37",
    location: "Ukraine",
  },
  {
    id: "3",
    photo: "https://drive.google.com/file/d/1hV5ayRKTqEbLU9Hg73XcLwgcY2ivs1PP/view?usp=sharing",
    title: "Venice house",
    commentsAmount: "5",
    likesAmount: "58",
    location: "Italy",
  },
];
export const PostsScreen = () => {
  const [user, setUser] = useUserGlobal();
  console.log("🚀 ~ PostsScreen ~ user:", user);

  return (
    <View style={styles.container}>
      <PostAuthor avatar={user?.loadedAvatar ? user.loadedAvatar : ""} name={user?.name} email={user?.email} />
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem postItem={item} />}
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
    // backgroundColor: "green",
    // justifyContent: "center",
  },
});
