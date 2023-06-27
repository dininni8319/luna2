import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IPayload {
    id: string
}

const initialState = {
    id: '',
    isClicked: false
}

export const titleSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        onClick: (
            state: typeof initialState,
            action: PayloadAction<IPayload>
        ) => {
            state.id = action.payload.id
            state.isClicked = true
        }
    }
})

export const { onClick } = titleSlice.actions

export default titleSlice.reducer
