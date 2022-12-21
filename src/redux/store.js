import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./API/API";
import { mockApi } from "./API/mockAPI";
import todosSlice from "./slices/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
    [api.reducerPath]: api.reducer,
    [mockApi.reducerPath]: mockApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware, mockApi.middleware),
});

setupListeners(store.dispatch);
