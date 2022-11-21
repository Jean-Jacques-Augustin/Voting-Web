import {Dialog, Fab, TextField} from "@mui/material";
import {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

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
    }

    return (
        <div style={{
            position: "fixed",
            bottom: "5vh",
            right: "5vh",
        }}>
            <Fab color={open ? "secondary" : "primary"} aria-label="btn-add" onClick={handleClickOpen}>
                {
                    open ? <CloseIcon/> : <AddIcon/>
                }
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
    )
}

