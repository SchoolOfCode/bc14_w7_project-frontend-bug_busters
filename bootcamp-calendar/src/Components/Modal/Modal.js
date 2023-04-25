import React from "react";
import "./modal.css";

function Modal({data, setModalToggle}) {
    console.log(data);
    return (
        <div className="modalBackground" >
            <div className="btnContainer">
            <button className="closePopUp" onClick={() => {setModalToggle(false)}}>X</button>
            </div>
            <div className="modalContent">
            <div className="topics"> {data[0].topics} </div>
            <div className="workshopRepoLinks"> {data[0].workshopRepoLinks} </div>
            <div className="recordings"> {data[0].recordings} </div>
            <div className="furtherResources"> {data[0].furtherResources} </div>
            </div>
        </div>
     
    )
}

export default Modal;