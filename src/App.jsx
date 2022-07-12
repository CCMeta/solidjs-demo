import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import './App.css';
import AboutPage from './p/About';
import NavigateComponent from './p/c/Navigate';
import DHCPPage from './p/DHCP';
import IndexPage from './p/Index';
import ProtectionPage from './p/Protection';
import SIMPage from './p/SIM';
import WiFiPage from './p/WiFi';
import DevicePage from './p/Device';

const App = () => {

  return <div className="App">

    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="wifi" element={<WiFiPage />} />
      <Route path="sim" element={<SIMPage />} />
      <Route path="dhcp" element={<DHCPPage />} />
      <Route path="protection" element={<ProtectionPage />} />
      <Route path="device" element={<DevicePage />} />
    </Routes>

    <NavigateComponent />
    <CssBaseline />

  </div>
}
export default App
