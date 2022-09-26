import React from "react";
import { LeftPanelContainer } from "./LeftPanelStyles";
import ChatChart from "./components/ChatChart/ChatChart";

const LeftPanel = () => {


    return (
        <LeftPanelContainer>
            <ChatChart />
        </LeftPanelContainer>
    )
}

export default LeftPanel;