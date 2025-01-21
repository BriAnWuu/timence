import { Box, DialogContentText, Stack } from "@mui/material";
import { ReactNode } from "react";

interface ItemDetailWithIconProps {
    icon?: any;
    text?: string | ReactNode;
    color?: string | null;
    textColor?: string;
}

function ItemDetailWithIcon({
    icon,
    text,
    color,
    textColor,
}: ItemDetailWithIconProps) {
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
                {icon ?? (
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
            <DialogContentText color={textColor || "textSecondary"}>
                {text}
            </DialogContentText>
        </Stack>
    );
}

export default ItemDetailWithIcon;
