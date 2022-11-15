import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import close from "../images/close.png";
import nomgame1 from "../images/GameImage/NOM/1_herorestaurant.png";
import nomgame2 from "../images/GameImage/NOM/2_Guardian.png";
import nomgame3 from "../images/GameImage/NOM/3_lastcamp.png";
import nomgame4 from "../images/GameImage/NOM/4_battleground.png";
import nomgame5 from "../images/GameImage/NOM/5_conbinworld.png";
import nomgame6 from "../images/GameImage/NOM/6_warriortop.png";
import nomgame7 from "../images/GameImage/NOM/7_soulknight.png";
import nomgame8 from "../images/GameImage/NOM/8_dungeonmaker.png";
import nomgame9 from "../images/GameImage/NOM/9_sdorika.png";
import nomgame10 from "../images/GameImage/NOM/10_maplestoryworld.png";
import rergame1 from "../images/GameImage/RER/1_seoul2030.png";
import rergame2 from "../images/GameImage/RER/2_fechika.png";
import rergame3 from "../images/GameImage/RER/3_ageofdynasties.png";
import rergame4 from "../images/GameImage/RER/4_reigns.jpg";
import rergame5 from "../images/GameImage/RER/5_30day.png";
import rergame6 from "../images/GameImage/RER/6_huger.png";
import rergame7 from "../images/GameImage/RER/7_flower.png";
import rergame8 from "../images/GameImage/RER/8_wintertop.png";
import rergame9 from "../images/GameImage/RER/9_dungeonmaker.png";
import rergame10 from "../images/GameImage/RER/10_nodiedunjeon.png";
import grogame1 from "../images/GameImage/GRO/1_blackservival.png";
import grogame2 from "../images/GameImage/GRO/2_blolstars.png";
import grogame3 from "../images/GameImage/GRO/3_grandchace.png";
import grogame4 from "../images/GameImage/GRO/4_2nation.png";
import grogame5 from "../images/GameImage/GRO/5_moonlight.png";
import grogame6 from "../images/GameImage/GRO/6_soulknight.png";
import grogame7 from "../images/GameImage/GRO/7_intothedeogeon.png";
import grogame8 from "../images/GameImage/GRO/8_crusadersquest.png";
import grogame9 from "../images/GameImage/GRO/9_sdorika.png";
import grogame10 from "../images/GameImage/GRO/10_ayhangasa.png";
import fasgame1 from "../images/GameImage/FAS/1_mementomori.png";
import fasgame2 from "../images/GameImage/FAS/2_umamusma.png";
import fasgame3 from "../images/GameImage/FAS/3_ANSANGBLESTARS.png";
import fasgame4 from "../images/GameImage/FAS/4_blueahive.png";
import fasgame5 from "../images/GameImage/FAS/5_kingsraid.png";
import fasgame6 from "../images/GameImage/FAS/6_epicseven.png";
import fasgame7 from "../images/GameImage/FAS/7_projectsekai.png";
import fasgame8 from "../images/GameImage/FAS/8_loadofheros.png";
import fasgame9 from "../images/GameImage/FAS/9_wakeupwitch.png";
import fasgame10 from "../images/GameImage/FAS/10_princessconnect.png";
import whagame1 from "../images/GameImage/WHA/1_V4.PNG";
import whagame2 from "../images/GameImage/WHA/2_blackdesert.png";
import whagame3 from "../images/GameImage/WHA/3_odin.png";
import whagame4 from "../images/GameImage/WHA/4_clashofclan.png";
import whagame5 from "../images/GameImage/WHA/5_linige.png";
import whagame6 from "../images/GameImage/WHA/6_MIRE.PNG";
import whagame7 from "../images/GameImage/WHA/7_bladeandsoul.png";
import whagame8 from "../images/GameImage/WHA/8_bress.png";
import whagame9 from "../images/GameImage/WHA/9_ecalosem.png";
import whagame10 from "../images/GameImage/WHA/10_hit2.png";
import folgame1 from "../images/GameImage/FOL/1_diablo.png";
import folgame2 from "../images/GameImage/FOL/2_ark.png";
import folgame3 from "../images/GameImage/FOL/3_eathlastday.png";
import folgame4 from "../images/GameImage/FOL/4_wildboy.png";
import folgame5 from "../images/GameImage/FOL/5_loltochess.png";
import folgame6 from "../images/GameImage/FOL/6_oceanisgome.png";
import folgame7 from "../images/GameImage/FOL/7_donstave.png";
import folgame8 from "../images/GameImage/FOL/8_teraria.png";
import folgame9 from "../images/GameImage/FOL/9_starnewballey.png";
import folgame10 from "../images/GameImage/FOL/10_witchsam.png";
import undgame1 from "../images/GameImage/UND/1_gensin.png";
import undgame2 from "../images/GameImage/UND/2_Guardian.png";
import undgame3 from "../images/GameImage/UND/3_cookie.png";
import undgame4 from "../images/GameImage/UND/4_3rd.png";
import undgame5 from "../images/GameImage/UND/5_meongillbanju.png";
import undgame6 from "../images/GameImage/UND/6_deongjunand.png";
import undgame7 from "../images/GameImage/UND/7_rangrisser.png";
import undgame8 from "../images/GameImage/UND/8_blackservival.png";
import undgame9 from "../images/GameImage/UND/9_umamusma.png";
import undgame10 from "../images/GameImage/UND/10_maplem.png";
import famgame1 from "../images/GameImage/FAM/1_koreanmim.png";
import famgame2 from "../images/GameImage/FAM/2_antkingdom.png";
import famgame3 from "../images/GameImage/FAM/3_runtera.png";
import famgame4 from "../images/GameImage/FAM/4_clashofclan.png";
import famgame5 from "../images/GameImage/FAM/5_hathstone.png";
import famgame6 from "../images/GameImage/FAM/6_loadofheros.png";
import famgame7 from "../images/GameImage/FAM/7_apicfatasy.png";
import famgame8 from "../images/GameImage/FAM/8_besta.png";
import famgame9 from "../images/GameImage/FAM/9_starnewballey.png";
import famgame10 from "../images/GameImage/FAM/10_thewhicher.png";
import colgame1 from "../images/GameImage/COL/1_sasin.png";
import colgame2 from "../images/GameImage/COL/2_gensin.png";
import colgame3 from "../images/GameImage/COL/3_toweroffantasy.png";
import colgame4 from "../images/GameImage/COL/4_blueahive.png";
import colgame5 from "../images/GameImage/COL/5_cookie.png";
import colgame6 from "../images/GameImage/COL/6_3rd.png";
import colgame7 from "../images/GameImage/COL/7_nike.png";
import colgame8 from "../images/GameImage/COL/8_apicfatasy.png";
import colgame9 from "../images/GameImage/COL/9_epicseven.png";
import colgame10 from "../images/GameImage/COL/10_wakeupwitch.png";
import pvpgame1 from "../images/GameImage/PVP/1_blackdesert.png";
import pvpgame2 from "../images/GameImage/PVP/2_odin.png";
import pvpgame3 from "../images/GameImage/PVP/3_lohan.png";
import pvpgame4 from "../images/GameImage/PVP/4_arrow2.png";
import pvpgame5 from "../images/GameImage/PVP/5_battleground.png";
import pvpgame6 from "../images/GameImage/PVP/6_callofduty.png";
import pvpgame7 from "../images/GameImage/PVP/7_darkavenger3.png";
import pvpgame8 from "../images/GameImage/PVP/8_ecalosem.png";
import pvpgame9 from "../images/GameImage/PVP/9_bress.png";
import pvpgame10 from "../images/GameImage/PVP/10_wildleft.png";
import GameRecommend from "../pages/GameRecommend";

//const NOM_randLink = ["https://play.google.com/store/apps/details?id=com.supercell.brawlstars&hl=ko&gl=US","https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=ko&gl=US"];
const NOM_randName = ["용사식당","가디언 테일즈","라스트 캠프 디펜스","배틀그라운드","컴바인월드","용사의 탑","Soul Knight","던전메이커","스도리카","메이플스토리 월드"];
const NOM_randImage = [nomgame1,nomgame2,nomgame3,nomgame4,nomgame5,nomgame6,nomgame7,nomgame8,nomgame9,nomgame10];
const RER_randName = ["서울2033","페치카","Age of Dynasties","Reigns","30일","휴거 1992","어드벤처 오브 플라워","겨울의 탑","던전메이커","던전에서 죽기싫어"]
const RER_randImage = [rergame1,rergame2,rergame3,rergame4,rergame5,rergame6,rergame7,rergame8,rergame9,rergame10];
const GRO_randName = ["블랙서바이벌","브롤스타즈","그랜드체이스","제2의 나라: Cross Worlds","달빛 조각사","Soul Knight","인투더던전","크루세이더 퀘스트","스도리카","야행어사"]
const GRO_randImage = [grogame1,grogame2,grogame3,grogame4,grogame5,grogame6,grogame7,grogame8,grogame9,grogame10];
const FAS_randName = ["메멘토 모리","우마무스메 프리티 더비","앙상블스타즈!!","블루 아카이브","킹스레이드","에픽세븐","프로젝트 세카이 컬러풀 스테이지!","로드 오브 히어로즈","깨어난 마녀","프린세스 커넥트! Re:Dive"]
const FAS_randImage = [fasgame1,fasgame2,fasgame3,fasgame4,fasgame5,fasgame6,fasgame7,fasgame8,fasgame9,fasgame10];
const WHA_randName = ["V4","검은사막 모바일","오딘: 발할라 라이징","클래시 오브 클랜","리니지W","미르M","블레이드&소울 레볼루션","블레스 이터널","이카루스M","히트2"]
const WHA_randImage = [whagame1,whagame2,whagame3,whagame4,whagame5,whagame6,whagame7,whagame8,whagame9,whagame10];
const FOL_randName = ["디아블로 이모탈","아크: 서바이벌 이볼브드","지구의 마지막 날: 생존","눈을 떠요 야생소년","롤토체스,마녀의 샘3","Ocean Is Home : 서바이벌 아일랜드","Don't Starve: Pocket Edition","Terraria","스타듀 밸리 Stardew Valley"]
const FOL_randImage = [folgame1,folgame2,folgame3,folgame4,folgame5,folgame6,folgame7,folgame8,folgame9,folgame10];
const UND_randName = ["원신","가디언 테일즈","쿠키런: 킹덤","붕괴3rd","명일방주","던전앤파이터 모바일","랑그릿사","블랙서바이벌","우마무스메 프리티 더비","메이플스토리M"]
const UND_randImage = [undgame1,undgame2,undgame3,undgame4,undgame5,undgame6,undgame7,undgame8,undgame9,undgame10];
const FAM_randName = ["한국밈 피하기","디 앤츠: 언더그라운드 킹덤","레전드 오브 룬테라","클래시 오브 클랜","하스스톤","로드 오브 히어로즈","에픽판타지","베스트리아전기","스타듀 밸리 Stardew Valley","궨트: 더 위쳐 카드게임"]
const FAM_randImage = [famgame1,famgame2,famgame3,famgame4,famgame5,famgame6,famgame7,famgame8,famgame9,famgame10];
const COL_randName = ["사신키우기 온라인","원신","타워 오브 판타지","블루 아카이브","쿠키런: 킹덤","붕괴3rd","승리의 여신: 니케","에픽세븐","에픽판타지","깨어난 마녀"]
const COL_randImage = [colgame1,colgame2,colgame3,colgame4,colgame5,colgame6,colgame7,colgame8,colgame9,colgame10];
const PVP_randName = ["검은사막 모바일","오딘: 발할라 라이징","로한M","활2","배틀그라운드","콜 오브 듀티: 모바일","다크어벤저3","이카루스M","블레스 이터널","리그 오브 레전드: 와일드 리프트"]
const PVP_randImage = [pvpgame1,pvpgame2,pvpgame3,pvpgame4,pvpgame5,pvpgame6,pvpgame7,pvpgame8,pvpgame9,pvpgame10];


const Recommendnext = (props) => {
    const randomIndex = Math.floor(Math.random() * NOM_randImage.length);
    const { setShowNextPopup } = props;
    const handleCloseBtn = (e) => {
        setShowNextPopup(false);
    };
    var Img = NOM_randImage[randomIndex];
    var Name = NOM_randName[randomIndex];

    if (props.type === "NOM") {
        Img = NOM_randImage[randomIndex];
        Name = NOM_randName[randomIndex];
    }else if(props.type==="RER") {
        Img = RER_randImage[randomIndex];
        Name = RER_randName[randomIndex];
    }else if(props.type==="GRO") {
        Img = GRO_randImage[randomIndex];
        Name = GRO_randName[randomIndex];
    }else if(props.type==="FAS") {
        Img = FAS_randImage[randomIndex];
        Name = FAS_randName[randomIndex];
    }else if(props.type==="WHA") {
        Img = WHA_randImage[randomIndex];
        Name = WHA_randName[randomIndex];
    }else if(props.type==="FOL") {
        Img = FOL_randImage[randomIndex];
         Name = FOL_randName[randomIndex];
    }else if(props.type==="UND") {
        Img = UND_randImage[randomIndex];
        Name = UND_randName[randomIndex];
    }else if(props.type==="FAM") {
       Img = FAM_randImage[randomIndex];
       Name = FAM_randName[randomIndex];
    }else if(props.type==="COL") {
        Img = COL_randImage[randomIndex];
       Name = COL_randName[randomIndex];
    }else{
         Img = PVP_randImage[randomIndex];
        Name = PVP_randName[randomIndex];
    }
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
                    <span className={"modalNextTitle"}>{props.type}
                        <span className={"modalNextSub"}>형 유저에게</span>추천
                        <span className={"modalNextSub"}>하는 게임!</span>
                    </span>

                    <button id={"modalGameName"}>
                        {Name}
                    </button>

                    <div>

                            <img
                                className="recommendnextImage"
                                src={Img}
                                alt="img"
                                width="222px"
                                height="108px"
                            ></img>

                    </div>


                        <button id="recommend2" onClick={props.nextbtn} >
                            나에게 맞는 게임 확인하기
                        </button>




                </div>


            </div>
        </>
    );
};

export default Recommendnext;
