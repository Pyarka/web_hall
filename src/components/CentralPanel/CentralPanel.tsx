import React from "react";
import { CentralPanelContainer } from "./CentralPanelStyles";
import Chat from "./components/Chat";

const CentralPanel = () => {
    return (
        <CentralPanelContainer>
            <Chat />
        </CentralPanelContainer>
    )
}

export default CentralPanel;