import React from "react";

function Modal({setModalToggle}) {
    return (
        <div className="modalBackground" >
            <button className="closePopUp" onClick={() => {setModalToggle(false)}}>X</button>
            <div className="topics"> testing if this works to some extent</div>
            <div className="workshopRepoLinks"></div>
            <div className="recordings"></div>
            <div className="furtherResources"></div>
        </div>
     
    )
}

export default Modal;