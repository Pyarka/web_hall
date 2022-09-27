import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { ChartCellLastText, ChartCellTitle, ChatChartCell, ChatChartContainer } from "./ChatChartStyles";
import { setActiveChat } from '../../../../store/GlobalSlice';

const ChatChart = () => {

    const dispatch = useAppDispatch()

    const chats = useAppSelector(state => state.chats)

    const renderChats = () =>
        chats.map(chat =>
            <ChatChartCell key={chat.name}
                onClick={() => dispatch(setActiveChat(chat.name))}>
                <ChartCellTitle>{chat.name}</ChartCellTitle>
                <ChartCellLastText>{chat.messages[chat.messages.length - 1].text}</ChartCellLastText>
            </ChatChartCell>)

    return (
        <ChatChartContainer>
            {renderChats()}
        </ChatChartContainer>
    )
}

export default ChatChart;