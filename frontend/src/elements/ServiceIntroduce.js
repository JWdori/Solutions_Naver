import React from "react";
import { CloseOutlined } from "@ant-design/icons";



const Serviceintroduce = (props) => {


    return (
        <>
            <div className="servicebox">
                <div className="serviceTitleBox">
                    <div className="serviceTitle1">
                        W2P&nbsp;
                    </div>
                    <div className="serviceTitle1" style={{color: "white"}}>
                        테스트란?
                    </div>
                </div>

                <div className="serviceSemiBox">
                    <div className="servicesemi">
                        W2P&nbsp;
                    </div>
                    <div className="servicesemi" style={{color: "white"}}>
                        테스트는 게임 유형 검사와 AI 게임 추천
                    </div>
                </div>

                <div className="serviceTitleBox">
                    <div className="servicesemi" style={{color: "white"}}>
                        서비스를 제공합니다.
                    </div>
                </div>


                <div className="servicecContentBox">
                    <div className="servicecontent" style={{color: "white"}}>
                        1. 유형검사를 통해 일부 게임을 제거/선택 합니다.<br></br>
                    </div>
                    <div className="servicecontent" style={{color: "white"}}>
                        2. 추천된 게임에 대한 선호도 평가를 받습니다.<br></br>
                    </div>
                    <div className="servicecontent" style={{color: "white"}}>
                        3. 텐투플레이 API가 유저의 행동패턴을 분석합니다.<br></br>
                    </div>
                    <div className="servicecontent" style={{color: "white"}}>
                        4. AI가 유저적합한 게임을 추가로 추천합니다.<br></br>
                    </div>
                </div>
            </div>

            <div className="Contact" >
                문의
                <div className="Email" >
                    jaewan0114@hanyang.ac.kr
                </div>
            </div>

        </>
    );
};

export default Serviceintroduce;
