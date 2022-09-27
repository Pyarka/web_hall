import styled from "styled-components";

export const FileLoaderContainer = styled.label`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    border: ${({ isDragging }: { isDragging: boolean }) => isDragging ? 'solid #c21d00 2px' : 'solid #00c210 1px'};
    filter: ${({ isDragging }: { isDragging: boolean }) => isDragging ? 'saturate(30%), blur(50%)' : ''};
`

export const FileContainer = styled.div`
    display: flex;
    height: 5vh;
    width: 5vw;
`

export const FileImage = styled.img`
    height: 100%;
`