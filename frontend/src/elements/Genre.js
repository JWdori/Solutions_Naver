import React from "react";
import {CloseOutlined} from "@ant-design/icons";


const Genre = ({genreFunction}) => {

    const [genre, setGenre] = React.useState([
        {text: "RPG", state: false},
        {text: "음악", state: false},
        {text: "레이싱", state: false},
        {text: "스포츠", state: false},
        {text: "전략", state: false},
        {text: "퍼즐", state: false},
        {text: "카지노", state: false},
        {text: "방치형", state: false},
        {text: "경영", state: false},
        {text: "디펜스", state: false},
        {text: "교육∙퀴즈", state: false},
        {text: "없음", state: false}])
    ;

    const [genre1, setGenre1] = React.useState([
        {text: "RPG", state: false},
        {text: "음악", state: false},
        {text: "레이싱", state: false},
        {text: "스포츠", state: false}])
    ;const [genre2, setGenre2] = React.useState([
        {text: "전략", state: false},
        {text: "퍼즐", state: false},
        {text: "카지노", state: false},
        {text: "방치형", state: false}])
    ;const [genre3, setGenre3] = React.useState([
        {text: "경영", state: false},
        {text: "디펜스", state: false},
        {text: "교육∙\n퀴즈", state: false},
        {text: "없음", state: false}])
    ;


    const onGenreClick = (input, num) => {
        setGenre(genre.map(
            genre => genre.text === input
                ? {...genre, state: !genre.state}
                : genre
        ));

        if (num === 1) {
            setGenre1(genre1.map(
                genre1 => genre1.text === input
                    ? {...genre1, state: !genre1.state}
                    : genre1
            ));
        } else if(num ===2 ) {
            setGenre2(genre2.map(
                genre2 => genre2.text === input
                    ? {...genre2, state: !genre2.state}
                    : genre2
            ));
        } else {
            setGenre3(genre3.map(
                genre3 => genre3.text === input
                    ? {...genre3, state: !genre3.state}
                    : genre3
            ));
        }

        //재완씨 크나큰 문제가 있어
        //여기에서 만약에 퍼즐을 누른 상태면 아직 퍼즐이 false고
        //퍼즐을 한번 더 눌러서 선택해제되면 그때서야 퍼즐이 true야,,,^^
        //여기 어떡하지,,??
        genreFunction(genreAll());
    };


    const genreAll = () => {
        let value = [];
        genre.map(genre => genre.state === true ? value.push(genre.text) : null)
        return value;
    }

    return (
        <>
            <div className="genreBox1" style={{marginTop: "60px"}}>
                {genre1.map((item, idx) =>
                    (
                        <button
                            className={item.state ? "genreButtonFocus" : "genreButton"}
                            onClick={() => {
                                onGenreClick(item.text, 1)
                            }}
                            key={idx + "_1"}
                        >
                            {item.text}
                        </button>
                    )
                )
                }
            </div>
            <div className="genreBox1" style={{marginTop: "13px"}}>
                {genre2.map((item, idx) =>
                    (
                        <button
                            className={item.state ? "genreButtonFocus" : "genreButton"}
                            onClick={() => {
                                onGenreClick(item.text, 2)
                            }}
                            key={idx + "_2"}
                        >
                            {item.text}
                        </button>
                    )
                )
                }
            </div>
            <div className="genreBox1" style={{marginBottom: "30px", marginTop: "13px"}}>
                {genre3.map((item, idx) =>
                    (
                        <button
                            className={item.state ? "genreButtonFocus" : "genreButton"}
                            onClick={() => {
                                onGenreClick(item.text, 3)
                            }}
                            key={idx + "_3"}
                        >
                            {item.text}
                        </button>
                    )
                )
                }
            </div>

        </>
    );
};

export default Genre;