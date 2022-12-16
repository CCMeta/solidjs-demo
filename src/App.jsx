import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from "react-router-dom";

import './App.css';
import AboutPage from './p/About';
import NavigateComponent from './p/c/Navigate';
import DHCPPage from './p/DHCP';
import IndexPage from './p/Index';
import ProtectionPage from './p/Protection';
import PinPage from './p/Pin';
import SIMPage from './p/SIM';
import WiFiPage from './p/WiFi';
import SimInfoPage from './p/SimInfo';
import NetworkInfoPage from './p/NetworkInfo';
import DevicePage from './p/DeviceInfo';
import OperationPage from './p/Operation';
import PasswordPage from './p/Password';
import ClientsPage from "./p/Clients";
import SettingsPage from "./p/Settings";
import HeaderBar from "./p/c/HeaderBar";
import { createStore } from "react-solid-state";


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const store = createStore({ tabValue: "wifi", language: "en" })

  return <div className="App">
    <ThemeProvider theme={darkTheme}>
      <HeaderBar />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1, order: 1 }}>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="settings" element={<SettingsPage store={store} />} />
          </Routes>
        </Box>
        <NavigateComponent store={store} />
      </Box>
    </ThemeProvider>
  </div>
}
export default App
