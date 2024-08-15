import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddBoxIcon from "@mui/icons-material/AddBox";
import cards from "../utils/dummyCards";
import { DateCalendar } from "@mui/x-date-pickers";
const Home = () => {

    // console.log(cards);

    return (
        <div className="w-full h-full bg-gray-50 p-3">
            <div className="bg-slate-200 p-2 rounded-md ">
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
            <div className="flex justify-between w-full relative">
                <p className="">{cards.length} cards</p>
            </div>
        </div>
    );
};

export default Home;