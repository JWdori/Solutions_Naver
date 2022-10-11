import React from "react";
import {CloseOutlined} from "@ant-design/icons";


const Name = ({NameFunction}) => {
    const [name, setName] = React.useState("");
    const onChangeName = (event) => {
        NameFunction(event.target.value);
    }
    return (
        <>
            <div className="serviceTitleBox" style={{marginTop: "50px"}}>
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

            <input type="text" className="NameBox" maxLength='6' style={{textAlign: "center", borderWidth: "2px"}}
                // onChange={event => setName(event.target.value)}>
                   onChange={onChangeName}>
            </input>

        </>
    );
};

export default Name;
