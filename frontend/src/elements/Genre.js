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

    const onGenreClick = (input) => {
        setGenre(genre.map(
            genre => genre.text === input
                ? {...genre, state: !genre.state}
                : genre
        ));

        const genreAll = () => {
            let value = [];
            genre.map(genre => genre.state === true ? value.push(genre.text) : null)
            return value;
        }
    };
    return (
        <>
            <div className="genreBox1" style={{marginTop: "40px"}}>
                {genre.map((item, idx) => (
                    <button
                        className={item.state ? "genreButtonFocus" : "genreButton"}
                        onClick={() => {
                            onGenreClick(item.text)
                        }}
                        style={
                            idx < 4
                                ? idx == 3 ? {marginTop: "40px"} : {marginTop: "40px", whiteSpace: "pre"}
                                : idx == 7 ? {marginBottom: "30px", marginTop: "12px"} : {
                                    marginBottom: "30px",
                                    marginTop: "12px"
                                }
                        }
                    >
                        {item.text}
                    </button>
                ))
                }
            </div>
        </>
    );
};

export default Genre;