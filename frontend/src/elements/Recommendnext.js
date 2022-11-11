import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import close from "../images/close.png";
import game001 from "../images/game/game001.png";
import game002 from "../images/game/game002.png";

const NOM_randImage = [game001,game002];
const NOM_randLink = ["https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=ko&gl=US","https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=ko&gl=US"];
const NOM_randName = ["아무튼 어떤 게임","아무튼 대단한 게임"];
const randomIndex = Math.floor(Math.random() * NOM_randImage.length);

const Img = NOM_randImage[randomIndex];
const Link = NOM_randLink[randomIndex];
const Name = NOM_randName[randomIndex];


const Recommendnext = (props) => {
    const { setShowNextPopup } = props;
    const handleCloseBtn = (e) => {
        setShowNextPopup(false);
    };

    return (
        <>
            <div className="modal">
                <div
                    className="modalPost2"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}>
                    <div className="closebox2">
                        <img
                            className="closeBtn2"
                            src= {close}
                            alt="img"
                            width="17px"
                            height="18px"
                            onClick={handleCloseBtn} />
                    </div>
                    <span className={"modalNextTitle"}>폭풍성장
                        <span className={"modalNextSub"}>형 유저에게</span>추천
                        <span className={"modalNextSub"}>하는 게임!</span>
                    </span>

                    <button id={"modalGameName"}>
                        {Name}
                    </button>

                    <div>
                        <a href={Link} target="_blank">
                            <img
                                className="recommendnextImage"
                                src={Img}
                                alt="img"
                                width="222px"
                                height="108px"
                            ></img>
                        </a>
                    </div>


                        <button id="recommend2" >
                            나에게 맞는 게임 확인하기
                        </button>




                </div>


            </div>
        </>
    );
};

export default Recommendnext;
