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
                <img src={emptyWorkshopAssignment}
                    style={{
                        width: "auto",
                        height: "233px",
                        display: "flex",
                        margin: "auto",
                    }}
                />
                <p
                    style={{
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