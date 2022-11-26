import './App.css';
import Admin from "./admin/admin";
import {useSelector} from "react-redux";
import {ThemeValue} from "./reducers/themeSlice";
import {dark_theme} from "./theme/dark";
import {light_theme} from "./theme/light";
import {ThemeProvider} from "@mui/material";

export let theme;

function App() {
    const dark = useSelector(ThemeValue);
    theme = dark ? dark_theme : light_theme;
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Admin/>
            </ThemeProvider>
        </div>
    );
}

export default App;
