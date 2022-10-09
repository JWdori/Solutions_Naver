import React from "react";
import { CloseOutlined } from "@ant-design/icons";



const Recommendnext = (props) => {
    const { setShowPopup } = props;
    const handleCloseBtn = (e) => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="modal" onClick={handleCloseBtn}>
                <div
                    className="modalPost2"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}>
                    <div className="closebox2">
                        <CloseOutlined className="closeBtn2" onClick={handleCloseBtn} />
                    </div>
                    <div className="modalImage2">

                        <div className="modalTitle">
                            AI 게임 추천 서비스를 받아보세요!
                        </div>

                        <button id="recommend2" >
                            나에게 맞는 게임 확인하기
                        </button>
                    </div>



                </div>


            </div>
        </>
    );
};

export default Recommendnext;
