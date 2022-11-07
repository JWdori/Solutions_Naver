import React from "react";
import {useNavigate} from "react-router-dom";

import Header from "../elements/Header";
import Progress from "../elements/Progress_test";

import q1 from "../images/test/q3.png"
import q2 from "../images/test/q4.png"
import q3 from "../images/test/q5.png"
import q4 from "../images/test/q6.png"
import q5 from "../images/test/q7.png"
import q6 from "../images/test/q8.png"
import q7 from "../images/test/q9.png"
import q8 from "../images/test/q10.png"
import q9 from "../images/test/q11.png"
import q10 from "../images/test/q12.png"
import q11 from "../images/test/q13.png"
import q12 from "../images/test/q14.png"
import q13 from "../images/test/q15.png"
import q14 from "../images/test/q16.png"


const Test = (props) => {
    const navigate = useNavigate();
    const [step, setStep] = React.useState(3);
    const [time, setTime] = React.useState(false);
    const questionImg = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12];
    const question =
        [
            "가입이 끝났다!\n바로 게임에 접속할까?",

            "먼저, 플레이할 캐릭터의\n 커스터마이칭을 해야한다.\n\n나는 . . .",


            "과금 아이템 광고가\n 눈에 들어온다.",

            "마을에 도착한 나는 ...",

            "갑자기 NPC가 말을 걸어왔다!",


            "[동료] 컨텐츠에 대해\n 알게 되었다!\n동료는 상점이나 퀘스트를 통해\n 수집 할 수 있다!",

            "이런!\n 패치로 때문에 기존에 사용하던\n 동료들의 능력치가 낮아졌다...",

            "우연히 이벤트에 당첨되어\n 보상으로 고급 뽑기권을 받았다!\n하나만 선택할 수 있다.",

            "...",

            "다시 과금 아이템 광고가\n 나타났다!",

            "점점\n 육성이 어렵고 지루해진다!",

            "드디어 만렙을 달성했다!\n 캐릭터도 충분히 강력하다!\n이제 나는. . ."
        ]
    const answerYes = [
        "장비에 돈을 쓰지 않는다. 파밍으로 직접 구한다.",
        "저주와 정신 마법을 막아주는 <고귀한 의지>",
        "용사 파티와 함께 던전으로 향한다.",
        "괴물을 먼저 공격해서 해치우고 던전에 들어간다.",
        "사냥과 채집을 통해 해결한다.\n" +
        "운이 좋다면 시간을 절약할 수 있을 것이다.",
        "[재미, 흥미]가 써져있는 길로 간다. ",
        "왕궁에 지금까지 상황과 정보를 공유한다.\n" +
        "왕은 당신을 더욱 지원할 수도 있다.",
        "골렘을 자세히 살펴본다",
        "(기어서 지나간다)",
        "선수필승! 공격한다!",
        "마지막 패턴을 대비하기 위해\n" +
        "스킬 <고귀한 의지>를 사용한다.",
        "응?",
        "맞다.",
        "흑염룡의 말에 관심을 가지고 경청한다."

    ];
    const answerNo = [
        "필요한 장비와 마법만 최소한으로 구매한다.",
        "적을 잠시 동안 구속시키는 <그림자 밟기>",
        "홀로 던전으로 향한다.",
        "인간이 아니라도 말이 통할 가능성이 있다.\n 괴물과 대화를 통해 길을 튼다.",
        "왕궁에 가서 보급품과 마법 도구를 다시 요청한다.\n" +
        "시간이 조금 걸릴 거 같다.",
        "[예술, 이야기]가 써져있는 길로 간다.",
        "전서구와 보물을 챙긴다.\n" +
        "판매한다면 좋은 값을 받을 것이다. ",
        "골렘을 파괴하기 위해 공격한다. ",
        "골렘을 무시하고 그냥 지나간다.",
        "전투에 앞서  주변 지형을 먼저 살핀다.",
        "보물상자에서 얻은 전설급 마법 스크롤\n" +
        "<메테오>를 사용한다."
        , null,
        "잘 모르겠다",
        "사악한 용의 사탕발린 속삭임이다! "
    ];
    const wid = [260, 220, 230, 155, 220, 210, 210, 145, 145, 230, 230, 230, 230, 230];
    const hei = [230, 220, 230, 215, 220, 175, 170, 180, 180, 230, 230, 230, 230, 230];
    //300 * 112 , 300 *240
    React.useEffect(() => {
        setTime(true);
    }, [time]);
    const onClick = (num) => {
        setTime(false);
        if (step < 13) setStep(step + 1);
        else if (step === 13) {  //16아님.
            navigate("/beforeResult")
        }
        // select[step] = num;
    };
    return (
        <>
            <Header isBack={true} step={step} setStep={setStep}/>
            <Progress width={300} percent={(step - 2.9) / 13}/>
            {time && (
                <div id="questionDiv">
                    {
                        <img
                            className="questionImg"
                            src={questionImg[step - 3]}
                            alt="img"
                            width={wid[step - 3]}
                            height={hei[step - 3]}
                        ></img>
                    }

                    {
                        step === 14 ?
                            <div className={"questionTxt"} style={{height: "240px", marginRight: "40px"}}>
                                {question[step - 3]}
                            </div> :
                            <div className={"questionTxt"} style={{height: "122px"}}>
                                {question[step - 3]}
                            </div>
                    }

                    <button
                        className="testAnswer"
                        onClick={() => {
                            onClick(1);
                        }}
                    >
                        {answerYes[step - 3]}
                    </button>
                    {
                        step !== 14 ?
                            <button
                                className="testAnswer"
                                onClick={() => {
                                    onClick(2);
                                }}
                            >
                                {answerNo[step - 3]}
                            </button> : null
                    }
                    {
                        step === 3 ?
                            <button className="testAnswer"
                                    onClick={() => {
                                        onClick(3);
                                    }}>
                                왕에게 거금을 내고 왕실 창고에서 랜덤으로<br/>
                                장비와 마법을 받는다.
                            </button> : null
                    }
                </div>
            )}
        </>
    );
};

export default Test;
