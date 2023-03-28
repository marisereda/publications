import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { useRoute } from "./Route";
import { useAuthGlobal } from "../globalStore";

{
  /* <Feather name="arrow-left" size={24} color="black" /> */
}

export const ButtonLogOut = () => {
  const [isAuth, setIsAuth] = useAuthGlobal();
  // const navigation = useNavigation();
  // const routing = useRoute(false);
  return (
    <View style={""}>
      <Feather.Button
        name="log-out"
        size={24}
        iconStyle={{ marginRight: 0 }}
        color="#212121"
        style={""}
        backgroundColor="transparent"
        onPress={() => setIsAuth(false)}
      ></Feather.Button>
    </View>
  );
};
