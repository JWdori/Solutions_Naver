import React from "react";
import progresschar from "../images/progressCHAR.png";
import eggNo from "../images/game/egg_no.png"
import eggClear from "../images/game/egg_clear.png"

const ProgressRec = ({step}) => {
    return (
        <div>
            <div className="progressRec-div" style={{ width: step }}>
                <div>
                    {
                        step >= 1
                            ?
                            <img
                                className="progressRecEgg"
                                src={eggClear}
                                alt="img"
                                width="44px"
                                height="44px">
                            </img>
                            :
                            <img
                                className="progressRecEgg"
                                src={eggNo}
                                alt="img"
                                width="44px"
                                height="44px">
                            </img>
                    }
                </div>


                <div>
                    {
                        step >= 2
                            ?
                            <img
                                className="progressRecEgg"
                                src={eggClear}
                                alt="img"
                                width="44px"
                                height="44px">
                            </img>
                            :
                            <img
                                className="progressRecEgg"
                                src={eggNo}
                                alt="img"
                                width="44px"
                                height="44px">
                            </img>
                    }
                </div>


                <div>
                    {
                        step >= 3
                            ?
                            <img
                                className="progressRecEgg"
                                src={eggClear}
                                alt="img"
                                width="44px"
                                height="44px">
                            </img>
                            :
                            <img
                                className="progressRecEgg"
                                src={eggNo}
                                alt="img"
                                width="44px"
                                height="44px">
                            </img>
                    }
                </div>



                <div>
                    {
                        step >= 4
                            ?
                            <img
                                className="progressRecEgg"
                                src={eggClear}
                                alt="img"
                                width="44px"
                                height="44px">
                            </img>
                            :
                            <img
                                className="progressRecEgg"
                                src={eggNo}
                                alt="img"
                                width="44px"
                                height="44px">
                            </img>
                    }
                </div>



                <div>
                    {
                        step >= 5
                            ?
                            <img
                                className="progressRecEgg"
                                src={eggClear}
                                alt="img"
                                width="44px"
                                height="44px">
                            </img>
                            :
                            <img
                                className="progressRecEgg"
                                src={eggNo}
                                alt="img"
                                width="44px"
                                height="44px">
                            </img>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProgressRec;