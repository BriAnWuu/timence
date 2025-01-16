import { Box, CircularProgress } from "@mui/material";
// import "./Loading.scss";

function Loading() {
    return (
        <Box sx={{ display: "flex" }}>
            <CircularProgress />
        </Box>
    );
}

export default Loading;
