import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import game2 from "../images/game2.png"
import game from "../images/game.png"



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
                        <img src={game} width="260px" height="180px" alt="img"></img>
                        <div className="modalTitleresult">'씨앗 디노'</div>
                        <div className="modalSemiresult">
                            씨앗을 심고 새싹이 될 때까지 정성을 들이는 단계
                        </div>
                        <div className="modalDetail">
                            더 나은 내일로 나아갈 무한한 잠재력을 지니고 있는 당신. 어떤
                            꽃으로 피어날지는 당신의 손에 달려있어요. 물을 주고, 햇볕을 쪼이면
                            곧 새싹이 모습을 드러낼 거예요.
                        </div>
                        <div className="modalDetail">
                            내가 어떤 사람인지, 어떻게 꽃을 피워내야 할지 모르겠다면 다른
                            사람의 이야기를 듣는 것도 좋은 방법! 모든 것은 나로부터
                            시작되니까요.
                        </div>
                        <div className="tagContainer">
                            <div className="tag" id="zerobase">
                                #제로베이스
                            </div>
                            <div className="tag" id="todak">
                                #토닥진로코디네이터
                            </div>
                            <div className="tag" id="gidae">
                                #아무튼,기대
                            </div>
                        </div>
                    </div>


                    <div className="modalCon">
                        <img src={game2} width="260px" height="180px" alt="img"></img>

                        <div className="modalTitleresult">'새싹 디노'</div>
                        <div className="modalSemiresult">
                            꽃이 피어날 미래를 기대하며 싱그러움으로 가득한 단계
                        </div>
                        <div className="modalDetail">
                            땅 속에 묻힌 씨앗이 싹을 틔우기까지 많은 노력을 했을 당신. 어떤
                            방향으로 나아가야할지 감을 잡았군요.
                        </div>
                        <div className="modalDetail">
                            하지만 방심은 금물! 아직은 힘이 약한 새싹이 단단하게 성장하기
                            위해서는 전문가의 도움이 필요할 수 있어요. 함께 구체적인 진로를
                            고민해줄 누군가가 있다면 도움이 될 거예요.
                        </div>
                        <div className="tagContainer">
                            <div className="tag" style={{ width: "80px" }}>
                                #제로베이스
                            </div>
                            <div className="tag" style={{ width: "85px" }}>
                                #아무튼,기대
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Resultmodal;
