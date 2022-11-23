import React from "react";
import Header from "../elements/Header";
import sliverCrown from "../images/crown2.png";
import goldCrown from "../images/crown1.png";
import copperCrown from "../images/crown3.png";
import Slider from "../elements/Slider";
import good from "../images/good_gray.png";
import ScrollRestoration from "../elements/ScrollRestoration";
import axios from "axios";


const GameRanking = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [type, setType] = React.useState(null);
    const [all, setAll] = React.useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [step, setStep] = React.useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const getRateGame = async () => {
        await axios.get("http://118.67.143.133/api/view/getRateGameByType", {})
            .then((res) => {
                //이게 유형별 10개 인기게임
                setType(res);
                console.log(res)
            })
            .catch((error) => {
                console.dir(error);
            });
    }

    const getTop3Game = async () => {
        await axios.get("http://118.67.143.133/api/view/getRateGameTop3", {})
            .then((res) => {
                //이게 유형별 상관없이 top3
                setAll(res);
                console.log(res)
            })
            .catch((error) => {
                console.dir(error);
            });
    }

    React.useEffect(()=> {
        getRateGame();
        getTop3Game();

    }, []);
    return (
        <>
            <ScrollRestoration></ScrollRestoration>
            <Header isBack={true} step={step} setStep={setStep}/>
            <div className={"similarGame"} style={{marginTop: "28px"}}>
                <div className={"gameRating"}>
                    <img
                        className="crown"
                        src={sliverCrown}
                        alt="sliverCrown"
                        width="47px"
                        height="42.28px"
                    ></img>
                    <a href={all?.data[1]?.url} target="_blank">
                        <img
                            className="gameRanking"
                            src={all?.data[1]?.icon}
                            alt="ranking1"
                            width="80px"
                            height="80px"
                            style={{
                                cursor: "pointer"
                            }}
                        ></img>
                    </a>

                    <div className="rankingName" style={{fontSize: "11px", marginTop: "8px", marginBottom: "2px"}}>{all?.data[1]?.title}
                    </div>
                    <div className={"rankingScore"} style={{fontSize: "12px"}}>
                        <img
                            className="rankingDdabong"
                            src={good}
                            style={{marginBottom: "2px", marginRight: "4px"}}
                            alt="img"
                            width={"18px"}
                            height={"18px"}
                        ></img>
                        {all?.data[1]?.w2pStar}

                    </div>
                </div>


                <div className={"gameRating"}>

                    <img
                        className="crown"
                        src={goldCrown}
                        alt="sliverCrown"
                        width="47px"
                        height="42.28px"
                        style={{}}
                    ></img>
                    <a href={all?.data[0]?.url} target="_blank">
                        <img
                            className="gameRanking"
                            src={all?.data[0]?.icon}
                            alt="ranking1"
                            width="104px"
                            height="104px"
                            style={{
                                cursor: "pointer"
                            }}
                        ></img>
                    </a>


                    <div className="rankingName"
                         style={{fontSize: "11px", marginTop: "8px", marginBottom: "2px", marginLeft: "14px"}}>{all?.data[0]?.title}
                    </div>
                    <div className={"rankingScore"} style={{fontSize: "12px"}}>
                        <img
                            className="rankingDdabong"
                            src={good}
                            style={{marginBottom: "2px", marginRight: "4px"}}
                            alt="img"
                            width={"18px"}
                            height={"18px"}
                        ></img>
                        {all?.data[0].w2pStar}
                    </div>
                </div>
                <div className={"gameRating"}>
                    <img
                        className="crown"
                        src={copperCrown}
                        alt="sliverCrown"
                        width="47px"
                        height="42.28px"
                        style={{}}
                    ></img>
                    <a href={all?.data[2]?.url} target="_blank">
                        <img
                            className="gameRanking"
                            src={all?.data[2]?.icon}
                            alt="ranking3"
                            width="80px"
                            height="80px"
                            style={{
                                cursor: "pointer"
                            }}
                        ></img>
                    </a>
                    <div className="rankingName" style={{fontSize: "11px", marginTop: "8px", marginBottom: "2px"}}>{all?.data[2]?.title}
                    </div>
                    <div className={"rankingScore"} style={{fontSize: "12px"}}>
                        <img
                            className="rankingDdabong"
                            src={good}
                            style={{marginBottom: "2px", marginRight: "4px"}}
                            alt="img"
                            width={"18px"}
                            height={"18px"}
                        ></img>
                        {all?.data[2]?.w2pStar}
                    </div>
                </div>

            </div>

            <div className={"type1"}>
                <div className={"rankingtypedecs"}>후회하는 오프트래너</div>
                <div className={"rankingslidebox"}>
                    <Slider name1={type?.data[0].app[0].title} name2={type?.data[0].app[1].title} name3={type?.data[0].app[2].title} name4={type?.data[0].app[3].title} name5={type?.data[0].app[4].title} name6={type?.data[0].app[5].title} name7={type?.data[0].app[6].title} name8={type?.data[0].app[7].title} name9={type?.data[0].app[8].title} name10={type?.data[0].app[9].title}
                            score1={type?.data[0].app[0].w2pStar} score2={type?.data[0].app[1].w2pStar} score3={type?.data[0].app[2].w2pStar} score4={type?.data[0].app[3].w2pStar}score5={type?.data[0].app[4].w2pStar} score6={type?.data[0].app[5].w2pStar} score7={type?.data[0].app[6].w2pStar} score8={type?.data[0].app[7].w2pStar} score9={type?.data[0].app[8].w2pStar} score10={type?.data[0].app[9].w2pStar}
                            img1={type?.data[0].app[0].icon} img2={type?.data[0].app[1].icon} img3={type?.data[0].app[2].icon} img4={type?.data[0].app[3].icon} img5={type?.data[0].app[4].icon} img6={type?.data[0].app[5].icon} img7={type?.data[0].app[6].icon} img8={type?.data[0].app[7].icon} img9={type?.data[0].app[8].icon} img10={type?.data[0].app[9].icon}
                            link1={type?.data[0].app[0].url} link2={type?.data[0].app[1].url} link3={type?.data[0].app[2].url} link4={type?.data[0].app[3].url} link5={type?.data[0].app[4].url} link6={type?.data[0].app[5].url} link7={type?.data[0].app[6].url} link8={type?.data[0].app[7].url} link9={type?.data[0].app[8].url} link10={type?.data[0].app[9].url}>
                    </Slider>
                    </div>
            </div>

            <div className={"type2"}>
                <div className={"rankingtypedecs"}>기대치 높은 무과금</div>
                <div className={"rankingslidebox"}>
                    <Slider name1={type?.data[1].app[0].title} name2={type?.data[1].app[1].title} name3={type?.data[1].app[2].title} name4={type?.data[1].app[3].title} name5={type?.data[1].app[4].title} name6={type?.data[1].app[5].title} name7={type?.data[1].app[6].title} name8={type?.data[1].app[7].title} name9={type?.data[1].app[8].title} name10={type?.data[1].app[9].title}
                            score1={type?.data[1].app[0].w2pStar} score2={type?.data[1].app[1].w2pStar} score3={type?.data[1].app[2].w2pStar} score4={type?.data[1].app[3].w2pStar}score5={type?.data[1].app[4].w2pStar} score6={type?.data[1].app[5].w2pStar} score7={type?.data[1].app[6].w2pStar} score8={type?.data[1].app[7].w2pStar} score9={type?.data[1].app[8].w2pStar} score10={type?.data[1].app[9].w2pStar}
                            img1={type?.data[1].app[0].icon} img2={type?.data[1].app[1].icon} img3={type?.data[1].app[2].icon} img4={type?.data[1].app[3].icon} img5={type?.data[1].app[4].icon} img6={type?.data[1].app[5].icon} img7={type?.data[1].app[6].icon} img8={type?.data[1].app[7].icon} img9={type?.data[1].app[8].icon} img10={type?.data[1].app[9].icon}
                            link1={type?.data[1].app[0].url} link2={type?.data[1].app[1].url} link3={type?.data[1].app[2].url} link4={type?.data[1].app[3].url} link5={type?.data[1].app[4].url} link6={type?.data[1].app[5].url} link7={type?.data[1].app[6].url} link8={type?.data[1].app[7].url} link9={type?.data[1].app[8].url} link10={type?.data[1].app[9].url}>
                    </Slider>
                </div>
            </div>

            <div className={"type3"}>
                <div className={"rankingtypedecs"}>폭풍성장</div>
                <div className={"rankingslidebox"}>
                    <Slider name1={type?.data[2].app[0].title} name2={type?.data[2].app[1].title} name3={type?.data[2].app[2].title} name4={type?.data[2].app[3].title} name5={type?.data[2].app[4].title} name6={type?.data[2].app[5].title} name7={type?.data[2].app[6].title} name8={type?.data[2].app[7].title} name9={type?.data[2].app[8].title} name10={type?.data[2].app[9].title}
                            score1={type?.data[2].app[0].w2pStar} score2={type?.data[2].app[1].w2pStar} score3={type?.data[2].app[2].w2pStar} score4={type?.data[2].app[3].w2pStar}score5={type?.data[2].app[4].w2pStar} score6={type?.data[2].app[5].w2pStar} score7={type?.data[2].app[6].w2pStar} score8={type?.data[2].app[7].w2pStar} score9={type?.data[2].app[8].w2pStar} score10={type?.data[2].app[9].w2pStar}
                            img1={type?.data[2].app[0].icon} img2={type?.data[2].app[1].icon} img3={type?.data[2].app[2].icon} img4={type?.data[2].app[3].icon} img5={type?.data[2].app[4].icon} img6={type?.data[2].app[5].icon} img7={type?.data[2].app[6].icon} img8={type?.data[2].app[7].icon} img9={type?.data[2].app[8].icon} img10={type?.data[2].app[9].icon}
                            link1={type?.data[2].app[0].url} link2={type?.data[2].app[1].url} link3={type?.data[2].app[2].url} link4={type?.data[2].app[3].url} link5={type?.data[2].app[4].url} link6={type?.data[2].app[5].url} link7={type?.data[2].app[6].url} link8={type?.data[2].app[7].url} link9={type?.data[2].app[8].url} link10={type?.data[2].app[9].url}> </Slider>

                </div>
            </div>

            <div className={"type4"}>
                <div className={"rankingtypedecs"}>패션 아이템 선호</div>
                <div className={"rankingslidebox"}>
                    <Slider name1={type?.data[3].app[0].title} name2={type?.data[3].app[1].title} name3={type?.data[3].app[2].title} name4={type?.data[3].app[3].title} name5={type?.data[3].app[4].title} name6={type?.data[3].app[5].title} name7={type?.data[3].app[6].title} name8={type?.data[3].app[7].title} name9={type?.data[3].app[8].title} name10={type?.data[3].app[9].title}
                            score1={type?.data[3].app[0].w2pStar} score2={type?.data[3].app[1].w2pStar} score3={type?.data[3].app[2].w2pStar} score4={type?.data[3].app[3].w2pStar}score5={type?.data[3].app[4].w2pStar} score6={type?.data[3].app[5].w2pStar} score7={type?.data[3].app[6].w2pStar} score8={type?.data[3].app[7].w2pStar} score9={type?.data[3].app[8].w2pStar} score10={type?.data[3].app[9].w2pStar}
                            img1={type?.data[3].app[0].icon} img2={type?.data[3].app[1].icon} img3={type?.data[3].app[2].icon} img4={type?.data[3].app[3].icon} img5={type?.data[3].app[4].icon} img6={type?.data[3].app[5].icon} img7={type?.data[3].app[6].icon} img8={type?.data[3].app[7].icon} img9={type?.data[3].app[8].icon} img10={type?.data[3].app[9].icon}
                            link1={type?.data[3].app[0].url} link2={type?.data[3].app[1].url} link3={type?.data[3].app[2].url} link4={type?.data[3].app[3].url} link5={type?.data[3].app[4].url} link6={type?.data[3].app[5].url} link7={type?.data[3].app[6].url} link8={type?.data[3].app[7].url} link9={type?.data[3].app[8].url} link10={type?.data[3].app[9].url}>
                    </Slider>
                </div>
            </div>

            <div className={"type5"}>
                <div className={"rankingtypedecs"}>고래</div>
                <div className={"rankingslidebox"}>
                    <Slider name1={type?.data[4].app[0].title} name2={type?.data[4].app[1].title} name3={type?.data[4].app[2].title} name4={type?.data[4].app[3].title} name5={type?.data[4].app[4].title} name6={type?.data[4].app[5].title} name7={type?.data[4].app[6].title} name8={type?.data[4].app[7].title} name9={type?.data[4].app[8].title} name10={type?.data[4].app[9].title}
                            score1={type?.data[4].app[0].w2pStar} score2={type?.data[4].app[1].w2pStar} score3={type?.data[4].app[2].w2pStar} score4={type?.data[4].app[3].w2pStar}score5={type?.data[4].app[4].w2pStar} score6={type?.data[4].app[5].w2pStar} score7={type?.data[4].app[6].w2pStar} score8={type?.data[4].app[7].w2pStar} score9={type?.data[4].app[8].w2pStar} score10={type?.data[4].app[9].w2pStar}
                            img1={type?.data[4].app[0].icon} img2={type?.data[4].app[1].icon} img3={type?.data[4].app[2].icon} img4={type?.data[4].app[3].icon} img5={type?.data[4].app[4].icon} img6={type?.data[4].app[5].icon} img7={type?.data[4].app[6].icon} img8={type?.data[4].app[7].icon} img9={type?.data[4].app[8].icon} img10={type?.data[4].app[9].icon}
                            link1={type?.data[4].app[0].url} link2={type?.data[4].app[1].url} link3={type?.data[4].app[2].url} link4={type?.data[4].app[3].url} link5={type?.data[4].app[4].url} link6={type?.data[4].app[5].url} link7={type?.data[4].app[6].url} link8={type?.data[4].app[7].url} link9={type?.data[4].app[8].url} link10={type?.data[4].app[9].url}> </Slider>

                </div>
            </div>

            <div className={"type6"}>
                <div className={"rankingtypedecs"}>공략 따라쟁이</div>
                <div className={"rankingslidebox"}>
                    <Slider name1={type?.data[5].app[0].title} name2={type?.data[5].app[1].title} name3={type?.data[5].app[2].title} name4={type?.data[5].app[3].title} name5={type?.data[5].app[4].title} name6={type?.data[5].app[5].title} name7={type?.data[5].app[6].title} name8={type?.data[5].app[7].title} name9={type?.data[5].app[8].title} name10={type?.data[5].app[9].title}
                            score1={type?.data[5].app[0].w2pStar} score2={type?.data[5].app[1].w2pStar} score3={type?.data[5].app[2].w2pStar} score4={type?.data[5].app[3].w2pStar}score5={type?.data[5].app[4].w2pStar} score6={type?.data[5].app[5].w2pStar} score7={type?.data[5].app[6].w2pStar} score8={type?.data[5].app[7].w2pStar} score9={type?.data[5].app[8].w2pStar} score10={type?.data[5].app[9].w2pStar}
                            img1={type?.data[5].app[0].icon} img2={type?.data[5].app[1].icon} img3={type?.data[5].app[2].icon} img4={type?.data[5].app[3].icon} img5={type?.data[5].app[4].icon} img6={type?.data[5].app[5].icon} img7={type?.data[5].app[6].icon} img8={type?.data[5].app[7].icon} img9={type?.data[5].app[8].icon} img10={type?.data[5].app[9].icon}
                            link1={type?.data[5].app[0].url} link2={type?.data[5].app[1].url} link3={type?.data[5].app[2].url} link4={type?.data[5].app[3].url} link5={type?.data[5].app[4].url} link6={type?.data[5].app[5].url} link7={type?.data[5].app[6].url} link8={type?.data[5].app[7].url} link9={type?.data[5].app[8].url} link10={type?.data[5].app[9].url}> </Slider>

                </div>
            </div>

            <div className={"type7"}>
                <div className={"rankingtypedecs"}>언더독 키우기</div>
                <div className={"rankingslidebox"}>
                    <Slider name1={type?.data[6].app[0].title} name2={type?.data[6].app[1].title} name3={type?.data[6].app[2].title} name4={type?.data[6].app[3].title} name5={type?.data[6].app[4].title} name6={type?.data[6].app[5].title} name7={type?.data[6].app[6].title} name8={type?.data[6].app[7].title} name9={type?.data[6].app[8].title} name10={type?.data[6].app[9].title}
                            score1={type?.data[6].app[0].w2pStar} score2={type?.data[6].app[1].w2pStar} score3={type?.data[6].app[2].w2pStar} score4={type?.data[6].app[3].w2pStar}score5={type?.data[6].app[4].w2pStar} score6={type?.data[6].app[5].w2pStar} score7={type?.data[6].app[6].w2pStar} score8={type?.data[6].app[7].w2pStar} score9={type?.data[6].app[8].w2pStar} score10={type?.data[6].app[9].w2pStar}
                            img1={type?.data[6].app[0].icon} img2={type?.data[6].app[1].icon} img3={type?.data[6].app[2].icon} img4={type?.data[6].app[3].icon} img5={type?.data[6].app[4].icon} img6={type?.data[6].app[5].icon} img7={type?.data[6].app[6].icon} img8={type?.data[6].app[7].icon} img9={type?.data[6].app[8].icon} img10={type?.data[6].app[9].icon}
                            link1={type?.data[6].app[0].url} link2={type?.data[6].app[1].url} link3={type?.data[6].app[2].url} link4={type?.data[6].app[3].url} link5={type?.data[6].app[4].url} link6={type?.data[6].app[5].url} link7={type?.data[6].app[6].url} link8={type?.data[6].app[7].url} link9={type?.data[6].app[8].url} link10={type?.data[6].app[9].url}> </Slider>
                </div>
            </div>

            <div className={"type8"}>
                <div className={"rankingtypedecs"}>익숙함 선호</div>
                <div className={"rankingslidebox"}>
                    <Slider name1={type?.data[7].app[0].title} name2={type?.data[7].app[1].title} name3={type?.data[7].app[2].title} name4={type?.data[7].app[3].title} name5={type?.data[7].app[4].title} name6={type?.data[7].app[5].title} name7={type?.data[7].app[6].title} name8={type?.data[7].app[7].title} name9={type?.data[7].app[8].title} name10={type?.data[7].app[9].title}
                            score1={type?.data[7].app[0].w2pStar} score2={type?.data[7].app[1].w2pStar} score3={type?.data[7].app[2].w2pStar} score4={type?.data[7].app[3].w2pStar}score5={type?.data[7].app[4].w2pStar} score6={type?.data[7].app[5].w2pStar} score7={type?.data[7].app[6].w2pStar} score8={type?.data[7].app[7].w2pStar} score9={type?.data[7].app[8].w2pStar} score10={type?.data[7].app[9].w2pStar}
                            img1={type?.data[7].app[0].icon} img2={type?.data[7].app[1].icon} img3={type?.data[7].app[2].icon} img4={type?.data[7].app[3].icon} img5={type?.data[7].app[4].icon} img6={type?.data[7].app[5].icon} img7={type?.data[7].app[6].icon} img8={type?.data[7].app[7].icon} img9={type?.data[7].app[8].icon} img10={type?.data[7].app[9].icon}
                            link1={type?.data[7].app[0].url} link2={type?.data[7].app[1].url} link3={type?.data[7].app[2].url} link4={type?.data[7].app[3].url} link5={type?.data[7].app[4].url} link6={type?.data[7].app[5].url} link7={type?.data[7].app[6].url} link8={type?.data[7].app[7].url} link9={type?.data[7].app[8].url} link10={type?.data[7].app[9].url}> </Slider>
                </div>
            </div>

            <div className={"type9"}>
                <div className={"rankingtypedecs"}>수집가</div>
                <div className={"rankingslidebox"}>
                    <Slider name1={type?.data[8].app[0].title} name2={type?.data[8].app[1].title} name3={type?.data[8].app[2].title} name4={type?.data[8].app[3].title} name5={type?.data[8].app[4].title} name6={type?.data[8].app[5].title} name7={type?.data[8].app[6].title} name8={type?.data[8].app[7].title} name9={type?.data[8].app[8].title} name10={type?.data[8].app[9].title}
                            score1={type?.data[8].app[0].w2pStar} score2={type?.data[8].app[1].w2pStar} score3={type?.data[8].app[2].w2pStar} score4={type?.data[8].app[3].w2pStar}score5={type?.data[8].app[4].w2pStar} score6={type?.data[8].app[5].w2pStar} score7={type?.data[8].app[6].w2pStar} score8={type?.data[8].app[7].w2pStar} score9={type?.data[8].app[8].w2pStar} score10={type?.data[8].app[9].w2pStar}
                            img1={type?.data[8].app[0].icon} img2={type?.data[8].app[1].icon} img3={type?.data[8].app[2].icon} img4={type?.data[8].app[3].icon} img5={type?.data[8].app[4].icon} img6={type?.data[8].app[5].icon} img7={type?.data[8].app[6].icon} img8={type?.data[8].app[7].icon} img9={type?.data[8].app[8].icon} img10={type?.data[8].app[9].icon}
                            link1={type?.data[8].app[0].url} link2={type?.data[8].app[1].url} link3={type?.data[8].app[2].url} link4={type?.data[8].app[3].url} link5={type?.data[8].app[4].url} link6={type?.data[8].app[5].url} link7={type?.data[8].app[6].url} link8={type?.data[8].app[7].url} link9={type?.data[8].app[8].url} link10={type?.data[8].app[9].url}>
                    </Slider>
                </div>
            </div>

            <div className={"type10"} style={{marginBottom: "60px"}}>
                <div className={"rankingtypedecs"}>처음부터 PvP</div>
                <div className={"rankingslidebox"}>
                    <Slider name1={type?.data[9].app[0].title} name2={type?.data[9].app[1].title} name3={type?.data[9].app[2].title} name4={type?.data[9].app[3].title} name5={type?.data[9].app[4].title} name6={type?.data[9].app[5].title} name7={type?.data[9].app[6].title} name8={type?.data[9].app[7].title} name9={type?.data[9].app[8].title} name10={type?.data[9].app[9].title}
                            score1={type?.data[9].app[0].w2pStar} score2={type?.data[9].app[1].w2pStar} score3={type?.data[9].app[2].w2pStar} score4={type?.data[9].app[3].w2pStar}score5={type?.data[9].app[4].w2pStar} score6={type?.data[9].app[5].w2pStar} score7={type?.data[9].app[6].w2pStar} score8={type?.data[9].app[7].w2pStar} score9={type?.data[9].app[8].w2pStar} score10={type?.data[9].app[9].w2pStar}
                            img1={type?.data[9].app[0].icon} img2={type?.data[9].app[1].icon} img3={type?.data[9].app[2].icon} img4={type?.data[9].app[3].icon} img5={type?.data[9].app[4].icon} img6={type?.data[9].app[5].icon} img7={type?.data[9].app[6].icon} img8={type?.data[9].app[7].icon} img9={type?.data[9].app[8].icon} img10={type?.data[9].app[9].icon}
                            link1={type?.data[9].app[0].url} link2={type?.data[9].app[1].url} link3={type?.data[9].app[2].url} link4={type?.data[9].app[3].url} link5={type?.data[9].app[4].url} link6={type?.data[9].app[5].url} link7={type?.data[9].app[6].url} link8={type?.data[9].app[7].url} link9={type?.data[9].app[8].url} link10={type?.data[9].app[9].url}>
                    </Slider>
                </div>
            </div>

        </>
    );
};

export default GameRanking;
