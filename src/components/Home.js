import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddBoxIcon from "@mui/icons-material/AddBox";
import cards from "../utils/constants/dummyCards";
import  { downloadData }  from "../utils/constants/dummyCards";
import BasicDatePicker from "./common/BasicDatePicker";
import { Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DownloadIcon from "@mui/icons-material/Download";
import { CSVLink } from "react-csv";

const Home = () => {
    return (
        <div className="w-full h-full bg-gray-50 p-3 flex flex-col relative">
            <div className="bg-neutral-100 p-2 rounded-md ">
                <div className="flex gap-2 mb-2">
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <TextField
                        size="small"
                        variant="outlined"
                        placeholder="Search..."
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    className="no-underline">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div className="flex justify-between sm:w-2/3 sm:mx-auto md:w-full md:mx-0">
                    <div className="flex items-center cursor-pointer bg-gray-50 rounded-2xl pr-1">
                        <IconButton size="small">
                            <FilterListIcon />
                        </IconButton>
                        <p>Filter</p>
                    </div>
                    <div className="flex items-center cursor-pointer bg-gray-50 rounded-2xl px-2">
                        <p>Type</p>
                    </div>
                    <div className="flex items-center cursor-pointer bg-gray-50 rounded-2xl pr-1">
                        <IconButton size="small" color="primary">
                            <AddBoxIcon />
                        </IconButton>
                        <p>New Group</p>
                    </div>
                    <div>
                        <CSVLink
                            data={downloadData}
                            filename="contact-details.csv"
                            className="text-black"
                            separator={","}
                            >
                            <IconButton>
                                <DownloadIcon
                                    color="primary"
                                    sx={{ height: "30px", width: "30px" }}
                                />
                            </IconButton>
                        </CSVLink>
                    </div>
                </div>
            </div>

            <div className="flex justify-between w-full relative items-center sm:w-2/3 sm:mx-auto md:w-full md:mx-0">
                <Typography variant="subtitle1" className="">
                    {cards.length} cards
                </Typography>
                {/* <p className="">{cards.length} cards</p> */}
                <BasicDatePicker />
            </div>

            <div className="overflow-y-auto flex-1 mt-2 gap-3 flex flex-col">
                {cards.map((card, index) => (
                    <Link
                        key={index}
                        to={`/cardDetails/${index}`}
                        className="block">
                        <div
                            className={`flex items-center justify-between overflow-hidden hover:scale-[0.99] duration-200 transition-all
                ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                hover:bg-gray-200 transition-colors duration-300`}>
                            <div className="flex flex-1 w-9/12">
                                <div className="flex-shrink-0 flex items-center justify-center">
                                    <img
                                        src={card.imgSrc}
                                        alt=""
                                        className="min-h-32 max-h-32 max-w-32 min-w-32"
                                    />
                                </div>
                                <div className="px-2 flex-1 flex flex-col min-w-0">
                                    <p className="text-lg font-medium truncate whitespace-nowrap">
                                        {card.name}
                                    </p>
                                    <p className="text-gray-500 truncate whitespace-nowrap">
                                        {card.company}
                                    </p>
                                    <p className="text-gray-500 truncate whitespace-nowrap">
                                        {card.email}
                                    </p>
                                    <p className="text-gray-500 truncate whitespace-nowrap">
                                        {card.phone}
                                    </p>
                                    <p className="text-gray-500 truncate whitespace-nowrap">
                                        {card.type}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <IconButton
                                    className="text-blue-500"
                                    size="small">
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <Link to={"/camera"}>
                <div className="flex absolute justify-center items-center bg-sky-600 pr-3 pl-1 py-1 rounded-3xl bottom-4 right-4 cursor-pointer">
                    <IconButton>
                        <CameraAltIcon
                            sx={{
                                color: "white",
                                height: "20px",
                                width: "20px",
                            }}
                        />
                    </IconButton>
                    <p className="text-white">SCAN</p>
                </div>
            </Link>
        </div>
    );
};

export default Home;
