import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bvnValidationUrl, OtpAuth } from "../utils/constant";
import axios from "axios";
import { DataProps } from "../interfaces";

interface initState {
  bvn: string;
  error: any;
  loading: boolean;
  error2: any;
  data: DataProps;
  isSuccessful: boolean;
}

const initialState: initState = {
  bvn: "",
  error: "",
  loading: false,
  error2: "",
  data: <DataProps>{},
  isSuccessful: false,
};

export interface justProp {
  bvn: any;
  history?: any;
}

export const addBvn = createAsyncThunk(
  "addBvn",
  async ({ bvn, history }: justProp, { rejectWithValue }) => {
    const token =
      "4I[PdB7l&/omZT[o.wG^v!<Nni%ANMkSW'+U^5>HepGZ9Nm1xox}#%<?Zx3/7O]";
    try {
      const response = await axios.post(
        bvnValidationUrl,
        { bvn },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.data.responseCode === "00") {
        history.push(OtpAuth);
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const BvnSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBvn.rejected, (state, action) => {
      state.error = action.error;
      state.error2 = action.error.name;
      state.loading = false;
      state.isSuccessful = false;
    });
    builder.addCase(addBvn.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
      state.isSuccessful = true;
      state.error = "";
    });
    builder.addCase(addBvn.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

// "22277557146

export default BvnSlice.reducer;
