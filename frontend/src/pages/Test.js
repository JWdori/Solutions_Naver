import React from "react";
import {useNavigate} from "react-router-dom";
import main from "../images/main.png"
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
    const questionImg = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14];
    const question =
        [
            "“자 그럼 먼저 장비부터 해결하지. \n" +
            "돈이 없다고? 이곳에서도 자네 계좌에 있는\n 돈을 쓸 수 있다네.”",

            "“그럼 이번엔 짐이 왕가 대대로 내려오는 \n" +
            "유니크 스킬을 하나 부여해주지! \n" +
            "자, 선택하게.”",

            "“좋은 선택이네. 이제 바로 출발하지.\n" +
            "그리고 듣기론, 용사를 기다리는 용사 파티가 \n" +
            "있다던데... 참고하게나.”",

            "당신은 흑염룡이 잠들어있는 던전의 입구\n까지 도착했습니다. 하지만 사람 형체의\n 괴물이 입구를 막고 있네요.",

            "아니 이걸!\n" +
            "세상에, 당신은 왕궁에서 받은 보급품과\n 마법 도구를 잃어버렸습니다!",

            "이제 갈림길에 도달했습니다. \n" +
            "표지판에는 단어가 쓰여 있네요.\n" +
            "갈림길 모두 같은 곳을 향합니다.",

            "보물이다!\n당신은 왕궁과 연락할 수 있는 전서구와\n 많은 보물들을 발견했습니다.",

            "저건! 용을 지키는 가디언, 골렘입니다!\n 하지만 지금은 움직이지 않는 것 같네요.",

            "“낯선이여...\n길을 열어주지. 대신 닭 소리를 내면서\n 오리 걸음으로 지나가야한다. ”",

            "“미개한 것들이 허락도 없이 내 둥지에 \n" +
            "발을 들이느냐!”\n" +
            "갑작스레 흑염룡과의 전투가 시작됐습니다!",

            "“아닛...! 그렇다면...!”\n" +
            "흑염룡이 생각보다 많이 약하네요.\n" +
            "벌써 힘이 다한 것 같습니다.",

            "“잠깐잠깐...! 또 나한테...\n" +
            "너 이번에 왕국에 새로 온 용사지?\n" +
            "\n" +


            "너는 착각하고 있는 거다,\n" +
            "내 말을 들어보라고!”",
            "너를 이곳에 보낸 사람!\n" +
            "가르반 3세 국왕이지?\n" +

            "선택에 따라 세계의 운명이...어쩌구 그러면서",
            "아무튼! 나는 그냥 잠만 잤다고! 왕국의 인간들은\n 탐욕에 눈이 멀어 내 핑계를 대면서 \n" +
            "자신들의 배를 불리고 있지!  "
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
        "(오리 걸음으로 지나가며) 꼬끼오...꼬꼬꼬...",
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
        if (step < 16) setStep(step + 1);
        else if (step === 16) {
            navigate("/beforeResult")
        }
        // select[step] = num;
    };
    return (
        <>
            <Header isBack={true} step={step} setStep={setStep}/>
            <Progress width={300} percent={step / 13}/>
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
