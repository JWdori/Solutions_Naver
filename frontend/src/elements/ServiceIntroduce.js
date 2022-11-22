import React from "react";
import service from "../images/service.png";
import box from "../images/box.png";



const Serviceintroduce = (props) => {


    return (
        <>
            <div className="servicebox1">
                <img
                    className="servicebox2"
                    src={service}
                    alt="img"
                    width="295px"
                    height="233px"
                >
                </img>

                <div className={"servicebox3"}>
                                    <span className={"serviceTitle"}>
                                <img
                                    className="servicebox2"
                                    style={{marginLeft:"-16px"}}
                                    src={box}
                                    alt="img"
                                    width="116px"
                                    height="11px"
                                ></img>
                    W2P 테스트란?
                </span>
                    <div>
                <span className={"serviceSemi"}>
                        <span className={"serviceSemibold"}>W2P 테스트</span>
                        는 유저분석 AI 서비스 &#60;
                        <span className={"serviceSemibold"}>텐투플레이</span>
                    &#62;의
                </span>
                <span className={"serviceSemi"}>페르소나를 바탕으로 게임 유저의 유형을 분류하고<br></br>
            유형별 추천 게임을 제공하는 서비스입니다.</span>

                    </div>

                    <div className={"servicecontent"}>
                        <ol start="1" >
                            <li style={{marginBottom:"4px"}}>유형 검사를 통해 일부 장르의 게임을 제거 / 선택합니다.</li>
                            <li style={{marginBottom:"4px"}}>제공된 추천게임에 대한 유저의 선호도 평가를 받습니다.</li>
                            <li>텐투플레이 API가 유형별 추천 게임 오퍼를 전송합니다.</li>
                        </ol>
                    </div>
                </div>

            </div>


            <span className="Contact" >
                문의
            </span>
            <span className="Email" >jaewan0114@hanyang.ac.kr</span>
            <span className="Copyright" >Copyright 2022. W2P all rights reserved.</span>
        </>
    );
};

export default Serviceintroduce;
