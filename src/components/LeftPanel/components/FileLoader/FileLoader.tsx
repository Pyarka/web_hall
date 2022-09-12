import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileContainer, FileImage, FileLoaderContainer } from "./FileLoaderStyles";

const FileLoader = () => {
    const [files, setFiles] = useState<any[]>([]);

    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const onDrop = useCallback((rawFiles: Array<File>) => {
        const oldFiles = files;

        const newFiles = rawFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));

        newFiles.forEach((file) => oldFiles.push(file))

        setFiles(oldFiles);
    }, [files]);

    const {
        getRootProps,
        getInputProps,
        isDragActive
    } = useDropzone({
        onDrop
    });

    const filesPreview = files.map((file) =>
        <FileContainer key={file.name}>
            <FileImage
                src={file.preview}
                alt={file.name} />
        </FileContainer>
    )

    return (
        <FileLoaderContainer {...getRootProps()} isDragging={isDragActive} >
            <input {...getInputProps()} style={{
                display: 'none'
            }} />
            {filesPreview}
        </FileLoaderContainer>

    )
}

export default FileLoader;