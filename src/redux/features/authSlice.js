// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api'; // Import the custom axios instance

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  resetPasswordStatus: null,
  verifyOtpStatus: null,
  phoneNumber: '',
  isLoggedIn: false,
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/auth/register', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/auth/login', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  'auth/verifyEmail',
  async (token, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/auth/verify-email/${token}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPasswordGet = createAsyncThunk(
  'auth/resetPasswordGet',
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/auth/reset-password/${id}/${token}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPasswordPut = createAsyncThunk(
  'auth/resetPasswordPut',
  async ({ id, token, password }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/auth/reset-password/${id}/${token}`, { password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'auth/verifyOtp',
  async ({ number, otp }, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/auth/verify-otp', { number, otp });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem('token');
    },
    clearResetPasswordStatus: (state) => {
      state.resetPasswordStatus = null;
    },
    clearVerifyOtpStatus: (state) => {
      state.verifyOtpStatus = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.phoneNumber = action.payload.user.number;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(verifyEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(resetPasswordGet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPasswordGet.fulfilled, (state, action) => {
        state.loading = false;
        state.resetPasswordStatus = action.payload;
      })
      .addCase(resetPasswordGet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(resetPasswordPut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPasswordPut.fulfilled, (state) => {
        state.loading = false;
        state.resetPasswordStatus = 'Password updated successfully';
      })
      .addCase(resetPasswordPut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
        state.verifyOtpStatus = 'Phone number verified successfully';
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { logout, clearResetPasswordStatus, clearVerifyOtpStatus } = authSlice.actions;

export default authSlice.reducer;
