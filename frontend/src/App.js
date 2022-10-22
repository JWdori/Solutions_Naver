import React from "react";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import "./style.css";

import Home from "./pages/Home";
import Header from "./elements/Header";
import Loading from "./pages/Loading";
import Test from "./pages/Test"
import Result from "./pages/Result"
import Tutorial from "./pages/Tutorial"
import BeforeResult from "./pages/BeforeResult"
import GameRecommend from "./pages/GameRecommend";
import Score from "./elements/Score";
import ScorePage from "./elements/ScorePage";


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
                    <Route element={<BeforeResult/>} path={"/beforeResult"}/>
                    <Route element={<GameRecommend/>} path={"/recommend"}/>
                    <Route element={<Score/>} path={"/score"}/>
                    <Route element={<ScorePage/>} path={"/scorepage"}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
