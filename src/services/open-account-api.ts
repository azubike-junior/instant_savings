import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { openAccountUrl } from "../utils/constant";

//used redux toolkit query

export const openAccountApi = createApi({
  reducerPath: "openAccount",
  baseQuery: fetchBaseQuery({
    baseUrl: openAccountUrl,
    prepareHeaders: (headers) => {
      const token =
        "4I[PdB7l&/omZT[o.wG^v!<Nni%ANMkSW'+U^5>HepGZ9Nm1xox}#%<?Zx3/7O]";
      if (token) {
        headers.set("authorization", `${token}`);
      }
      return headers;
    },
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
