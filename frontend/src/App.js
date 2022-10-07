import React from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import "./style.css";

import Home from "./pages/Home";
import Header from "./elements/Header";
import Loading from "./pages/Loading";
import Test from "./pages/Test"
import recgogo from "./elements/Popup_rec_gogo";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Home/>} path={"/"}/>
                    <Route element={<recgogo/>} path={"/recgogo"}/>
                    <Route element={<Test/>} path={"/test"}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
