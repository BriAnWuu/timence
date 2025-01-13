import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deselectCurrentEvent } from "../../state/currentEvent/currentEventSlice";
import { deleteEvent } from "../../state/events/eventsSlice";
import { RootState } from "../../state/store";
import { getEventDetail, getTagColor } from "../../utils/eventDetail";
import { formatDate } from "../../utils/formatDate";
import { Transition } from "../../utils/modal";
import "./DeleteEventModal.scss";

interface DeleteEventModalProps {
    open: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>;
}
interface DetailItemProps {
    icon?: any;
    text?: string | any;
    color?: string | null;
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
        setTimeout(() => {
            dispatch(deselectCurrentEvent());
        }, 300);
    };
    const handleDelete = () => {
        setModalOpen(false);
        setTimeout(() => {
            dispatch(deleteEvent(eventDetail?._id || "-1"));
            dispatch(deselectCurrentEvent());
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
                {/* <DialogContentText>
                    Thanks for using Timence. Use the action below to
                    edit/delete an event.
                </DialogContentText> */}
                <Stack
                    spacing={1}
                    direction="column"
                    sx={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        // mt: 2,
                    }}
                >
                    <DetailItem
                        color={getTagColor(eventDetail?.tagId, tags)}
                        text={eventDetail?.title}
                    />
                    <DetailItem
                        icon={<AccessTimeIcon />}
                        text={formatDate(eventDetail?.start)}
                    />
                    <DetailItem
                        icon={<PeopleAltOutlinedIcon />}
                        text={"add guests"}
                    />
                    <DetailItem
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
                >
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteEventModal;

function DetailItem({ icon, text, color }: DetailItemProps) {
    return (
        <Stack spacing={2} direction="row" sx={{ alignItems: "center" }}>
            <Box
                sx={{
                    width: 24,
                    height: 24,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {icon ? (
                    icon
                ) : (
                    <Box
                        component="div"
                        sx={{
                            width: 14,
                            height: 14,
                            flexShrink: 0,
                            borderRadius: "3px",
                        }}
                        style={{ backgroundColor: color ? color : "#06448f" }}
                    />
                )}
            </Box>
            <DialogContentText>{text}</DialogContentText>
        </Stack>
    );
}
