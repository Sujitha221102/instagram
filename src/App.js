import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";
import Protect from "./customHook/Protect";

function App() {
  return (
    <Box className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Protect />}>
            <Route index element={<Main />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
