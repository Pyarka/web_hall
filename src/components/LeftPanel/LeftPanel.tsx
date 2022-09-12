import React, { useCallback, useState } from "react";
import { FileLoader, LeftPanelContainer } from "./LeftPanelStyles";
import { useDropzone } from 'react-dropzone';

const LeftPanel = () => {
    const [files, setFiles] = useState<File[]>([]);
    const reader = new FileReader();

    const onDrop = useCallback((newFiles: Array<File>) => {
        let oldFiles = files;
        newFiles.forEach((newFile: File) => {
            oldFiles.push(newFile)
        })
        setFiles(oldFiles);
    }, [files]);

    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        onDrop
    });

    const renderFiles = () => {
        const filesList = files.map((file, i) => <div key={i}>{file.name}</div>)
        return <>{filesList}</>;
    }

    return (
        <LeftPanelContainer>
            Left Panel Container
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div>Drag and drop your images here.</div>
            </div>
            {renderFiles()}
        </LeftPanelContainer>
    )
}

export default LeftPanel;