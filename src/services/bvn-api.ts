import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import {bvnValidationUrl} from '../utils/constant'

type Bvn = string

export const bvnApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: bvnValidationUrl }),
  tagTypes: ["Bvn"],
  endpoints: (build) => ({
    postBvn: build.mutation<Bvn, Partial<Bvn>>({
      query: (body) => ({
        url: "validateBVN",
        method: "POST",
        body,
      }),
    }),
  }),
});