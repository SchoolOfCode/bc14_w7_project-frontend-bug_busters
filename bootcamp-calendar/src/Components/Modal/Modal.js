import React from "react";
import "./modal.css";

function Modal({ filteredData, setModalToggle }) {
    return (
        <div className="modalBackground" >
            <div className="btnContainer">
                <button className="closePopUp" onClick={() => {setModalToggle(false)}}>X</button>
            </div>
            <div className="modalContent">
                <div className="sectionTitle">Topics</div>
                {filteredData.map(item => (
                    <div key={item.id}>
                        <div className="topics">{item.topics}</div>
                    </div>
                ))}
                <div className="sectionTitle">Workshop Repository Links</div>
                {filteredData.map(item => (
                    <div key={item.id}>
                        <div className="workshopRepoLinks">{item.workshopRepoLinks}</div>
                    </div>
                ))}
                <div className="sectionTitle">Recordings</div>
                {filteredData.map(item => (
                    <div key={item.id}>
                        <div className="recordings">{item.recordings}</div>
                    </div>
                ))}
                <div className="sectionTitle">Further Resources</div>
                {filteredData.map(item => (
                    <div key={item.id}>
                        <div className="furtherResources">{item.furtherResources}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Modal;
