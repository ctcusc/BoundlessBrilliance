import React from 'react'
import { useState } from 'react';
import LoginLogo from "../images/login_logo.svg"
import { ReactComponent as ProfileIcon } from "../images/profile_icon.svg"
import { ReactComponent as MetricsIcon } from "../images/metrics_icon.svg"
import { ReactComponent as WorkshopsIcon } from "../images/toolbar_icon.svg"


const AdminSideBar = (props) => {

    const [button1Color, setButton1Color] = useState('rgba(0, 167, 177, 0.1)');
    const [button2Color, setButton2Color] = useState('white');
    const [button3Color, setButton3Color] = useState('white');
    const [button4Color, setButton4Color] = useState('white');

    const [button1Text, setButton1Text] = useState("#00747B");
    const [button2Text, setButton2Text] = useState("#9F9F9F");
    const [button3Text, setButton3Text] = useState("#9F9F9F");
    const [button4Text, setButton4Text] = useState("#9F9F9F");


    function handleButton1Click() {
        props.setTab(1);
        setButton1Color('rgba(0, 167, 177, 0.1)');
        setButton2Color('white');
        setButton3Color('white');
        setButton4Color('white');
        setButton1Text("#00747B");
        setButton2Text("#9F9F9F");
        setButton3Text("#9F9F9F");
        setButton4Text("#9F9F9F");
    }

    function handleButton2Click() {
        props.setTab(2);
        setButton1Color('white');
        setButton2Color('rgba(0, 167, 177, 0.1)');
        setButton3Color('white');
        setButton4Color('white');
        setButton1Text("#9F9F9F");
        setButton2Text("#00747B");
        setButton3Text("#9F9F9F");
        setButton4Text("#9F9F9F");
    }

    function handleButton3Click() {
        props.setTab(3);
        setButton1Color('white');
        setButton2Color('white');
        setButton3Color('rgba(0, 167, 177, 0.1)');
        setButton4Color('white');
        setButton1Text("#9F9F9F");
        setButton2Text("#9F9F9F");
        setButton3Text("#00747B");
        setButton4Text("#9F9F9F");
    }

    function handleButton4Click() {
        props.setTab(4);
        setButton1Color('white');
        setButton2Color('white');
        setButton3Color('white');
        setButton4Color('rgba(0, 167, 177, 0.1)');
        setButton1Text("#9F9F9F");
        setButton2Text("#9F9F9F");
        setButton3Text("#9F9F9F");
        setButton4Text("#00747B");
    }

    return (


        <div style={{
            backgroundColor: "white", width: "20%", minHeight: "100%", color: "#9F9F9F", fontFamily: "Avenir Black", fontWeight: "900", fontSize: "16px", minWidth: "240px"
        }}>
            <div style={{ width: "100%", alignItems: "center" }}>
                <img style={{ height: "137px", display: "flex", margin: "auto", marginBottom: "139px" }} src={LoginLogo} alt="Card image cap" />
                <button onClick={handleButton1Click} style={{ backgroundColor: button1Color, color: button1Text, width: "84%", height: "46px", borderRadius: "7px", border: "none", display: "flex", margin: "auto", marginBottom: "18px", paddingLeft: "14px", paddingTop: "12px", paddingBottom: "12px", gap: "12px" }}
                >
                    <WorkshopsIcon style={{ fill: button1Text }} />
                    Workshops
                </button>

                <button onClick={handleButton2Click} style={{ backgroundColor: button2Color, color: button2Text, width: "84%", height: "46px", borderRadius: "7px", border: "none", display: "flex", margin: "auto", marginBottom: "18px", paddingLeft: "14px", paddingTop: "12px", paddingBottom: "12px", gap: "12px" }}>
                    <ProfileIcon style={{ fill: button2Text }} />
                    Signups
                </button>

                <button onClick={handleButton3Click} style={{ backgroundColor: button3Color, color: button3Text, width: "84%", height: "46px", borderRadius: "7px", border: "none", display: "flex", margin: "auto", marginBottom: "18px", paddingLeft: "14px", paddingTop: "12px", paddingBottom: "12px", gap: "12px" }}>
                    <MetricsIcon style={{ fill: button3Text }} />
                    Metrics
                </button>

                <button onClick={handleButton4Click} style={{ backgroundColor: button4Color, color: button4Text, width: "84%", height: "46px", borderRadius: "7px", border: "none", display: "flex", margin: "auto", marginBottom: "18px", paddingLeft: "14px", paddingTop: "12px", paddingBottom: "12px", gap: "12px" }}>
                    <ProfileIcon style={{ fill: button4Text }} />
                    Member List
                </button>
            </div>
        </div >
    )
}

export default AdminSideBar
