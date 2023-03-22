import { createSlice } from "@reduxjs/toolkit"

//  init state import
const initialState = {
  data:{},
  loading:false,
  error:''
}

const importSlice = createSlice({
  name:'import',
  initialState,
  reducers:{}, extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => {
          return action.type.startsWith('import/') && action.type.endsWith('/pending');
        },
        (state, action) => {
          state.loading = true;
        },
      )
      .addMatcher(
        (action) => {
          return action.type.startsWith('import/') && action.type.endsWith('/fulfilled');
        },
        (state, action) => {
          state.loading = false;
          state.data = { ...action.payload };
        },
      )
      .addMatcher(
        (action) => {
          return action.type.startsWith('import/') && action.type.endsWith('/rejected');
        },
        (state, action) => {
          state.loading = false;
          state.error = action.error;
        },
      );
  },
})