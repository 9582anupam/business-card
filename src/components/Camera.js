import React, { useState, useRef, useCallback, useMemo } from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { Upload as UploadIcon } from "@mui/icons-material";
import { PhotoCamera as PhotoCameraIcon } from "@mui/icons-material";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif"];

const isFileTypeAccepted = (file) => {
    return ACCEPTED_IMAGE_TYPES.includes(file.type);
};

const Camera = () => {
    const webcamRef = useRef(null);
    const fileInputRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const videoConstraints = useMemo(
        () => ({
            facingMode: "environment",
        }),
        []
    );

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        setSelectedFile(null);
    }, [webcamRef]);

    const discardPhoto = useCallback(() => {
        setImgSrc(null);
        setSelectedFile(null);
    }, []);

    const submitPhoto = useCallback(() => {
        console.log("Submitting photo:", imgSrc || selectedFile);
        setImgSrc(null);
        setSelectedFile(null);
    }, [imgSrc, selectedFile]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && isFileTypeAccepted(file)) {
            const fileURL = URL.createObjectURL(file);
            setSelectedFile(fileURL);
            setImgSrc(null);
        } else {
            alert(
                "Invalid file type. Please select a valid image file (e.g., .jpg, .png, .gif)."
            );
        }
    };

    const displayImage = imgSrc || selectedFile;

    return (
        <div className="webcam-capture h-full w-full relative flex flex-col justify-between bg-white">
            {/* Close Button */}
            <Link to={"/"}>
                <IconButton className="absolute top-2 left-2 cursor-pointer z-10 bg-black rounded-full p-2">
                    <CloseIcon sx={{height: "30px", width: "30px", color: "black"}}/>
                </IconButton>
            </Link>

            {/* Webcam or Image */}
            {!displayImage ? (
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    className=""
                />
            ) : (
                <img
                    src={displayImage}
                    alt="Captured or Selected"
                    className=""
                />
            )}

            {/* Camera Buttons */}
            <div className="camera-btn flex justify-center items-center gap-3 py-2 px-3">
                <div htmlFor="file-upload" className="flex items-center gap-3">
                    {!displayImage && (
                        <IconButton
                            color="inherit"
                            onClick={() => fileInputRef.current.click()}
                            className="p-2">
                            <UploadIcon sx={{height: "30px", width: "30px", color: "black"}}/>
                        </IconButton>
                    )}
                    <input
                        ref={fileInputRef}
                        id="file-upload"
                        type="file"
                        accept={ACCEPTED_IMAGE_TYPES.join(",")}
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </div>
                <span className="flex items-center gap-3">
                    {!displayImage && (
                        <IconButton
                            color="inherit"
                            onClick={capture}
                            className="p-2">
                            <PhotoCameraIcon sx={{height: "30px", width: "30px", color: "black"}}/>
                        </IconButton>
                    )}
                    {displayImage && (
                        <IconButton
                            color="inherit"
                            onClick={discardPhoto}
                            className="p-2">
                            <RefreshIcon sx={{height: "30px", width: "30px", color: "black"}}/>
                        </IconButton>
                    )}
                </span>
                {displayImage && (
                    <Link to={"/"}>
                        <IconButton
                            color="inherit"
                            onClick={submitPhoto}
                            className="p-2">
                            <CheckCircleIcon sx={{height: "30px", width: "30px", color: "black"}}/>
                        </IconButton>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Camera;
