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
                            <div className="h-50">
                                <div className="" style={{height: "30%", paddingTop: "10%", textAlign: "center", fontWeight: "bold", fontFamily:"Roboto Mono", fontSize : "20px"}}>
                                    Users
                                </div>
                                <div className="" style={{height: "50%"}}>
                                    <div className="row h-100 pl-2 pr-3">
                                        <div className="col-4">
                                            <div style={{height: "60%"}}>
                                                <p style={{paddingTop: "50%", textAlign: "center", fontFamily:"Avenir", fontSize : "40px"}}>
                                                    68
                                                </p>
                                            </div>
                                            <div style={{height: "40%"}}>
                                                <p style={{textAlign: "center", fontFamily:"Avenir", fontSize : "14px"}}>
                                                    total
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div style={{height: "60%"}}>
                                                <p style={{paddingTop: "50%", textAlign: "center", fontFamily:"Avenir", fontSize : "40px"}}>
                                                    23
                                                </p>
                                            </div>
                                            <div style={{height: "40%"}}>
                                                <p style={{textAlign: "center", fontFamily:"Avenir", fontSize : "14px"}}>
                                                    interns
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div style={{height: "60%"}}>
                                                <p style={{paddingTop: "50%", textAlign: "center", fontFamily:"Avenir", fontSize : "40px"}}>
                                                    45
                                                </p>
                                            </div>
                                            <div style={{height: "40%"}}>
                                                <p style={{textAlign: "center", fontFamily:"Avenir", fontSize : "14px"}}>
                                                    volunteers
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{textAlign: "center", height: "20%"}}>
                                    <a href="/" style={{fontFamily:"Avenir Black", fontSize : "14px"}}>
                                        View member list
                                    </a>
                                </div>
                            </div>
                            <div className="h-50">
                                <div style={{height: "70%"}}>
                                    <div className="row h-100 pl-2 pr-3">
                                        <div className="col-4">
                                            chart 1
                                        </div>
                                        <div className="col-4">
                                            chart 2
                                        </div>
                                        <div className="col-4">
                                            chart 3
                                        </div>
                                    </div>
                                </div>
                                <div style={{textAlign: "center", height: "30%"}}>
                                    <p style={{fontFamily:"Avenir", fontSize : "12px"}}>
                                        <div className="m-1" style={{left: "35%", position: "absolute", height: "9px", width: "9px", backgroundColor: "#F5D6B3"}}/>Interns
                                    </p>
                                    <p style={{fontFamily:"Avenir", fontSize : "12px"}}>
                                        <div className="m-1" style={{left: "35%", position: "absolute", height: "9px", width: "9px", backgroundColor: "#DC7700"}}/>Volunteers
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="user-gender card m-3">

                        </div>
                        <div className="user-re card m-3">

                        </div>
                        <div className="workshops card m-3">
                            <div className="" style={{height: "20%", paddingTop: "10%", textAlign: "center", fontWeight: "bold", fontFamily:"Roboto Mono", fontSize : "20px"}}>
                                Workshops
                            </div>
                            <div className="" style={{height: "50%"}}>
                                <div className="row h-100 pl-2 pr-3">
                                    <div className="col-6">
                                        <div style={{height: "60%"}}>
                                            <p style={{paddingTop: "50%", textAlign: "center", fontFamily:"Avenir", fontSize : "40px"}}>
                                                12
                                            </p>
                                        </div>
                                        <div style={{height: "40%"}}>
                                            <p style={{textAlign: "center", fontFamily:"Avenir", fontSize : "14px"}}>
                                                upcoming
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div style={{height: "60%"}}>
                                            <p style={{paddingTop: "50%", textAlign: "center", fontFamily:"Avenir", fontSize : "40px"}}>
                                                3
                                            </p>
                                        </div>
                                        <div style={{height: "40%"}}>
                                            <p style={{textAlign: "center", fontFamily:"Avenir", fontSize : "14px"}}>
                                                completed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{textAlign: "center", height: "30%"}}>
                                <a href="/" style={{fontFamily:"Avenir Black", fontSize : "14px"}}>
                                    View workshops
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationSubmitted