import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../features/applicationSlice";
import walletConnectReducer from "../features/walletConnectSlice";

const store = configureStore({
  reducer: {
    walletConnect: walletConnectReducer,
    application: applicationReducer
  },
  preloadedState: {},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;
