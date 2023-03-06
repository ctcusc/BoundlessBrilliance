import React, { useEffect, useState } from "react"
import AdminSidebar from "../components/AdminSideBar";
import "./AdminMetrics.css";
import PieChart from "../components/PieChart";
import PieBarChart from "../components/PieBarChart";
import gdata from "./genderData.json";
import edata from "./raceData.json";
import pdata from "./progressData.json";

const AdminMetrics = () => {
  const colors = [
    "#1398A0",
    "#DC7700",
    "#00747B",
    "rgba(220, 119, 0, 0.3)",
    "rgba(220, 119, 0, 0.7)",
  ];

  const [userData, setUserData] = useState([]);
  const [chapterData, setChapterData] = useState([]);
  const [genderData, setGenderData] = useState([]);
  const [ethnicityData, setEthnicityData] = useState([]);
  const [workshopData, setWorkshopData] = useState([]);

  
  useEffect(() => {
      fetch(`/api/`)
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error(error));

      fetch(`/api/`)
          .then(response => response.json())
          .then(data => setChapterData(data))
          .catch(error => console.error(error));

      fetch(`/api/`)
        .then(response => response.json())
        .then(data => setGenderData(data))
        .catch(error => console.error(error));

      fetch(`/api/`)
        .then(response => response.json())
        .then(data => setEthnicityData(data))
        .catch(error => console.error(error));

      fetch(`/api/`)
        .then(response => response.json())
        .then(data => setWorkshopData(data))
        .catch(error => console.error(error));
        
    }, []);

  return (
    <div>
      <div className="row m-0 p-0">
        <div
          className="m-0 pl-5 pr-5 pb-5"
          style={{ float: "right", width: "80%", height: "100vh" }}
        >
          <div
            id="metrics-header"
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
              height: "10%",
              marginLeft: "-11%",
            }}
          >
            <p
              className="m-3"
              style={{ fontFamily: "Avenir Black", fontSize: "28px", paddingLeft:"10px", }}
            >Metrics</p>
          </div>
          <div className="metrics-grid">
            <div className="users card m-3">
              <div className="h-50">
                <div
                  className=""
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "5%",
                    transform: "translate(-50%, -50%)",
                    fontWeight: "bold",
                    fontFamily: "Roboto Mono",
                    fontSize: "20px",
                  }}
                >Users</div>
                <div className="" style={{ height: "50%" }}>
                  <div className="row h-100 pl-2 pr-3">
                    <div className="col-4">
                      <div style={{ height: "60%" }}>
                        <p
                          style={{
                            position: "relative",
                            top: "210%",
                            left: "53%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            fontFamily: "Avenir",
                            fontSize: "40px",
                          }}
                        >68</p>
                      </div>
                      <div style={{ height: "40%" }} className = "users-under">
                        <p
                          style={{
                            position: "relative",
                            top: "230%",
                            left: "53%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            fontFamily: "Avenir",
                            fontSize: "14px",
                          }}
                        >total</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div style={{ height: "60%" }}>
                        <p
                          style={{
                            position: "relative",
                            top: "210%",
                            left: "52.5%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            fontFamily: "Avenir",
                            fontSize: "40px",
                          }}
                        >23</p>
                      </div>
                      <div style={{ height: "40%" }}>
                        <p
                          style={{
                            position: "relative",
                            top: "230%",
                            left: "52.5%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            fontFamily: "Avenir",
                            fontSize: "14px",
                          }}
                        >interns</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div style={{ height: "60%" }}>
                        <p
                          style={{
                            position: "relative",
                            top: "210%",
                            left: "53%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            fontFamily: "Avenir",
                            fontSize: "40px",
                          }}
                        >45</p>
                      </div>
                      <div style={{ height: "40%" }}>
                        <p
                          style={{
                            position: "relative",
                            top: "230%",
                            left: "53%",
                            transform: "translate(-50%, -50%)",
                            textAlign: "center",
                            fontFamily: "Avenir",
                            fontSize: "14px",
                          }}
                        >volunteers</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "center", height: "20%" }}>
                  <a
                    href="/"
                    style={{  
                      position: "relative",
                      top: "200%",
                      transform: "translate(-50%, -50%)",
                      fontFamily: "Avenir Black", 
                      fontSize: "14px",
                      }}
                  >View member list
                  </a>
                </div>
              </div>
              <div>
              <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", height:"150px", paddingTop:"10px",}}>
                <div style={{width: "25%"}}>
                  <PieBarChart data={pdata} COLORS={colors} />
                </div>
                <div style={{width: "25%"}}>
                  <PieBarChart data={pdata} COLORS={colors} />
                </div>
                <div style={{width: "25%"}}>
                  <PieBarChart data={pdata} COLORS={colors} />
                </div>
              </div>

                <div style={{ textAlign: "center", height: "30%" }}>
                  <p style={{ fontFamily: "Avenir", fontSize: "12px", top: "75%"}}>
                    <div
                      className="m-1"
                      style={{
                        left: "37%",
                        top:"18px",
                        position: "relative",
                        height: "9px",
                        width: "9px",
                        backgroundColor: "#F5D6B3",
                      }}
                    />
                    Interns
                  </p>
                  <p style={{ fontFamily: "Avenir", fontSize: "12px" }}>
                    <div
                      className="m-1"
                      style={{
                        left: "37%",
                        top:"18px",
                        position: "relative",
                        height: "9px",
                        width: "9px",
                        backgroundColor: "#DC7700",
                      }}
                    />
                    Volunteers
                  </p>
                </div>
              </div>
            </div>
            <div className="user-gender card m-3">
              <p
                className="m-3"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Roboto Mono",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                User Gender
              </p>
              <PieChart data={gdata} COLORS={colors} />
            </div>
            <div className="user-re card m-3">
              <p
                className="m-3"
                style={{
                  fontWeight: "bold",
                  fontFamily: "Roboto Mono",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                User Ethnicity
              </p>
              <PieChart data={edata} COLORS={colors} />
            </div>
            <div className="workshops card m-3">
              <div
                className=""
                style={{
                  height: "20%",
                  paddingTop: "3%",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "Roboto Mono",
                  fontSize: "20px",
                }}
              >
                Workshops
              </div>
              <div className="" style={{ height: "50%" }}>
                <div className="row h-100 pl-2 pr-3">
                  <div className="col-6">
                    <div style={{ height: "60%" }}>
                      <p
                        style={{
                          position: "relative",
                          top: "80%",
                          left: "53%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                          fontFamily: "Avenir",
                          fontSize: "40px",
                        }}
                      >
                        12
                      </p>
                    </div>
                    <div style={{ height: "40%" }}>
                      <p
                        style={{
                          position: "relative",
                          top: "40%",
                          left: "54%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                          fontFamily: "Avenir",
                          fontSize: "14px",
                        }}
                      >
                        upcoming
                      </p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div style={{ height: "60%" }}>
                      <p
                        style={{
                          position: "relative",
                          top: "80%",
                          left: "53%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                          fontFamily: "Avenir",
                          fontSize: "40px",
                        }}
                      >
                        3
                      </p>
                    </div>
                    <div style={{ height: "40%" }}>
                      <p
                        style={{
                          position: "relative",
                          top: "40%",
                          left: "54%",
                          transform: "translate(-50%, -50%)",
                          textAlign: "center",
                          fontFamily: "Avenir",
                          fontSize: "14px",
                        }}
                      >
                        completed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: "center", height: "30%" }}>
                <a
                  href="/"
                  style={{ fontFamily: "Avenir Black", fontSize: "14px" }}
                >
                  View workshops
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMetrics;
