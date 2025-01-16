import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import {
    ChangeEvent,
    Dispatch,
    MouseEvent,
    SetStateAction,
    useState,
} from "react";
import { Transition } from "../../utils/modal";
// import "./AddTagModal.scss";

interface AddTagModalProps {
    open: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function AddTagModal({ open, setModalOpen }: AddTagModalProps) {
    const [tagTitle, setTagTitle] = useState<string>("");

    // handle function
    const handleTagTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTagTitle(event.target.value);
    };
    const handleModalClose = () => {
        setModalOpen(false);
        setTagTitle("");
    };
    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        handleModalClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleModalClose}
            TransitionComponent={Transition}
            keepMounted
            aria-description="add tag modal"
            aria-hidden="false"
        >
            <DialogTitle>Add a New Tag</DialogTitle>
            <DialogContent>
                <Box>
                    <TextField
                        id="title"
                        label="Title"
                        variant="filled"
                        autoFocus
                        required
                        fullWidth
                        margin="dense"
                        value={tagTitle}
                        onChange={handleTagTitleChange}
                    ></TextField>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="success"
                    disabled={tagTitle.trim().length === 0}
                    onClick={handleSubmit}
                    type="submit"
                >
                    Add
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={handleModalClose}
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddTagModal;
