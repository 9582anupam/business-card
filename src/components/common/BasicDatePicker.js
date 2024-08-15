import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./date.css"

export default function BasicDatePicker() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
                <DatePicker
                    sx={{
                        ".MuiPickersToolbar-root": {
                            color: "#bbdefb",
                            borderRadius: "2px",
                            borderWidth: "1px",
                            borderColor: "#2196f3",
                            border: "1px solid",
                            backgroundColor: "#0d47a1",
                            // width: "20px",
                        },
                        '& .MuiInputBase-input': {
                            fontSize: '0.75rem', // smaller font size
                            height: '6px',   // adjust height
                            width: "60px",

                        },
                        '& .MuiIconButton-root': {
                            // padding: '0.25rem', // reduce icon button padding
                            // width: "20px",
                        },
                    }}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}
