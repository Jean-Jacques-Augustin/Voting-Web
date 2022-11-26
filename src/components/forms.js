import {Dialog, Fab, InputBase, Paper, TextField} from "@mui/material";
import {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

export const CustomTextField = (props) => {
    return (
        <TextField
            type={props.type}
            size={"medium"}
            value={props.value}
            label={props.label}
            variant="outlined"
            onChange={props.onChange}
            className={"TextField"}
            error={props.error}
            helperText={
                props.error ? `Le champ ${props.label} est obligatoire` : ``
            }
            fullWidth
        />
    );
};

export const CustomModal = (props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: "5vh",
                right: "5vh",
            }}
        >
            <Fab
                color={open ? "secondary" : "primary"}
                aria-label="btn-add"
                onClick={handleClickOpen}
            >
                {open ? <CloseIcon/> : <AddIcon/>}
            </Fab>
            <Dialog
                open={open}
                onClose={handleClickOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {props.children}
            </Dialog>
        </div>
    );
};

export const CustomSearchBar = (props) => {
    return (
        <Paper
            component="form"
            sx={{p: "2px 4px", display: "flex", alignItems: "center"}}
            variant={"outlined"}
        >
            <InputBase
                sx={{ml: 1, flex: 1}}
                placeholder="Rechercher ..."
                inputProps={{"aria-label": "Rechercher ..."}}
            />
            <IconButton
                color="primary"
                sx={{p: "10px"}}
                aria-label="directions"
            >
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
};


export const CustomDatePicker = (props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={props.label}
                value={props.value}
                onChange={props.onChange}
                renderInput={(params) => <TextField fullWidth {...params} />}
            />
        </LocalizationProvider>
    );
};
