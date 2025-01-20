import {
    Autocomplete,
    AutocompleteChangeReason,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";

import {
    ChangeEvent,
    Dispatch,
    HTMLAttributes,
    MouseEvent,
    ReactNode,
    SetStateAction,
    SyntheticEvent,
    useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOneEvent } from "../../state/events/eventsSlice";
import { RootState } from "../../state/store";
import { CategoryTag } from "../../ts/interfaces/tag.interface";
import { generateId } from "../../utils/generateId";
import { Transition } from "../../utils/modal";
import "./AddEventModal.scss";

interface AddEventModalProps {
    open: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function AddEventModal({ open, setModalOpen }: AddEventModalProps) {
    // redux states
    const currentEvent = useSelector((state: RootState) => state.currentEvent);
    const tags = useSelector((state: RootState) => state.tags);
    const dispatch = useDispatch();

    // local states
    const [description, setDescription] = useState<string>("");
    const [pendingTag, setPendingTag] = useState<CategoryTag | null>(null);

    // handle functions
    const handleModalClose = () => {
        setModalOpen(false);
        // dispatch(deselectCurrentEvent());
        setDescription("");
        setPendingTag(null);
    };
    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };
    const handleTagChange = (
        event: SyntheticEvent,
        value: CategoryTag | null,
        reason: AutocompleteChangeReason
    ) => {
        if (event.type === "keydown" && reason === "removeOption") return;
        setPendingTag(value);
    };
    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        dispatch(
            addOneEvent({
                title: description,
                tagId: pendingTag?._id,
                _id: generateId(),
                start: currentEvent.start,
                end: currentEvent.end,
            })
        );

        handleModalClose();
    };

    const formValid = (): boolean => {
        if (!description.trim()) {
            return false;
        }
        return true;
    };

    return (
        <Dialog
            open={open}
            onClose={handleModalClose}
            TransitionComponent={Transition}
            keepMounted
            aria-description="add event modal"
            aria-hidden={false}
        >
            <DialogTitle>Add Event</DialogTitle>
            <DialogContent>
                <div className="add-event-modal__content-container">
                    <DialogContentText>
                        Thanks for using Timence. Fill the information below to
                        add an event.
                    </DialogContentText>
                    <Box component="form">
                        <div className="add-event-modal__input-container">
                            <TextField
                                required
                                id="description"
                                label="Description"
                                variant="filled"
                                value={description}
                                onChange={handleDescriptionChange}
                                fullWidth
                            />
                            <Autocomplete
                                id="tags"
                                clearOnBlur={true}
                                options={tags}
                                getOptionLabel={(option) => option.title}
                                renderOption={renderOptions}
                                value={pendingTag}
                                onChange={handleTagChange}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Tags"
                                        variant="filled"
                                    />
                                )}
                                fullWidth
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

export default AddEventModal;

// autocomplete custom render: add color box
const renderOptions = (
    props: HTMLAttributes<HTMLLIElement> & { key: any },
    option: CategoryTag
): ReactNode => {
    const { key, ...optionProps } = props;
    return (
        <li key={key} {...optionProps}>
            <Box
                component="span"
                sx={{
                    width: 14,
                    height: 14,
                    flexShrink: 0,
                    borderRadius: "3px",
                    mr: 1,
                    mt: "2px",
                }}
                style={{ backgroundColor: option.color }}
            />
            <Box component="span">{option.title}</Box>
        </li>
    );
};
