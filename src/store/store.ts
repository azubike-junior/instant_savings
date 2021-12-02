import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import bvnReducer from "./../services/bvn-api";
import otpReducer from "./../services/otp-api";
// import openAccountReducer from "./../services/open-account-api";
import { openAccountApi } from "./../services/open-account-api";

export const store = configureStore({
  //   reducer: {
  //     [bvnService.reducerPath]: bvnService.reducer,
  //   },
  reducer: {
    [openAccountApi.reducerPath]: openAccountApi.reducer,
    // [validateBvnApi.reducerPath]: validateBvnApi.reducer,
    bvnReducer,
    otpReducer,
    // openAccountReducer,
  },
  middleware: (gdm) => gdm().concat(openAccountApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,  
  Action<string>
>;
