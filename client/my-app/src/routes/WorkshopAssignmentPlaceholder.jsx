import Header from "../components/Header"
import HomeTab from "../components/HomeTab"
import emptyWorkshopAssignment from "../images/empty-workshop-assignment.svg"
import React from "react"
import "../index"

const WorkshopAssignmentPlaceholder = () => {
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
                <img src={emptyWorkshopAssignment}
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
                    paddingTop: "44px",
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
                    Stay tuned for more assignments
                </p>
            </div>
        </div>
    )
}

export default WorkshopAssignmentPlaceholder