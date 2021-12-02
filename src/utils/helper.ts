import axios from "axios";

const handleRequest = (request: Promise<any>, thunkApi: any) =>
  request
    .then((response) => response.data)
    .catch((error) => thunkApi.rejectWithValue(error?.response?.data || error));

// const buildUrl = (url:string, params: any) => {
//   // Support URLs with named identifiers, such as '/posts/get/:id'.
//   // This code replaces the ':id' part with the value of params.id
//   Object.keys(params).forEach((k) => {
//     if (url.indexOf(":" + k) > -1) {
//       url = url.replace(":" + k, params[k]);
//       delete params[k];
//     }
//   });

//   // all the parameters that were not bound to a named identifier are appended to the URL
//   const encoded = Object.entries(params)
//     .map((kv) => kv.map(encodeURIComponent).join("="))
//     .join("&");
//   return url + (encoded.length > 0 ? "?" + encoded : "");
// };

export const thunkHandler = async (asyncFn: any, thunkAPI: any) => {
  try {
    const response = await asyncFn;
    console.log(">>>>>response", response);
    
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

  //   static get =
  //     (url: string, axiosConfig = {}) =>
  //     (obj = {}, thunkApi: any) =>
  //       handleRequest(axios.get(buildUrl(url, obj), axiosConfig), thunkApi);

  //   static delete =
  //     (url: string, axiosConfig = {}) =>
  //     (obj = {}, thunkApi: any) =>
  //       handleRequest(axios.delete(buildUrl(url, obj), axiosConfig), thunkApi);
}

function uriComponent(
  encodeURIComponent: (uriComponent: string | number | boolean) => string,
  uriComponent: any
) {
  throw new Error("Function not implemented.");
}
