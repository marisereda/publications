import { GlobalStore } from "react-native-global-state-hooks";
const authStore = new GlobalStore(false);
const userStore = new GlobalStore({});

export const useAuthGlobal = authStore.getHook();
export const useUserGlobal = userStore.getHook();
