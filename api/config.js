// import Axios from "axios";
// import { setupCache } from "axios-cache-interceptor";

// // Create an Axios instance with caching
// const cachedAxios = setupCache(Axios.create()); // Use Axios.create() here

// const Api = cachedAxios.create({
//   baseURL: "https://pign230wc2.execute-api.us-east-1.amazonaws.com/prod/api",
//   timeout: 60000,
// });

// // Add request interceptor
// Api.interceptors.request.use(
//   (request) => {
//     if (request) {
//       // Perform request manipulations here
//     }
//     return {
//       ...request,
//       onUploadProgress: (progressEvent) => {
//         console.log(
//           Math.round((progressEvent.loaded * 100) / progressEvent.total)
//         );
//       },
//     };
//   },
//   (error) => {
//     console.error("Interceptor request ERROR:", error);
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor
// Api.interceptors.response.use(
//   (response) => {
//     if (response) {
//       // Perform response manipulations here
//     }
//     return response;
//   },
//   (error) => {
//     console.error("Interceptor response ERROR:", error);

//     if (error.response?.status === 401) {
//       console.warn("Unauthorized access - 401");
//       // Perform logout or token refresh logic if necessary
//     }

//     return Promise.reject(error);
//   }
// );

// export default Api;
