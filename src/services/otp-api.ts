import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { OtpProps } from "./../interfaces";
import { otpValidationUrl, sendMailUrl } from "./../utils/constant";

interface OtpState {
  otpDbError: any;
  otpLoading: boolean;
  data: {};
}

const initialState: OtpState = {
  otpDbError: "",
  otpLoading: false,
  data: {},
};

export const sendSms = createAsyncThunk(
  "otpValidate",
  async (otp: OtpProps, { rejectWithValue }) => {
    try {
      const response = await axios.post(otpValidationUrl, otp);
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const sendMail = createAsyncThunk(
  "sendMail",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(sendMailUrl, data);
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  }
);

export const OtpSlice = createSlice({
  name: "bvn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendSms.rejected, (state, action) => {
      state.otpDbError = action.error;
      state.otpLoading = false;
    });
    builder.addCase(sendSms.fulfilled, (state, action) => {
      state.otpLoading = true;
      state.data = action.payload;
      state.otpLoading = false;
      state.otpDbError = "";
    });
    builder.addCase(sendSms.pending, (state) => {
      state.otpLoading = true;
    });
  },
});



// "22277557146

export default OtpSlice.reducer;
