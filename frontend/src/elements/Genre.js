import React, {useEffect} from "react";
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
        if(input==="없음"){
            if(genre3[3].state===false){
                setGenre(([
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
                    {text: "없음", state: true}])
                );
                setGenre1([{text: "RPG", state: false}, {text: "음악", state: false}, {text: "레이싱", state: false}, {text: "스포츠", state: false}]);
                setGenre2([  {text: "전략", state: false}, {text: "퍼즐", state: false}, {text: "카지노", state: false}, {text: "방치형", state: false}]);
                setGenre3([{text: "경영", state: false}, {text: "디펜스", state: false}, {text: "교육∙\n퀴즈", state: false}, {text: "없음", state: true}]);
            }else{
                setGenre(genre.map([
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
                );
                setGenre3([{text: "경영", state: false}, {text: "디펜스", state: false}, {text: "교육∙\n퀴즈", state: false}, {text: "없음", state: false}]);
            }
        }else{
            if(genre3[3].state===true){
                setGenre3([{text: "경영", state: false}, {text: "디펜스", state: false}, {text: "교육∙\n퀴즈", state: false}, {text: "없음", state: false}]);
            }

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
            } else if (num === 2) {
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
        }

        genreFunction(genreAll(input));
    };
    let value = [];
    const genreAll = (input) => {

        if(input!=="없음"){
            genre.map(genre => genre.state === true ? value.push(genre.text) : null);
            if(!value.includes(input)){
                value.push(input)
            }else{
                value=value.filter((element)=>element!==input);
            }
        }else{
            value=[];
        }
        
        if(value.includes("없음")) value=value.filter((element)=>element!=="없음");
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
                                onGenreClick(
                                    item.text, 1)
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
            <div className="genreBox1" style={{marginBottom: "30px", marginTop: "13px", marginRight: "0px"}}>
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