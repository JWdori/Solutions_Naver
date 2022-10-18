import React from "react";
import { CloseOutlined } from "@ant-design/icons";



const Genre = (props) => {

    const [isChecked, setIsChecked] = React.useState(false); //체크 여부
    const [checkedItems, setCheckedItems] = React.useState(new Set());//체크된 요소들

    const checkHandler = ({ target }) => {
        console.log(target)
        setIsChecked(!isChecked);
        checkedItemHandler(target.parentNode, target.value, target.checked);
    };
    const checkedItemHandler = (box, id, isChecked) => {
        if (isChecked) { //체크 되었을때
            checkedItems.add(id); //체크시 삽입
            setCheckedItems(checkedItems); //체크 요소 넣어주기
            box.style.backgroundColor = "#F6CB44"; //스타일 변경
        } else if (!isChecked && checkedItems.has(id)) { //체크가 안되었고, id가 있을때(클릭 2번시)
            checkedItems.delete(id); //체크 두번시 삭제
            setCheckedItems(checkedItems);
            box.style.backgroundColor = "#fff";
        }
        return checkedItems;
    };
    return (
        <>
            <div className="genreBox1" style={{marginTop:"40px"}}>
                <button id="genreButton"
                        value={"RPG"}
                        onChange={(e) => checkHandler(e)}>
                    RPG
                </button>
                <button id="genreButton">
                    스포츠
                </button>
                <button id="genreButton">
                    액션
                </button>
                <button id="genreButton" style={{marginRight:"0px"}}>
                    음악
                </button>
            </div>
                <div className="genreBox1" style={{marginBottom:"30px", marginTop:"12px"}}>
                <button id="genreButton">
                    전략
                </button>
                <button id="genreButton">
                    퍼즐
                </button>
                <button id="genreButton">
                    AOS
                </button>
                <button id="genreButton" style={{marginRight:"0px"}}>
                    FPS
                </button>
            </div>
        </>
    );
};

export default Genre;
