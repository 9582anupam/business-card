import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddBoxIcon from "@mui/icons-material/AddBox";
import cards from "../utils/dummyCards";
import BasicDatePicker from "./common/BasicDatePicker";
import { Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Home = () => {
    return (
        <div className="w-full h-full bg-gray-50 p-3 flex flex-col">
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
                </div>
            </div>

            <div className="flex justify-between w-full relative items-center sm:w-2/3 sm:mx-auto md:w-full md:mx-0">
                <Typography variant="subtitle1" className="">
                    {cards.length} cards
                </Typography>
                {/* <p className="">{cards.length} cards</p> */}
                <BasicDatePicker />
            </div>

            <div className="overflow-y-auto flex-1 mt-2">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`flex items-center justify-between py-1 overflow-hidden
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
                                <div className="p-2 flex-1 flex flex-col min-w-0">
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
                ))}
            </div>
        </div>
    );
};

export default Home;
