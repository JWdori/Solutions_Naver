import React from "react";
import {useNavigate} from "react-router-dom";
import main from "../images/main.png"
import Header from "../elements/Header";
import Progress from "../elements/Progress_test";
import q1 from "../images/test/q1.png"
import q2 from "../images/test/q2.png"
import q3 from "../images/test/q3.png"
import q4 from "../images/test/q3.png"
import q5 from "../images/test/q5.png"
import q6 from "../images/test/q6.png"
import q7 from "../images/test/q7.png"
import q8 from "../images/test/q8.png"
import q9 from "../images/test/q9.png"
import q10 from "../images/test/q10.png"
import q11 from "../images/test/q11.png"
import q12 from "../images/test/q12.png"
import q13 from "../images/test/q13.png"
import q14 from "../images/test/q14.png"


const Test = (props) => {
    const navigate = useNavigate();
    const [step, setStep] = React.useState(0);
    const [time, setTime] = React.useState(false);
    const questionImg = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14];
    const question =
        [
            "“자 그럼 먼저 장비부터 해결하지. \n" +
            "돈이 없다고? 이곳에서도 자네 계좌에 있는 돈을 쓸 수 있다네.”",
            "“그럼 이번엔 짐이 왕가 대대로 내려오는 \n" +
            "유니크 스킬을 하나 부여해주지! \n" +
            "자, 선택하게.”",
            "“좋은 선택이네. 이제 바로 출발하지.\n" +
            "그리고 듣기론, 용사를 기다리는 용사 파티가 \n" +
            "있다던데... 참고하게나.”",
            "당신은 흑염룡이 잠들어있는 던전의 입구까지 도착했습니다. 하지만 사람 형체의 괴물이 입구를 막고 있네요.",
            "아니 이걸!\n" +
            "세상에, 당신은 왕궁에서 받은 보급품과 마법 도구를 잃어버렸습니다!",
            "이제 갈림길에 도달했습니다. \n" +
            "표지판에는 단어가 쓰여 있네요.\n" +
            "갈림길 모두 같은 곳을 향합니다.",
            "이제 갈림길에 도달했습니다. \n" +
            "표지판에는 단어가 쓰여 있네요.\n" +
            "갈림길 모두 같은 곳을 향합니다.",
            "저건! 용을 지키는 가디언, 골렘입니다! 하지만 지금은 움직이지 않는 것 같네요.",
            "“길을 열어주지. 대신 닭 소리를 내면서 오리 걸음으로 지나가야한다. ”",
            "“미개한 것들이 허락도 없이 내 둥지에 \n" +
            "발을 들이느냐!”\n" +
            "흑염룡이 잠에서 깨어났습니다!",
            "“아닛...! 그렇다면...!”\n" +
            "흑염룡이 생각보다 많이 약하네요.\n" +
            "벌써 힘이 다한 것 같습니다.",
            "“잠깐잠깐...! 또 나한테...\n" +
            "너 이번에 왕국에 새로 온 용사지?\n" +
            "\n" +
            "너는 착각하고 있는 거다,\n" +
            "이번엔 날 좀 도와달라고!”",
            "“잠깐잠깐...! 또 나한테...\n" +
            "너 이번에 왕국에 새로 온 용사지?\n" +
            "\n" +
            "너는 착각하고 있는 거다,\n" +
            "이번엔 날 좀 도와달라고!”",
            "“잠깐잠깐...! 또 나한테...\n" +
            "너 이번에 왕국에 새로 온 용사지?\n" +
            "\n" +
            "너는 착각하고 있는 거다,\n" +
            "이번엔 날 좀 도와달라고!”",
        ]
    const answerYes = [1,2,3,4,5,6,7,8,9,10];
    const answerNo = [];
    const wid = [260, 220, 230, 155, 220, 210, 210, 145, 145, 230, 230, 230, 230, 230];
    const hei = [230, 220, 230, 215, 220, 175, 170, 180, 180, 230, 230, 230, 230, 230];
    //300 * 112 , 300 *240
    React.useEffect(() => {
        setTime(true);
    }, [time]);
    const onClick = (num) => {
        setTime(false);
        if (step < 13) setStep(step + 1);
        else if (step === 13) {
            navigate("/result")
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
                            src={questionImg[step]}
                            alt="img"
                            width={wid[step]}
                            height={hei[step]}
                        ></img>
                    }
                    {
                        step == 12 ?
                            <div className={"questionTxt"} style={{height: "240px"}}>
                                {question[step]}
                            </div> :
                            <div className={"questionTxt"} style={{height: "122px"}}>
                                {question[step]}
                            </div>

                    }
                    <button
                        className="testAnswer"
                        onClick={() => {
                            onClick(1);
                        }}
                    >
                        {answerYes[step]}
                    </button>
                    <button
                        className="testAnswer"
                        onClick={() => {
                            onClick(0);
                        }}
                    >
                        {answerNo[step]}
                    </button>
                </div>
            )}
        </>
    );
};

export default Test;
