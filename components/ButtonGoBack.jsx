import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export const ButtonGoBack = () => {
  const navigation = useNavigation();
  return (
    <View style="">
      <Feather.Button
        name="arrow-left"
        size={24}
        iconStyle={{ marginRight: 0 }}
        color="#212121"
        style=""
        backgroundColor="transparent"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
