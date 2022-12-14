import React from "react";
import logo from "../images/logo.png";
import {Route, Link, useNavigate} from "react-router-dom";
import back from "../images/back.png";

const Header = (props) => {
    const {isBack} = props;
    const {setStep} = props;
    const {step} = props;
    const navigate = useNavigate();
    const handleOnClick = () => {
        if (isBack) {
            if (step !== 0) {
                setStep(step - 1);
                if (step === 3) {
                    navigate("/");
                }
            } else {
                navigate("/");
            }
        }
    };
    return (
        <>
            <div className="headerContainer">
                {isBack && (
                    <img
                        className="back"
                        src={back}
                        onClick={handleOnClick}
                        width="24px"
                        height="24px"
                        alt="img"
                    />
                )}
                <Link to="/">
                    <img
                        className="logo"
                        src={logo}
                        alt="img"
                        width="54px"
                        height="28px"
                        onClick={handleOnClick}
                    ></img>
                </Link>
            </div>
        </>
    );
};

export default Header;
