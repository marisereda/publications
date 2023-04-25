import { Feather } from "@expo/vector-icons";
import { View } from "react-native";
import { useDispatch } from "react-redux";

import { authSignOut } from "../redux/auth/authOperations";

export const ButtonLogOut = (props) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(authSignOut());
  };

  return (
    <View {...props}>
      <Feather.Button
        name="log-out"
        size={24}
        iconStyle={{ marginRight: 0 }}
        color="#BDBDBD"
        style=""
        backgroundColor="transparent"
        onPress={handleLogOut}
      />
    </View>
  );
};
