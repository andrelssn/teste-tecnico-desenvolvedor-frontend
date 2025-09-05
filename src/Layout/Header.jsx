import { AppBar, Tab, Tabs } from "@mui/material"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    // define qual tab está ativa com base na URL
    const currentPath = location.pathname;
    const tabValue =
        currentPath === "/" ? 0 : 1;

    const handleChange = (event, newValue) => {
        if (newValue === 0) navigate("/");
        if (newValue === 1) navigate("/plans");
    };

    return (
        <>
            <AppBar sx={{ position: "relative", bgcolor: "#ffffff" }}>
                <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Inicio" />
                    <Tab label="Planos" />
                </Tabs>
            </AppBar>

            <Outlet/>
        </>
    )
}