import { ThunkAction, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware, { Action } from "redux-saga";
import rootSaga from "./saga/rootSaga";
import rootReducer from "./slice/rootReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["authentication"],
  // blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    })
      .prepend
      // untyped
      ()
      .concat(sagaMiddleware),
  // devTools: true,
});
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
