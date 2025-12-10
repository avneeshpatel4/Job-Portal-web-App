// src/redux/store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authSlice";
import jobReducer from "./jobSlice";
// import jobSlice from "./jobSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// ❌ Wrong: import { companySlice }
// ✅ Correct:
import companyReducer from "./companySlice";
import { applicationReducer } from "./applicationSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authSliceReducer,
  jobs: jobReducer,
  company: companyReducer,
  application:applicationReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
