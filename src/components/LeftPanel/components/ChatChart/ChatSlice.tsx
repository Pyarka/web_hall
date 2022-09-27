import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ChatChartIF {
    name: string,
    description: string,
    messages: MessageIF[]
}

export interface MessageIF {
    text: string,
    author: string,
    time: number
}

const initialState: ChatChartIF[] = [
    {
        name: 'MAIN',
        description: 'good, god, good',
        messages: [
            {
                time: 1663917212,
                text: 'HEY! BOSS!',
                author: 'EMPLOYEE)))'
            },
            {
                time: 1663917214,
                text: 'HEY! EMPLOYEE!',
                author: 'BOSS:('
            }
        ]
    },
    {
        name: 'OUR',
        description: 'bad, god, bad',
        messages: [
            {
                time: 1663417212,
                text: 'UwU',
                author: 'BOSS:('
            },
            {
                time: 1663517214,
                text: 'EW!!!',
                author: 'EMPLOYEE)))'
            }
        ]
    }
]

export const chatSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {

    },
});

// export const { } = chatSlice.actions;

export default chatSlice.reducer