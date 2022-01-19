import axios from "axios";

const handleRequest = (request: Promise<any>, thunkApi: any) =>
  request
    .then((response) => response.data)
    .catch((error) => thunkApi.rejectWithValue(error?.response?.data || error));

export const thunkHandler = async (asyncFn: any, thunkAPI: any) => {
  try {
    const response = await asyncFn;

    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};

export const http = axios.create({
  baseURL: `http://localhost:8080/http://10.11.200.97/accountopening/api/v1/AccountOpening/InStantSave`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default class api {
  static post =
    (url: string, axiosConfig = {}) =>
    (obj = {}, thunkApi: any) =>
      handleRequest(axios.post(url, obj, axiosConfig), thunkApi);
}

function uriComponent(
  encodeURIComponent: (uriComponent: string | number | boolean) => string,
  uriComponent: any
) {
  throw new Error("Function not implemented.");
}
