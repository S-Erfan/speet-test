import { createSlice } from '@reduxjs/toolkit'
import { ISpeedReduce } from '../viewModal/ISpeedReduce';

const initialState: ISpeedReduce = {
    download: null,
    upload: null,
    ping: null,
    completed: false
}

export const speedSlice = createSlice({
    name: 'speedTest',
    initialState,
    reducers: {
        setPing: (state, action) => {
            state.ping = action.payload.value;
        },
        setDownload: (state, action) => {
            state.download = action.payload.value;
        },
        setUpload: (state, action) => {
            state.upload = action.payload.value;
        },
        setCompleted: (state, action) => {
            state.completed = action.payload.value;
        },
        reset: () => {
            return initialState
        }
    }
});

export const { setPing, setUpload, setDownload, setCompleted, reset } = speedSlice.actions

export default speedSlice.reducer

