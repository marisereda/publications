import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ButtonGoBack } from "./ButtonGoBack";
import { ButtonLogOut } from "./ButtonLogOut";
import { IconAdd } from "./IconAdd";
import { IconList } from "./IconList";
import { IconUser } from "./IconUser";
import { CreatePostsScreen } from "../screens/mainScreens/CreatePostsScreen";
import { PostsScreen } from "../screens/mainScreens/PostsScreen";
import { ProfileScreen } from "../screens/mainScreens/ProfileScreen";

export const BottomTabs = () => {
  const MainTab = createBottomTabNavigator();

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
          tabBarIcon: ({ focused, color, size }) => (
            <IconList focused={focused} />
          ),
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
          tabBarIcon: ({ focused, color, size }) => (
            <IconUser focused={focused} />
          ),
          headerShown: false,
        }}
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
