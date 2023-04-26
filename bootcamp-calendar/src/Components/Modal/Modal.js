import React from "react";
import "./modal.css";

function Modal({ filteredData, setModalToggle }) {
    return (
        <div data-testid="modalBackground" className="modalBackground" >
            <div className="btnContainer">
                <button className="closePopUp" onClick={() => {setModalToggle(false)}}>X</button>
            </div>
            <div className="modalContent">
                {/* map() through filteredData object and output JSX for each entry */}
                {filteredData.map(item => (
                    <div key={item.id}>
                        <div className="topics">{item.topics}</div>
                        <div className="workshopRepoLinks">{item.workshopRepoLinks}</div>
                        <div className="recordings">{item.recordings}</div>
                        <div className="furtherResources">{item.furtherResources}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Modal;