import React from "react";
import {CloseOutlined} from "@ant-design/icons";


const Name = ({nameFunction}) => {
    const [name, setName] = React.useState("");
    const onChangeName = (event) => {
        nameFunction(event.target.value);
    }
    return (
        <>

            <input id="user_id" type="text" className="NameBox" name="dd"maxLength='6' placeholder="닉네임을 입력하세요" style={{color:"#FFAE68", marginTop:"80px"}}
                   onChange={onChangeName}>
            </input>
        </>
    );
};

export default Name;
