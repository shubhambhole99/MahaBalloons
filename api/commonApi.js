import API from "./config";
import axios from "axios";
// Packages API

export const fetchPackagesData = async () => {
    try {
    const response = await axios.get(
      'https://pign230wc2.execute-api.us-east-1.amazonaws.com/prod/api/package'
    );
    // console.log(response.data);
    return response.data; // Return the data from the API
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Throw the error to handle it later
  }
  return API.get("/package");
};

// Slots API

export const fetchSlotData = async() => {
  try {
    const response = await axios.get(
      'https://pign230wc2.execute-api.us-east-1.amazonaws.com/prod/api/slot'
    );
    // console.log(response.data);
    return response.data; // Return the data from the API
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Throw the error to handle it later
  }
  return API.get("/slot");
};

// Passenger API

export const addPassengerData = async(formData) => {
  try {
    const response = await axios.post(
      'https://pign230wc2.execute-api.us-east-1.amazonaws.com/prod/api/passenger'
    ,formData);
    // console.log(response.data);
    return response.data; // Return the data from the API
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Throw the error to handle it later
  }
 
};
export const makeBooking = (formData) => {
  return API.post("/booking", formData);
};

export const getallusers = () => {
  return API.get("/users");
};
export const contactUs = async (formData) => {
  try {
    const response = await axios.post(
      'https://pign230wc2.execute-api.us-east-1.amazonaws.com/prod/api/contacts'
    ,formData);
    // console.log(response.data);
    return response; // Return the data from the API
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Throw the error to handle it later
  }
  return API.post("/contacts", formData);
};

export const ReferenceBooking = (id) => {
  return API.get(`/bookpassanger/${id}`);
};
export const CreateEntryBooking = (payload) => {
  return API.post(`/create/entry`, payload);
};
