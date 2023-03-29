import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { useAuthGlobal } from "../globalStore";
import { useUserGlobal } from "../globalStore";

export const ButtonLogOut = (props) => {
  const [isAuth, setIsAuth] = useAuthGlobal();
  const [user, setUser] = useUserGlobal();

  const handleLogOut = () => {
    setIsAuth(false);
    setUser({});
  };

  return (
    <View {...props}>
      <Feather.Button
        name="log-out"
        size={24}
        iconStyle={{ marginRight: 0 }}
        color="#BDBDBD"
        style={""}
        backgroundColor="transparent"
        onPress={handleLogOut}
      ></Feather.Button>
    </View>
  );
};
