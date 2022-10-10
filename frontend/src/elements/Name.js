import React from "react";
import { CloseOutlined } from "@ant-design/icons";



const Name = (props) => {


    return (
        <>
            <div className="serviceTitleBox" style={{marginTop:"50px"}}>
                <div className="NameQ" style={{color: "white"}}>
                    당신의&nbsp;
                </div>
                <div className="NameQ">
                    이름
                </div>
                <div className="NameQ" style={{color: "white"}}>
                    은 . . . ?
                </div>

            </div>

            <input type="text" className="NameBox" maxlength='6' style={{ textAlign:"center", borderWidth:"2px"}}>

            </input>
        </>
    );
};

export default Name;
