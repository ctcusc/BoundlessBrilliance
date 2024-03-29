import emptyWorkshop from "../images/empty-workshop.svg"
import React from "react"

const WorkshopUpcomingPlaceholder = () => {
    return (
        <div
            style={{
                backgroundColor: "#FBF9F2"
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    margin: 'auto',
                    flexDirection: 'column',
                    height: "325px",
                }}
            >
                <img src={emptyWorkshop}
                    alt="No upcoming workshops image"
                    style={{
                        width: "auto",
                        height: "233px",
                        display: "flex",
                        margin: "auto",
                    }}
                />
                <p
                    style={{
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