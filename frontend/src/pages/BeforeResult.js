import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../elements/Header";
import waiting from "../assets/loading.gif";
import axios from "axios";

const BeforeResult = (props) => {
        const navigate = useNavigate();
        const {state} = useLocation();
        const userId = state.userId;
        const userName = state.userName;
        const userGenre = state.userGenre;
        const userSelect = state.select;


        const getResult = () => {
            axios.post("http://localhost:5000/api/test/postTestArray", {
                user: {
                    userId: userId,
                    userName: userName
                },
                category: userGenre,
                result: userSelect
            })
                .then((res) => {
                    sessionStorage.setItem("data", JSON.stringify(res.data.data));
                    setTimeout(() => {
                        navigate("/result");
                    }, 3000);
                })
                .catch((error) => {
                    console.dir(error);
                });
        }
        React.useEffect(getResult, []);
        return (
            <>
                <Header isBack={false}/>
                <div className="h3Container">
                    <h3 className="resultH3">결과를 분석하고 있어요</h3>
                    <img src={waiting} width="100px" height="100px" alt="img"style={{marginTop:"40px"}}/>
                </div>
            </>
        );
    }
;

export default BeforeResult;
