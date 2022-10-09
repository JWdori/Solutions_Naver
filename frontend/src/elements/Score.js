import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {CloseOutlined} from "@ant-design/icons";

const Score = ({ curStars, starRating }) => {

    const [stars, setStars] = useState(['blank', 'blank', 'blank', 'blank', 'blank']);
    useEffect(() => {
        let copy = stars.map((star, i) => i <= (curStars - 1) ? 'lit' : 'blank');
        setStars(copy);
    }, [])

    const handleStarClick = (pos) => {
        if (pos === null) {
            setStars(['blank', 'blank', 'blank', 'blank', 'blank']);
            return;
        }

        let copy = stars.map((star, i) => i <= pos ? 'lit' : 'blank');
        setStars(copy);
        starRating(pos + 1)
    };

    return (

        <div className="stars">
            {stars.map((star, index) => (
                <Stars
                    key={index}
                    handleStarClick={handleStarClick}
                    position={index}
                    state={star}
                />))}
        </div>

    );
};

const Stars = (props) => {
    const handleCloseBtn = (e) => {
        setShowPopup(false);
    };
    const { setShowPopup } = props;
    const { position, state, handleStarClick } =  props;

    return (


        <div className={state} onClick={() => handleStarClick(position)}>
            {/* <i className="fa fa-star" /> */}
            <FontAwesomeIcon className="FontAwesomeIcon" icon={faStar} size="xs"></FontAwesomeIcon>
        </div>


    )
};

Stars.defaultProps = {
    starRating: () => console.log('changeStarts not defined')
}

export default Score;