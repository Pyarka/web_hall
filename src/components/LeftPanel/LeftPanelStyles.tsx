import styled from "styled-components";

export const LeftPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    border-right: solid grey 1px;
`;

export const FileLoader = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 10vh;
    border: ${({ isDragging }: { isDragging: boolean }) => isDragging ? 'solid #c21d00 2px' : 'solid #00c210 1px'};
    filter: ${({ isDragging }: { isDragging: boolean }) => isDragging ? 'saturate(30%), blur(50%)' : ''}
`