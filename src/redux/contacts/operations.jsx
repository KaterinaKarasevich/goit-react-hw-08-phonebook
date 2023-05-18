
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getContactsAPI = createAsyncThunk(
    "contacts/getContactsAPI",
    async (_, thunkiAPI) => {
        try {
            const response = await axios.get('/contacts')
            return response.data;
     } catch (error) {
          return thunkiAPI.rejectWithValue(error.message);
     }
    }
)

export const addContactsAPI = createAsyncThunk(
    "contacts/addContactsAPI",
    async (contact, thunkiAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;       
        } catch (error) {
             return thunkiAPI.rejectWithValue(error.message);
        }
    }
)
export const deleteContactAPI = createAsyncThunk(
    "contacts/deleteContactAPI",
     async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
    }
);