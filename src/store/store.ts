import { configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "../components/LeftPanel/components/ChatChart/ChatSlice";
import { globalSlice } from "./GlobalSlice";

export const store = configureStore({
  reducer: {
    chats: chatSlice.reducer,
    global: globalSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
