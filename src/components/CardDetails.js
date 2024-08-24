import React from "react";
import { useParams } from "react-router-dom";
import cards from "../utils/constants/dummyCards";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LanguageIcon from "@mui/icons-material/Language";
import starIcon from "../utils/images/ai-start.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import Input from "@mui/material/Input";
import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import { CSVLink } from "react-csv";

const CardDetails = () => {
    const { id } = useParams();
    const card = cards.filter((c, i) => i === parseInt(id, 10))[0];
    const { name, email, phone, company, type, imgSrc } = card;

    // Generate CSV data dynamically
    const csvData = [
        ["Field", "Value"],
        ["Full Name", name],
        ["Email", email],
        ["Phone", phone],
        ["Company", company],
        ["Job Title", type],
    ];

    return (
        <div className="bg-gray-100 w-full h-full flex flex-col items-center">
            <div className="flex justify-between w-full items-center mb-2 min-h-10 p-4">
                <Link to={"/"}>
                    <IconButton size="small">
                        <ChevronLeftIcon
                            color=""
                            sx={{ width: "40px", height: "40px" }}
                        />
                    </IconButton>
                </Link>
                <p className="font-bold text-lg">{name}</p>
                <IconButton>
                    <MoreVertIcon color="" />
                </IconButton>
            </div>

            <div className="overflow-y-auto w-full flex flex-col gap-4 overflow-x-hidden">
                <div className="flex justify-between w-full items-center sm:w-2/3 sm:mx-auto md:w-full md:mx-0  overflow-hidden px-4 min-h-48 max-h-[25vh]">
                    <img
                        src={imgSrc}
                        alt="card img"
                        className="card-img card-details min-h-48 max-h-[25vh] w-full mx-auto rounded-lg"
                    />
                </div>

                <div className="px-2">
                    <div className="flex justify-between w-full items-center sm:w-2/3 sm:mx-auto md:w-full md:mx-0 px-4 bg-white rounded-lg">
                        <IconButton>
                            <LocalPhoneIcon
                                color="primary"
                                sx={{ height: "30px", width: "30px" }}
                            />
                        </IconButton>
                        <IconButton>
                            <ChatIcon
                                color="primary"
                                sx={{ height: "30px", width: "30px" }}
                            />
                        </IconButton>
                        <IconButton>
                            <EmailIcon
                                color="primary"
                                sx={{ height: "30px", width: "30px" }}
                            />
                        </IconButton>
                        <IconButton>
                            <LocationOnIcon
                                color="primary"
                                sx={{ height: "30px", width: "30px" }}
                            />
                        </IconButton>
                        <IconButton>
                            <LanguageIcon
                                color="primary"
                                sx={{ height: "30px", width: "30px" }}
                            />
                        </IconButton>
                        <CSVLink
                            data={csvData}
                            filename="contact-details.csv"
                            className="text-black">
                            <IconButton>
                                <DownloadIcon
                                    color="primary"
                                    sx={{ height: "30px", width: "30px" }}
                                />
                            </IconButton>
                        </CSVLink>
                    </div>
                </div>

                <Link>
                    <div className="flex justify-between items-center w-full sm:w-2/3 sm:mx-auto md:w-full md:mx-0 px-4">
                        <img src={starIcon} alt="" className="h-6"></img>
                        <p>Research {name} with AI</p>
                        <IconButton>
                            <ChevronRightIcon
                                sx={{ height: "30px", width: "30px" }}
                            />
                        </IconButton>
                    </div>
                </Link>

                <div className="mx-2">
                    <div className="w-full py-2 flex flex-col bg-white rounded-lg">
                        <div className="flex justify-start items-center w-full px-4 border-b border-gray-200 py-2">
                            <p className=" w-1/3 text-gray-700 font-medium ">
                                Groups
                            </p>
                            <div className="flex items-center cursor-pointer bg-sky-50 px-2 py-1 rounded-2xl border-2 border-[#1976d282]">
                                <AddIcon
                                    sx={{ height: "15px", width: "15px" }}
                                />
                                <p className="ml-1">Add</p>
                            </div>
                        </div>
                        <div className="flex w-full px-4 py-2">
                            <div className="w-1/3 text-gray-700 font-medium">
                                Note
                            </div>
                            <div className="w-2/3 ml-4">
                                <Input
                                    size="small"
                                    placeholder="Write a note..."
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-2">
                    <div className="w-full px-4 flex flex-col py-2 bg-white rounded-md">
                        <div className="flex justify-between items-center border-b border-gray-200 py-2">
                            <p className="text-gray-500 font-semibold w-1/3 text-start overflow-hidden overflow-ellipsis whitespace-nowrap pr-2">
                                Full name:
                            </p>
                            <p className="text-black w-2/3 text-start overflow-hidden overflow-ellipsis whitespace-nowrap pl-2">
                                {name}
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 py-2">
                            <p className="text-gray-500 font-semibold w-1/3 text-start overflow-hidden overflow-ellipsis whitespace-nowrap pr-2">
                                Company:
                            </p>
                            <p className="text-black w-2/3 text-start overflow-hidden overflow-ellipsis whitespace-nowrap pl-2">
                                {company}
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 py-2">
                            <p className="text-gray-500 font-semibold w-1/3 text-start overflow-hidden overflow-ellipsis whitespace-nowrap pr-2">
                                Job Title:
                            </p>
                            <p className="text-black w-2/3 text-start overflow-hidden overflow-ellipsis whitespace-nowrap pl-2">
                                {type}
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 py-2">
                            <p className="text-gray-500 font-semibold w-1/3 text-start overflow-hidden overflow-ellipsis whitespace-nowrap pr-2">
                                Phone:
                            </p>
                            <p className="text-black w-2/3 text-start overflow-hidden overflow-ellipsis whitespace-nowrap pl-2">
                                {phone}
                            </p>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 py-2">
                            <p className="text-gray-500 font-semibold w-1/3 text-start overflow-hidden overflow-ellipsis whitespace-nowrap pr-2">
                                Email:
                            </p>
                            <p className="text-black w-2/3 text-start overflow-hidden overflow-ellipsis whitespace-nowrap pl-2">
                                {email}
                            </p>
                        </div>
                        <div className="flex items-center py-2">
                            <p className="text-gray-500 font-semibold w-1/3 text-start overflow-hidden overflow-ellipsis whitespace-nowrap pr-2">
                                Website:
                            </p>
                            <Input
                                size="small"
                                placeholder="Enter website"
                                className="w-2/3 overflow-hidden overflow-ellipsis whitespace-nowrap"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full px-2 mb-6">
                    <div className="flex justify-between items-center bg-white w-full px-4 py-1 rounded-lg">
                        <p className="text-gray-500 font-semibold w-1/3">
                            Dated
                        </p>
                        <p className="text-black w-2/3">14-09-2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
