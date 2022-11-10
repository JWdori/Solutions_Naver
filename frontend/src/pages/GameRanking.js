import React from "react";
import {useNavigate} from "react-router-dom";

import Header from "../elements/Header";
import sliverCrown from "../images/crown2.png";
import r1 from "../images/ranking1.png";
import goldCrown from "../images/crown1.png";
import r2 from "../images/ranking2.png";
import copperCrown from "../images/crown3.png";
import r3 from "../images/ranking3.png";
import NOM from "../elements/RankingSlide/NOM"


const gameranking = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [step, setStep] = React.useState(0);
    return (
        <>
            <Header isBack={true} step={step} setStep={setStep}/>
            <div className={"similarGame"} style={{marginTop:"28px"}}>
                <div className={"gameRating"}>
                    <img
                        className="crown"
                        src={sliverCrown}
                        alt="sliverCrown"
                        width="47px"
                        height="42.28px"
                    ></img>
                    <a href={"https://play.google.com/store/apps/details?id=com.mojang.minecraftpe"} target="_blank">
                    <img
                        className="gameRanking"
                        src={r1}
                        alt="ranking1"
                        width="80px"
                        height="80px"
                        style={{cursor:"pointer"
                        }}
                    ></img>
                        </a>
                </div>



                <div className={"gameRating"}>

                    <img
                        className="crown"
                        src={goldCrown}
                        alt="sliverCrown"
                        width="47px"
                        height="42.28px"
                        style={{
                        }}
                    ></img>
                    <a href={"https://play.google.com/store/apps/details?id=com.hidea.cat"} target="_blank">
                    <img
                        className="gameRanking"
                        src={r2}
                        alt="ranking1"
                        width="104px"
                        height="104px"
                        style={{cursor:"pointer"
                        }}
                    ></img>
                    </a>
                </div>
                <div className={"gameRating"}>
                    <img
                        className="crown"
                        src={copperCrown}
                        alt="sliverCrown"
                        width="47px"
                        height="42.28px"
                        style={{
                        }}
                    ></img>
                    <a href={"https://play.google.com/store/apps/details?id=com.stove.epic7.google"} target="_blank">
                    <img
                        className="gameRanking"
                        src={r3}
                        alt="ranking3"
                        width="80px"
                        height="80px"
                        style={{cursor:"pointer"
                        }}
                    ></img>
                        </a>
                </div>
            </div>

            <div className={"type1"}>
                <div className={"rankingtypedecs"}>후회하는 오프트래너</div>
                <div className={"rankingslidebox"}>
                    <NOM></NOM>
                </div>
            </div>


        </>
    );
};

export default gameranking;
