import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BottomTabs } from "./BottomTabs";
import { ButtonGoBack } from "./ButtonGoBack";
import { authStateChange } from "../redux/auth/authOperations";
import { selectUser } from "../redux/auth/authSlice";
import { LoginScreen } from "../screens/LoginScreen";
import { RegistrationScreen } from "../screens/RegistrationScreen";
import { CommentsScreen } from "../screens/mainScreens/CommentsScreen";
import { MapScreen } from "../screens/mainScreens/MapScreen";

const AuthStack = createNativeStackNavigator();
const PrivateStack = createNativeStackNavigator();

export const Route = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChange());
  }, []);

  if (!user) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen
        name="BottomTabs"
        options={{ headerShown: false }}
        component={BottomTabs}
      />
      <PrivateStack.Screen
        name="Comments"
        options={{
          headerLeft: () => <ButtonGoBack />,
        }}
        component={CommentsScreen}
      />
      <PrivateStack.Screen
        name="Map"
        options={{
          headerLeft: () => <ButtonGoBack />,
        }}
        component={MapScreen}
      />
    </PrivateStack.Navigator>
  );
};
