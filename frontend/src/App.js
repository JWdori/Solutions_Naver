import React from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import "./style.css";

import Home from "./pages/Home";
import Header from "./elements/Header";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Header/>} path={"/"}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
