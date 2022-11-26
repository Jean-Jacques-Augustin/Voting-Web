import * as React from 'react';
import {styled} from '@mui/material/styles';
import {Box} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Route, Routes} from "react-router-dom";
import Region from "./region/region";
import Bv from "./bVote/bv";
import Commune from "./commune/commune";
import AddRegion from "./region/addRegion";
import AddCommune from "./commune/addCommune";
import AddBv from "./bVote/addBv";
import Candidat from "./candidat/candidat";

/**
 *
 * @TODO: Icone
 */
import FlagIcon from '@mui/icons-material/Flag';
import RoomIcon from '@mui/icons-material/Room';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import {CloseOutlined} from "@mui/icons-material";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SettingsIcon from '@mui/icons-material/Settings';
import Cin from "./cin/cin";
import AddCin from "./cin/addCin";
import SwitchTheme from "../components/switchTheme";


/**
 *
 * Fin Icon and listItem
 */

const ListElements = [
    {
        name: "Région",
        icon: <FlagIcon/>,
        path: "/"
    },
    {
        name: "Bureau de vote",
        icon: <RoomIcon/>,
        path: "/bv"
    },
    {
        name: "Commune",
        icon: <MapsHomeWorkIcon/>,
        path: "/commune"
    },
    {
        name: "Candidat",
        icon: <FlagIcon/>,
        path: "/candidat"
    },
    {
        name: "Identité",
        icon: <PermContactCalendarIcon/>,
        path: "/cin"

    },
    {
        name: "Région",
        icon: <FlagIcon/>,
        path: "/region"
    },
    {
        name: "Région",
        icon: <FlagIcon/>,
        path: "/region"
    }
]

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };


    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed">
                <Toolbar style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }} >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{marginRight: 5}}
                        >
                            {open ? <CloseOutlined/> : <MenuIcon/>}
                            {/*<MenuIcon/>*/}
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Administration de la plateforme
                        </Typography>
                    </div>
                    <SwitchTheme/>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader/>
                <Divider/>
                <List>
                    {ListElements.map((item, key) => (
                        <ListItem key={key} disablePadding sx={{display: 'block'}}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                                to={item.path}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{opacity: open ? 1 : 0}}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </List>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
                <div className="content">

                    <Routes>
                        {/**
                         * Routes basiques
                         */}
                        <Route path="/" element={<Region/>}/>
                        <Route path="/bv" element={<Bv/>}/>
                        <Route path="/commune" element={<Commune/>}/>
                        <Route path="/region" element={<Region/>}/>
                        <Route path="/candidat" element={<Candidat/>}/>
                        <Route path="/cin" element={<Cin/>}/>

                        {/**
                         * Routes ajout
                         */}
                        <Route path="/addRegion" element={<AddRegion/>}/>
                        <Route path="/addBv" element={<AddBv/>}/>
                        <Route path="/addCommune" element={<AddCommune/>}/>
                        <Route path={"/addCin"} element={<AddCin/>}/>
                    </Routes>

                </div>
            </Box>
        </Box>
    );
}
