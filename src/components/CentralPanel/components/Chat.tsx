import React from "react";
import { useAppSelector } from "../../../store/hooks";
import { ChatContainer, ChatMessage, MessageAuthor, MessageText } from "./ChatStyles";

const Chat = () => {

    const activeChatStore = useAppSelector(state => state.global.activeChat)
    const chats = useAppSelector(state => state.chats)
    const user = useAppSelector(state => state.global.user)

    const activeChat = chats.find((chat) => chat.name === activeChatStore)

    const renderMessages = () => {
        if (activeChat) {
            return activeChat.messages.map(message =>
                <ChatMessage key={message.time}
                    author={message.author}
                    user={user}
                >
                    <MessageAuthor
                        author={message.author}
                        user={user}
                    >{message.author}</MessageAuthor>
                    <MessageText>{message.text}</MessageText>
                </ChatMessage>
            )
        }
    }

    return (
        <ChatContainer>
            {renderMessages()}
        </ChatContainer>
    )
}

export default Chat;