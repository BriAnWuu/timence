import {
    Autocomplete,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
    TextField
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Dispatch, forwardRef, ReactElement, Ref, SetStateAction } from "react";
import "./AddEventModal.scss";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
  

interface AddEventModalProps {
    open: boolean
    onClose: Dispatch<SetStateAction<void>>
}

function AddEventModal({ open, onClose }: AddEventModalProps) {
    return (
        <Dialog 
            open={open}
            onClose={() => onClose()}
            TransitionComponent={Transition}
            keepMounted
            aria-description="add event modal"
        >
            <DialogTitle>Add Event</DialogTitle>
            <DialogContent>
                <DialogContentText>Thanks for using Timence. Fill the information below to add an event.</DialogContentText>
                <TextField></TextField>
                <Autocomplete></Autocomplete>
            </DialogContent>
            <DialogActions>
                <Button 
                    variant="contained"
                    color="success"
                    disabled
                >
                    Add
                </Button>
                <Button 
                    variant="outlined"
                    color="error"
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default AddEventModal;
