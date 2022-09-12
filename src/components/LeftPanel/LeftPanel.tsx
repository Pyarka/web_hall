import React from "react";
import { LeftPanelContainer } from "./LeftPanelStyles";
import FileLoader from "./components/FileLoader/FileLoader";

const LeftPanel = () => {


    return (
        <LeftPanelContainer>
            Left Panel Container
            {FileLoader()}
        </LeftPanelContainer>
    )
}

export default LeftPanel;