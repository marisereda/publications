import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RegistrationScreen } from "../screens/RegistrationScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { CommentsScreen } from "../screens/mainScreens/CommentsScreen";
import { CreatePostsScreen } from "../screens/mainScreens/CreatePostsScreen";
import { PostsScreen } from "../screens/mainScreens/PostsScreen";
import { ProfileScreen } from "../screens/mainScreens/ProfileScreen";
import { IconList } from "./IconList";
import { IconUser } from "./IconUser";
import { IconAdd } from "./IconAdd";
import { ButtonGoBack } from "./ButtonGoBack";
import { ButtonLogOut } from "./ButtonLogOut";

const AuthStack = createNativeStackNavigator();
const PrivateStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {},
        headerTitleAlign: "center",
      }}
    >
      <MainTab.Screen
        name="Posts"
        options={{
          tabBarIcon: ({ focused, color, size }) => <IconList focused={focused} />,
          headerRight: () => <ButtonLogOut />,
        }}
        component={PostsScreen}
      />
      <MainTab.Screen
        name="Create post"
        options={{
          tabBarIcon: ({ focused, color, size }) => <IconAdd />,
          headerLeft: () => <ButtonGoBack />,
          tabBarStyle: { display: "none" },
          tabBarHideOnKeyboard: true,
        }}
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused, color, size }) => <IconUser focused={focused} />,
          headerShown: false,
        }}
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export const Route = ({ isAuth }) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen options={{ headerShown: false }} name="Register" component={RegistrationScreen} />
        <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    );
  }
  return (
    <PrivateStack.Navigator>
      <PrivateStack.Screen name="BottomTabs" options={{ headerShown: false }} component={BottomTabs} />
      <PrivateStack.Screen
        name="Comments"
        options={{
          headerLeft: () => <ButtonGoBack />,
        }}
        component={CommentsScreen}
      />
    </PrivateStack.Navigator>
  );
};
