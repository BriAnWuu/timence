import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deselectCurrentEvent } from "../../state/currentEvent/currentEventSlice";
import { deleteEvent } from "../../state/events/eventsSlice";
import { RootState } from "../../state/store";
import { getEventDetail } from "../../utils/eventDetail";
import "./DeleteEventModal.scss";

interface DeleteEventModalProps {
    open: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function DeleteEventModal({ open, setModalOpen }: DeleteEventModalProps) {
    // redux state
    const events = useSelector((state: RootState) => state.events);
    const currentEvent = useSelector((state: RootState) => state.currentEvent);
    const dispatch = useDispatch();

    // event to display
    const eventDetail = getEventDetail(currentEvent._id, events);

    // handle functions
    const handleModalClose = () => {
        setModalOpen(false);
        dispatch(deselectCurrentEvent());
    };
    const handleDelete = () => {
        setModalOpen(false);
        dispatch(deleteEvent(eventDetail?._id || "-1"));
        dispatch(deselectCurrentEvent());
    };

    return (
        <Dialog open={open} onClose={handleModalClose}>
            <DialogTitle>Event Info</DialogTitle>
            <DialogContent>
                <DialogContentText>{eventDetail?._id}</DialogContentText>
                <DialogContentText>{eventDetail?.title}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteEventModal;
