import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './Pages/MainPage/MainPage.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import {StrictMode} from "react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" index element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)