import React, { useState } from "react";
import { FileLoader, LeftPanelContainer } from "./LeftPanelStyles";

const LeftPanel = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const reader = new FileReader();

    // reader.addEventListener('loadend', (e) => {
    //     console.log(e.target);
    // })

    const onDrag = (e: any) => {
        setIsDragging(true);
        e.preventDefault();
        e.stopPropagation();
    }

    const offDrag = (e: any) => {
        setIsDragging(false);
        e.preventDefault();
        e.stopPropagation();
    }

    const getFiles = (newFiles: FileList | null) => {
        let oldFiles = files;
        let filesData = [];
        if (newFiles == null) return null;
        for (let i = 0; i < newFiles.length; i++) {
            oldFiles.push(newFiles[i]);
            //filesData.push(reader.readAsDataURL(newFiles[i]));
        }
        setFiles(oldFiles);
    }

    const renderFiles = () => {
        const filesList = files.map((file, i) => <div key={i}>{file.name}</div>)
        return <>{filesList}</>;
    }

    return (
        <LeftPanelContainer>
            Left Panel Container
            <form>
                <input
                    type='file'
                    id='file-loader'
                    multiple
                    onChange={(e) => {
                        const newFiles = e.target.files;
                        getFiles(newFiles);
                    }}
                    style={
                        {
                            display: 'none'
                        }
                    }
                />
                <FileLoader htmlFor="file-loader"
                    isDragging={isDragging}
                    onDragEnter={(e) => onDrag(e)}
                    onDragOver={(e) => onDrag(e)}
                    onDragEnd={(e) => offDrag(e)}
                    onDragLeave={(e) => offDrag(e)}
                    onDrop={(e) => {
                        offDrag(e);
                        const newFiles = e.dataTransfer.files;
                        getFiles(newFiles);
                    }}
                >
                    нажми чтобы загрузить файлы или перетащи их
                </FileLoader>
            </form>
            {renderFiles()}
        </LeftPanelContainer>
    )
}

export default LeftPanel;