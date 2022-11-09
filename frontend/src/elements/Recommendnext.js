import React from "react";
import { CloseOutlined } from "@ant-design/icons";

import game001 from "../images/game/game001.png";
import game002 from "../images/game/game002.png";

const randImage = [game001,game002];
const randLink = ["https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=ko&gl=US","https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=ko&gl=US"];
const randomIndex = Math.floor(Math.random() * randImage.length);

const Img = randImage[randomIndex];
const Link = randLink[randomIndex];


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
                    <div className="modalImage2" style={{background: game001 }}>
                        <a href={Link} target="_blank">
                            <img
                                className="recommendnextImage"
                                src={Img}
                                alt="img"
                                width="160px"
                                height="100px"
                            ></img>
                        </a>
                        <div className="modalTitle" style={{color:"black"}}>
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
