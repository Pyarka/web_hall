import styled from "styled-components";

export const ChatChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ChatChartCell = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 7vh;
    margin: 0.5vh 0 ;
    padding: 4px;
    border: 1px solid black;
    border-radius: 5px;

`;

export const ChartCellTitle = styled.div`
    font-size: large;
`;

export const ChartCellLastText = styled.div`
    font-size: small;
    color: dimgrey;
`;