import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import progresschar from "../images/progressCHAR.png";


const Recommend = (props) => {
    const { setShowPopup } = props;
    const handleCloseBtn = (e) => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="modal" onClick={handleCloseBtn}>
                <div
                    className="modalPost"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}>
                    <div className="colsebox">
                        <CloseOutlined className="closeBtn" onClick={handleCloseBtn} />
                    </div>
                    <div className="modalCon">

                        <div className="modalTitle">
                            AI 게임 추천 서비스를 받아보세요!
                        </div>
                        <div className="modalSemi">
                            텐투플레이 AI가 <br></br>
                            유저 행동 분석을 통해 <br></br>
                            알맞은 게임을 추천합니다!
                        </div>

                        <button id="recommend" >
                            나에게 맞는 게임 확인하기
                        </button>
                    </div>



                </div>


            </div>
        </>
    );
};

export default Recommend;
