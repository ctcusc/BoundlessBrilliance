import React from "react";
import AdminSidebar from "../components/AdminSideBar"
import "./AdminMetrics.css"

const ApplicationSubmitted = () => {
    return (
        <div>
            <div className="row m-0 p-0">
                <div className="m-0 p-0" style={{float: "left", width: "20%"}}>
                    <AdminSidebar/>
                </div>
                <div className="m-0 pl-5 pr-5 pb-5" style={{float: "right", width: "80%", height: "100vh"}}>
                    <div id="metrics-header" style={{display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "column", height: "10%"}}>
                        <p className="m-3" style={{fontFamily:"Avenir Black", fontSize : "28px"}}>
                            Metrics
                        </p>
                    </div>
                    <div className="metrics-grid">
                        <div className="users card m-3">

                        </div>
                        <div className="user-age card m-3">

                        </div>
                        <div className="user-re card m-3">

                        </div>
                        <div className="user-gender card m-3">

                        </div>
                        <div className="workshops card m-3">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationSubmitted