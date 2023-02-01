import React from 'react';
import './HomePageTab.css';

const HomePageTab = () => {

    // index 0 is the "upcoming" tab
    // index 1 is the "assignments" tab
    var pageIndex = 0;

    // switches between tabs using index passed in
    const switchTab = (num) => {
        var upcoming = document.getElementById("upcoming");
        var assignments = document.getElementById("assignments");
        pageIndex = num;
        if (pageIndex == 0) {
            upcoming.classList.add("list-item-active");
            upcoming.classList.remove("list-item");
            assignments.classList.add("list-item");
            assignments.classList.remove("list-item-active");
        }
        else if (pageIndex == 1) {
            assignments.classList.add("list-item-active");
            assignments.classList.remove("list-item");
            upcoming.classList.add("list-item");
            upcoming.classList.remove("list-item-active");
        }
    }

    return (
        <div className="tab-container">
        <h1>Your Workshops</h1>
            <ul className="navbar">
                <button onClick={() => switchTab(0)} id="upcoming" className="list-item-active">Upcoming</button>
                <button onClick={() => switchTab(1)} id="assignments" className="list-item">Assignments</button>
            </ul>
        </div>
    )
}


export default HomePageTab