import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import Score from "./Score";



const ScorePage = (props) => {
    const { setShowPopup,num,complete } = props;
    const handleCloseBtn = (e) => {
        setShowPopup(false);

    };
    const handleCompleteBtn = (e) => {
        setShowPopup(false);
        complete(num+1);

    };


    return (
        <>
            <div className="modal" onClick={handleCloseBtn}>
                <div
                    className="modalPost4"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="modalHead">
                        <div className="modalHeadFont">평점 주기</div>
                        <CloseOutlined className="closeBtn" onClick={handleCloseBtn} />
                    </div>
                    <div className="modalstar">
                        <Score></Score>
                        <button id="scorebutton"onClick={handleCompleteBtn} >완료</button>
                    </div>


                </div>
            </div>
        </>
    );
};




export default ScorePage;
const textList = [
    '별로에요',
    '그저 그래요',
    '보통이에요',
    '좋아요',
    '최고예요',
];
