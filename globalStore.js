import { GlobalStore } from "react-native-global-state-hooks";
const authStore = new GlobalStore(false);
export const useAuthGlobal = authStore.getHook();
