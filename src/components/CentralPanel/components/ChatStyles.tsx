import styled from "styled-components";

interface ChatPropsIF {
    author: string,
    user: string
}

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0.2vmax;
    background-color: #ffe4c7;
`

export const ChatMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-self: ${({ author, user }: ChatPropsIF) => author === user ? 'flex-end' : 'flex-start'};
    width: 90%;
    min-height: 2%;
    margin: 0.3vmax;
    background-color: ${({ author, user }: ChatPropsIF) => author === user ? '#c16401' : '#fff8f0'} ;
    border: 1px #472500 solid;
    border-radius: 1vmax;
    color: ${({ author, user }: ChatPropsIF) => author === user ? '#f4f0ec' : '#1a0d00'} ;
`

export const MessageAuthor = styled.div`
    margin: 0 0 0 0.9vmin;
    font-size: 1vmax;
    color: ${({ author, user }: ChatPropsIF) => author === user ? '#ffd5a8' : '#673a09'} ;
`

export const MessageText = styled.div`
    margin: 0 0 0.2vmin 1vmin;
    font-size: 1vmax;
`