import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    download: null,
    upload: null,
    ping: null,
    completed: false
}

export const speedSlice = createSlice({
    name: 'speedTest',
    initialState,
    reducers: {
        setterValues: (state, action) => {
            state[action.payload.name] = action.payload.value;
        },
        reset: () => {
            return initialState
        }
    }
});

export const { setterValues, reset } = speedSlice.actions

export default speedSlice.reducer

