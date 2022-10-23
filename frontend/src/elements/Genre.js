import React from "react";
import {CloseOutlined} from "@ant-design/icons";


const Genre = ({genreFunction}) => {

    const [genre, setGenre] = React.useState([
        {text: "RPG", state: false},
        {text: "스포츠", state: false},
        {text: "액션", state: false},
        {text: "음악", state: false},
        {text: "전략", state: false},
        {text: "퍼즐", state: false},
        {text: "AOS", state: false},
        {text: "FPS", state: false}])
    ;

    const [genre1, setGenre1] = React.useState([
        {text: "RPG", state: false},
        {text: "스포츠", state: false},
        {text: "액션", state: false},
        {text: "음악", state: false}])
    ;const [genre2, setGenre2] = React.useState([
        {text: "전략", state: false},
        {text: "퍼즐", state: false},
        {text: "AOS", state: false},
        {text: "FPS", state: false}])
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
        } else {
            setGenre2(genre2.map(
                genre2 => genre2.text === input
                    ? {...genre2, state: !genre2.state}
                    : genre2
            ));
        }
    };


    const genreAll = () => {
        let value = [];
        genre.map(genre => genre.state === true ? value.push(genre.text) : null)
        return value;
    }

    return (
        <>
            <div className="genreBox1" style={{marginTop: "40px"}}>
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
            <div className="genreBox1" style={{marginBottom: "30px", marginTop: "12px"}}>
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

        </>
    );
};

export default Genre;