import React from "react";
import eggNo from "../images/game/egg_no.png"
import eggClear from "../images/game/egg_clear.png"

const ProgressRec = ({width,step}) => {
    return (
        <div>
            <div className="progressRec-div"  style={{ width: width }}>
                <div>
                    {
                        step >= 0
                            ?
                            <img
                                className="progressRecEgg"
                                src={eggClear}
                                alt="img"
                                width="44px"
                                height="54px">
                            </img>
                            :
                            <img
                                className="progressRecEgg"
                                src={eggNo}
                                alt="img"
                                width="44px"
                                height="54px">
                            </img>
                    }
                </div>


                <div>
                    {
                        step >= 1
                            ?
                            <img
                                className="progressRecEgg"
                                src={eggClear}
                                alt="img"
                                width="44px"
                                height="54px">
                            </img>
                            :
                            <img
                                className="progressRecEgg"
                                src={eggNo}
                                alt="img"
                                width="44px"
                                height="54px">
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
                                height="54px">
                            </img>
                            :
                            <img
                                className="progressRecEgg"
                                src={eggNo}
                                alt="img"
                                width="44px"
                                height="54px">
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
                                height="54px">
                            </img>
                            :
                            <img
                                className="progressRecEgg"
                                src={eggNo}
                                alt="img"
                                width="44px"
                                height="54px">
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
                                height="54px">
                            </img>
                            :
                            <img
                                className="progressRecEgg"
                                src={eggNo}
                                alt="img"
                                width="44px"
                                height="54px">
                            </img>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProgressRec;