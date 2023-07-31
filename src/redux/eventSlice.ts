import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';
import { firestore } from '../config/firebaseConfig';
import { Event } from '../types/Event';

interface EventState {
  events: Event[];
  loading: boolean;
  error: string | null;
}

const initialState: EventState = {
  events: [],
  loading: false,
  error: null,
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    fetchEventsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEventsSuccess(state, action: PayloadAction<Event[]>) {
      state.events = action.payload;
      state.loading = false;
    },

    fetchEventsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchEventByIdStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEventByIdSuccess(state, action: PayloadAction<Event>) {
      state.events.push(action.payload);
      state.loading = false;
    },
    fetchEventByIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchEventsStart, fetchEventsSuccess, fetchEventsFailure, fetchEventByIdStart, fetchEventByIdSuccess, fetchEventByIdFailure } = eventSlice.actions;

export default eventSlice.reducer;

export const fetchEvents = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchEventsStart());
    const eventRef = firestore.collection('event');
    const snapshot = await eventRef.get();
    const events: Event[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      price: doc.data().price,
      image1: doc.data().image1,
      image2: doc.data().image2,
      image3: doc.data().image3,
      startDay: doc.data().startDay,
      endDay: doc.data().endDay,
      content1: doc.data().content1,
      content2: doc.data().content2,
      content3: doc.data().content3,
    }));
    dispatch(fetchEventsSuccess(events));
  } catch (error) {
    dispatch(fetchEventsFailure('Failed to fetch event.'));
  }
};

export const fetchEventById =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(fetchEventByIdStart());
      const eventRef = firestore.collection('event').doc(id);
      const docSnapshot = await eventRef.get();

      if (docSnapshot.exists) {
        const event = { ...docSnapshot.data(), id } as Event;
        dispatch(fetchEventByIdSuccess(event));
      } else {
        dispatch(fetchEventByIdFailure('Event not found.'));
      }
    } catch (error) {
      dispatch(fetchEventByIdFailure('Failed to fetch event.'));
    }
  };

export const selectEvents = (state: RootState) => state.event.events;

export const selectEventById = (id: string) => (state: RootState) => state.event.events.find((event) => event.id === id);

export const selectLoading = (state: RootState) => state.event.loading;
