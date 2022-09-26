import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GolbalIF {
    user: string,
    activeChat: string,
}

const initialState: GolbalIF = {
    user: '',
    activeChat: '',
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setActiveChat: (state: any, chatName: PayloadAction<string>) => {
            state.activeChat = chatName.payload
        }
    }
})

export const { setActiveChat } = globalSlice.actions

export default globalSlice.reducer