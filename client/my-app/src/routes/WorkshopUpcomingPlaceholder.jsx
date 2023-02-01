import Header from "../components/Header"
import HomeTab from "../components/HomeTab"
import emptyWorkshop from "../images/empty-workshop.svg"
import React from "react"

const WorkshopUpcomingPlaceholder = () => {
    return (
        <div
            style={{
                backgroundColor: "#FBF9F2"
            }}
        >
            <Header />
            <HomeTab />
            <div
                style={{
                    position: "absolute",
                    left: "28.3%",
                    top: "47.1%",
                    height: "325px",
                }}
            >
                <img src={emptyWorkshop}
                style={{
                    // position: "absolute",
                    // left: "35.5%",
                    // top: "463px",
                    width: "auto",
                    height: "233px",
                    display: "flex",
                    margin: "auto",
                }} 
                />
                <p
                style={{
                    // position: "absolute",
                    // left: "28.3%",
                    // top: "704px",
                    // width: "415px",
                    fontFamily: "Roboto Mono",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "28px",
                    textAlign: "center",
                    color: "#2F2F2F",
                    display: "flex",
                    margin: "auto",
                }}
                >
                    Nothing to see here!  <br />
                    Sign up for more workshops in <br />
                    the Assignments tab
                </p>
            </div>
        </div>
    )
}

export default WorkshopUpcomingPlaceholder