import Auth from '@/api/authAPI';
import { IDataCallback, IUserLogin } from '@/model';
import { RootState } from '@/stores';
import { setCookie } from '@/utilities';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  data:{
    name:'phuoc',
    infoUser:{}
  },
  loading: false,
  error: '',
};


export const authLogin = createAsyncThunk('user/login', async (payload: IDataCallback<IUserLogin>, { getState }) => {
  try {
    const {data, access_token} = await Auth.login(payload.data);
    
    setCookie('userToken',access_token || '')
    setCookie('userData',JSON.stringify(data) || '')

    payload.callback();
    return { infoUser:data, isLogin: true };
  } catch (error) {
    payload.error();
    console.log(error);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => {
          return action.type.startsWith('user/') && action.type.endsWith('/pending');
        },
        (state, action) => {
          state.loading = true;
        },
      )
      .addMatcher(
        (action) => {
          return action.type.startsWith('user/') && action.type.endsWith('/fulfilled');
        },
        (state, action) => {
          state.loading = false;
          state.data = { ...action.payload };
        },
      )
      .addMatcher(
        (action) => {
          return action.type.startsWith('user/') && action.type.endsWith('/rejected');
        },
        (state, action) => {
          state.loading = false;
          state.error = action.error;
        },
      );
  },
});

export const selectUserInfo = (state: RootState) => state.userSlice.data;
export const selectUserLoading = (state: RootState) => state.userSlice.loading;
export default userSlice.reducer;
