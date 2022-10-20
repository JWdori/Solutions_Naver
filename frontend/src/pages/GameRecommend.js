import React from "react";
import Header from "../elements/Header";
import ProgressRec from "../elements/Progress_rec";
import type1 from "../images/type1.png"

const GameRecommend = (props) => {

    const [step, setStep] = React.useState(0);
    return (
        <>
            <Header isBack={false}/>
            <ProgressRec width={"300px"} step={step}/>

            <div className={"recGame"}>
                <img
                    className="recGameImg"
                    src={type1}
                    alt="img"
                    width={"300px"}
                    height={"165px"}
                ></img>
                <div className={"recGameDesc"}>
                    - 한국밈 피하기 -
                    <span>
                        정시넝ㅄ이 나오는 패턴을 피해서 최고점수에 도달하라!
                    </span>
                </div>
            </div>
        </>
    );
};

export default GameRecommend;
