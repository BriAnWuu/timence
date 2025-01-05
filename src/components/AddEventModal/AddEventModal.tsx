import {
    Autocomplete,
    Box,
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
import {
    ChangeEvent,
    Dispatch,
    forwardRef,
    ReactElement,
    Ref,
    SetStateAction,
    SyntheticEvent,
    useState
} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { CategoryTag } from "../../ts/interfaces/tag.interface";
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
    onModalClose: Dispatch<SetStateAction<void>>
}

function AddEventModal({ open, onModalClose }: AddEventModalProps) {
    const tags = useSelector((state: RootState) => state.tags);

    const [description, setDescription] = useState<string>("");
    const [tagId, setTagId] = useState<string | undefined>(undefined);


    const handleModalClose = () => {
        onModalClose()
        setDescription("")
        setTagId(undefined)
    }
    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }
    const handleTagChange = (event: SyntheticEvent, value: CategoryTag | null) => {
        setTagId(value?._id)
    }

    const formValid = (): boolean => {
        if (!description.trim()) {
            return false
        }
        return true
    }
    
    return (
        <Dialog 
            open={open}
            onClose={handleModalClose}
            TransitionComponent={Transition}
            keepMounted
            aria-description="add event modal"
        >
            <DialogTitle>Add Event</DialogTitle>
            <DialogContent>
                <div className="add-event-modal__content-container">
                    <DialogContentText>Thanks for using Timence. Fill the information below to add an event.</DialogContentText>
                    <Box component="form">
                        <div className="add-event-modal__input-container">
                            <TextField
                                required
                                id="description"
                                label="Description"
                                variant="filled"
                                value={description}
                                onChange={handleDescriptionChange}
                                fullWidth={true}
                            />
                            <Autocomplete
                                id="tags"
                                clearOnBlur={true}
                                options={tags}
                                getOptionLabel={(option) => option.title}
                                onChange={handleTagChange}
                                renderInput={(params) =>(
                                    <TextField 
                                        {...params} 
                                        label="Tags" 
                                        variant="filled"
                                    />
                                )}
                                fullWidth={true}
                            />
                        </div>
                    </Box>
                </div>
            </DialogContent>
            <DialogActions>
                <Button 
                    variant="contained"
                    color="success"
                    disabled={!formValid()}
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
    )
};

export default AddEventModal;
