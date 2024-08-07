// src/redux/features/eventSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';


const initialState = {
  events: [],
  registeredUsers: [],
  status: 'idle',
  error: null,
};

// Async thunk for event registration
export const registerForEvent = createAsyncThunk(
  'events/registerForEvent',
  async ({ eventId, token }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        `/api/events/${eventId}/register`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching all events
export const fetchAllEvents = createAsyncThunk(
  'events/fetchAllEvents',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/api/events/all');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for fetching events by status
export const fetchEventsByStatus = createAsyncThunk(
  'events/fetchEventsByStatus',
  async (status, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/events/${status}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    clearEventErrors(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerForEvent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerForEvent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.registeredUsers.push(action.payload);
      })
      .addCase(registerForEvent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchAllEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllEvents.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.events = action.payload;
      })
      .addCase(fetchAllEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchEventsByStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEventsByStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.events = action.payload;
      })
      .addCase(fetchEventsByStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearEventErrors } = eventSlice.actions;

export default eventSlice.reducer;
