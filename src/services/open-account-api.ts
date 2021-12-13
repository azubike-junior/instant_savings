import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { openAccountUrl } from "../utils/constant";

//used redux toolkit query 

export const openAccountApi = createApi({
  reducerPath: "openAccount",
  baseQuery: fetchBaseQuery({
    baseUrl: openAccountUrl,
  }),

  endpoints: (builder) => ({
    openAccount: builder.mutation({
      query: (data: any) => ({
        url: "",
        method: "POST",
        body: data,
      }),
    }),
  }),
});


// "22277557146
export const { useOpenAccountMutation } = openAccountApi;
// export default openAccountSlice.reducer;
