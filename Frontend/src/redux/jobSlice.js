// src/redux/jobSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allJobs: [],
  allAdminJobs: [],
  allAppliedJobs: [],
  singleJob: null,
  searchedQuery: "",
  searchJobByText: "", // <-- ADD THIS
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload;
    },

    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },

    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload; // <-- ADD THIS
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  setSearchedQuery,
  setSearchJobByText,
  setAllAppliedJobs, // <-- EXPORT
} = jobSlice.actions;

export default jobSlice.reducer;
