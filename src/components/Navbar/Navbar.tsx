import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="nav">
            <IconButton aria-label="hamburger menu">
                <MenuIcon />
            </IconButton>
            <h1 className="nav__wordmark">Timence</h1>
            <IconButton aria-label="settings">
                <SettingsIcon />
            </IconButton>
        </div>
    );
}

export default Navbar;
