import React from "react";
import Header from "../elements/Header";
import ProgressRec from "../elements/Progress_rec";


const GameRecommend = (props) => {

    const [step, setStep] = React.useState(0);
    return (
        <>
            <Header isBack={false}/>
            <ProgressRec width={300} step={step}/>
        </>
    );
};

export default GameRecommend;
