import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import game2 from "../images/game/game001.png"
import game from "../images/game.png"
import type1 from "../images/test/type1.png";
import type2 from "../images/test/type2.png";
import type3 from "../images/test/type3.png";
import type4 from "../images/test/type4.png";
import type5 from "../images/test/type5.png";
import type6 from "../images/test/type6.png";
import type7 from "../images/test/type7.png";
import type8 from "../images/test/type8.png";
import type9 from "../images/test/type9.png";
import type10 from "../images/test/type10.png";


const Resultmodal = (props) => {
    const { setShowPopup } = props;
    const handleCloseBtn = (e) => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="modal" onClick={handleCloseBtn}>
                <div
                    className="modalPost3"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="modalHead">
                        <div className="modalHeadFont">전체 유형 보기</div>
                        <CloseOutlined className="closeBtn" onClick={handleCloseBtn} />
                    </div>


                    <div className="modalCon">
                        <img src={type1} width="200px" height="200px" alt="img"></img>
                        <div className="modalTitleresult">' 기대치 높은 무과금러
                            '</div>
                        <div className="modalSemiresult">
                            인게임 구매를 할 의향이 적으나 무과금 플레이시<br></br> 누릴 수 있는 컨텐츠에 대한 기대를 가지고 있는 유저
                        </div>

                        <div className="tagContainer">
                            <div className="tag" id="zerobase">
                                &nbsp;&nbsp; #라이트 유저 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="todak">
                                &nbsp;&nbsp; #킬링타임 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="gidae">
                                &nbsp;&nbsp; #찍먹 &nbsp;&nbsp;
                            </div>
                        </div>
                    </div>

                    <div className="modalCon">
                        <img src={type2} width="200px" height="200px" alt="img"></img>
                        <div className="modalTitleresult">' 공략 따라쟁이
                            '</div>
                        <div className="modalSemiresult">
                            상위 레벨의 유저들의 공략을 빠르게 따라하는 유저
                        </div>

                        <div className="tagContainer">
                            <div className="tag" id="zerobase">
                                &nbsp;&nbsp; #클리어 목표 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="todak">
                                &nbsp;&nbsp; #진지함 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="gidae">
                                &nbsp;&nbsp; #분석가 &nbsp;&nbsp;
                            </div>
                        </div>
                    </div>

                    <div className="modalCon">
                        <img src={type3} width="200px" height="200px" alt="img"></img>
                        <div className="modalTitleresult">' 익숙함 선호
                            '</div>
                        <div className="modalSemiresult">
                            주로 사용하는 캐릭터, 덱, 아이템 등을 벗어나지 않고<br></br> 안전지대에 머무르려는 플레이어
                        </div>

                        <div className="tagContainer">
                            <div className="tag" id="zerobase">
                                &nbsp;&nbsp; #마이웨이 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="todak">
                                &nbsp;&nbsp; #최애캐 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="gidae">
                                &nbsp;&nbsp; #귀차니즘 &nbsp;&nbsp;
                            </div>
                        </div>
                    </div>


                    <div className="modalCon">
                        <img src={type4} width="200px" height="200px" alt="img"></img>
                        <div className="modalTitleresult">' 언더독 키우기
                            '</div>
                        <div className="modalSemiresult">
                            비교적 경쟁력이 낮은 아이템이나 캐릭터를<br></br> 사용하는 유저
                        </div>

                        <div className="tagContainer">
                            <div className="tag" id="zerobase">
                                &nbsp;&nbsp; #역배 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="todak">
                                &nbsp;&nbsp; #취향입니다 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="gidae">
                                &nbsp;&nbsp; #최애캐 &nbsp;&nbsp;
                            </div>
                        </div>
                    </div>


                    <div className="modalCon">
                        <img src={type5} width="200px" height="200px" alt="img"></img>
                        <div className="modalTitleresult">' 처음부터 PvP
                            '</div>
                        <div className="modalSemiresult">
                            육성보다는 다른 사람을 이기는 것,<br></br> 다른 사람들보다 잘하는 것이 중요한 유저
                        </div>

                        <div className="tagContainer">
                            <div className="tag" id="zerobase">
                                &nbsp;&nbsp; #과금전사 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="todak">
                                &nbsp;&nbsp; #랭커 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="gidae">
                                &nbsp;&nbsp; #경쟁선호 &nbsp;&nbsp;
                            </div>
                        </div>
                    </div>


                    <div className="modalCon">
                        <img src={type6} width="200px" height="200px" alt="img"></img>
                        <div className="modalTitleresult">' 후회하는 오프트래너
                            '</div>
                        <div className="modalSemiresult">
                            게임 초반에 중요한 아이템이나 기회를 효율적인 용도로<br></br> 사용하지 못하고 이에 미련을 갖고 있는 유저
                        </div>

                        <div className="tagContainer">
                            <div className="tag" id="zerobase">
                                &nbsp;&nbsp; #왜그랬을까 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="todak">
                                &nbsp;&nbsp; #팔랑귀 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="gidae">
                                &nbsp;&nbsp; #충동 &nbsp;&nbsp;
                            </div>
                        </div>
                    </div>



                    <div className="modalCon">
                        <img src={type7} width="200px" height="200px" alt="img"></img>
                        <div className="modalTitleresult">' 패션 아이템 선호
                            '</div>
                        <div className="modalSemiresult">
                            시각적 효과를 중요하게 생각하는 유저
                        </div>

                        <div className="tagContainer">
                            <div className="tag" id="zerobase">
                                &nbsp;&nbsp; #코디왕 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="todak">
                                &nbsp;&nbsp; #아바타수집가 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="gidae">
                                &nbsp;&nbsp; #덕후 &nbsp;&nbsp;
                            </div>
                        </div>
                    </div>


                    <div className="modalCon">
                        <img src={type8} width="200px" height="200px" alt="img"></img>
                        <div className="modalTitleresult">' 수집가
                            '</div>
                        <div className="modalSemiresult">
                            캐릭터나 아이템을 수집하고<br></br> 골고루 성장시키기를 좋아하는 유저
                        </div>

                        <div className="tagContainer">
                            <div className="tag" id="zerobase">
                                &nbsp;&nbsp; #수집형RPG &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="todak">
                                &nbsp;&nbsp; #시간과돈 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="gidae">
                                &nbsp;&nbsp; #과금전사 &nbsp;&nbsp;
                            </div>
                        </div>
                    </div>


                    <div className="modalCon">
                        <img src={type9} width="200px" height="200px" alt="img"></img>
                        <div className="modalTitleresult">' 폭풍성장
                            '</div>
                        <div className="modalSemiresult">
                            게임을 할 시간이 충분하지 않아 짧은 시간 동안<br></br> 플레이를 하지만 재화를 효율적으로 사용하여<br></br> 매우 빠른 속도로 성장하는 유저
                        </div>

                        <div className="tagContainer">
                            <div className="tag" id="zerobase">
                                &nbsp;&nbsp; #겜잘알 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="todak">
                                &nbsp;&nbsp; #재능러 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="gidae">
                                &nbsp;&nbsp; #직장인 &nbsp;&nbsp;
                            </div>
                        </div>
                    </div>

                    <div className="modalCon">
                        <img src={type10} width="200px" height="200px" alt="img"></img>
                        <div className="modalTitleresult">' 고래
                            '</div>
                        <div className="modalSemiresult">
                            인게임 상품을 구매할 가능성이 높은,<br></br> 게임에 돈을 아끼지 않는 유저
                        </div>

                        <div className="tagContainer">
                            <div className="tag" id="zerobase">
                                &nbsp;&nbsp; #트럭 &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="todak">
                                &nbsp;&nbsp; #건물주세요? &nbsp;&nbsp;
                            </div>
                            <div className="tag" id="gidae">
                                &nbsp;&nbsp; #과금전사 &nbsp;&nbsp;
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Resultmodal;
