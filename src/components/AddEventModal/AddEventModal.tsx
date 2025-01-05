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
    KeyboardEvent,
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
    onClose: Dispatch<SetStateAction<void>>
}

function AddEventModal({ open, onClose }: AddEventModalProps) {
    const tags = useSelector((state: RootState) => state.tags);
    // const dispatch = useDispatch();

    const [description, setDescription] = useState<string>("");
    const [tagId, setTagId] = useState<string | undefined>("");

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    const handleTagChange = (event: SyntheticEvent, value: CategoryTag | null) => {
        setTagId(value?._id)
    }

    // const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === "Enter") {
    //         // event.defaultMuiPrevented = true;
    //     }
    // }

    const formValid = (): boolean => {
        if (!description || typeof tagId !== "string") {
            return false
        }
        return true
    }
    
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
                                clearOnBlur={false}
                                options={tags}
                                getOptionLabel={(option) => option.title}
                                // onKeyDown={handleKeyDown}
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
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
};

export default AddEventModal;
