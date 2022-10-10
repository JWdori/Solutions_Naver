import React from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import "./style.css";

import Home from "./pages/Home";
import Header from "./elements/Header";
import Loading from "./pages/Loading";
import Test from "./pages/Test"
import Result from "./pages/Result"
import Tutorial from "./pages/Tutorial"


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Home/>} path={"/"}/>
                    <Route element={<Loading/>} path={"/loading"}/>
                    <Route element={<Test/>} path={"/test"}/>
                    <Route element={<Result/>} path={"/result"}/>
                    <Route element={<Tutorial/>} path={"/tutorial"}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
