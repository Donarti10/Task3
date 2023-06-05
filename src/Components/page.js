import React from "react";
import "./page.scss";


function Task( {closeTask} ) {
  return (
    <div className="task">
        <div className="task-container">
            <div className="title">
                <h1>Theme Color</h1>
                <p className="color">Change Theme</p>
            </div>
            <div className="body">
            <p>Font Color </p>
            <div className="box">
                <p>#4444444</p>
                <button className="colors"></button>
            </div>
            </div>
            <div className="p-1">
            <p>Background Color</p>
            <div className="box">
                <p>#FFFFFF</p>
                <button className="colors1"></button>
            </div>
            </div>
            <div className="p-2">
            <p>Button Color</p>
            <div className="box">
                <p>#2072EF</p>
                <button className="colors2"></button>
            </div>
            </div>
            <div className="p-3">
            <p>Button Border Color</p>
            <div className="box">
                <p>#2072EF</p>
                <button className="colors3"></button>
            </div>
            </div>
            <div className="p-4">
            <p>Button Mouseover Color</p>
            <div className="box">
                <p>#0053D1</p>
                <button className="colors4"></button>
            </div>
            </div>
            
            <div className="btn1">
                <button className="button-1" onClick={() => closeTask(false)}>Cancel</button>
                <button className="button-2">Save</button>
            </div>
        </div>
    </div>
  );
}

export default Task;
