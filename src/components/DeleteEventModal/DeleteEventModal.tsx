import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent } from "../../state/events/eventsSlice";
import { RootState } from "../../state/store";
import { getEventDetail, getTagColor } from "../../utils/eventDetail";
import { formatDate } from "../../utils/formatDate";
import { Transition } from "../../utils/modal";
import ItemDetailWithIcon from "../ItemDetailWithIcon/ItemDetailWithIcon";

interface DeleteEventModalProps {
    open: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}

function DeleteEventModal({ open, setModalOpen }: DeleteEventModalProps) {
    // redux state
    const events = useSelector((state: RootState) => state.events);
    const currentEvent = useSelector((state: RootState) => state.currentEvent);
    const tags = useSelector((state: RootState) => state.tags);
    const dispatch = useDispatch();

    // event to display
    const eventDetail = getEventDetail(currentEvent._id, events);

    // handle functions
    const handleModalClose = () => {
        setModalOpen(false);
    };
    const handleDelete = () => {
        setModalOpen(false);
        setTimeout(() => {
            dispatch(deleteEvent(eventDetail?._id || "-1"));
        }, 300);
    };

    return (
        <Dialog
            open={open}
            onClose={handleModalClose}
            TransitionComponent={Transition}
            keepMounted
            aria-description="delete event modal"
            aria-hidden={false}
        >
            <DialogTitle>Event Info</DialogTitle>
            <DialogContent sx={{ minWidth: "40vw" }}>
                <Stack
                    spacing={1}
                    direction="column"
                    sx={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <ItemDetailWithIcon
                        color={getTagColor(eventDetail?.tagId, tags)}
                        text={eventDetail?.title}
                    />
                    <ItemDetailWithIcon
                        icon={<AccessTimeIcon />}
                        text={formatDate(eventDetail?.start)}
                    />
                    <ItemDetailWithIcon
                        icon={<PeopleAltOutlinedIcon />}
                        text={"add guests"}
                    />
                    <ItemDetailWithIcon
                        icon={<RoomOutlinedIcon />}
                        text={"add location"}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    color="success"
                    disabled
                    // onClick={}
                >
                    Edit
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleDelete}
                    type="submit"
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteEventModal;
