import React from 'react';
import './WorkshopPopup.css';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ClearIcon from '@mui/icons-material/Clear';

import { useHistory } from "react-router-dom";

const StyledCheckCircleIcon = styled(CheckCircleIcon)({
    color: '#429900',
    width: '36px',
    height: '36px',
});

const StyledClearIcon = styled(ClearIcon)({
    color: '#969696',
    width: '24px',
    height: '24px',
});

const WorkshopApprovedPopup = ({ setToggleState }) => {

    const history = useHistory();

    function setToggle() {
        setToggleState(false);

        history.push("/admin-home");
        document.location.reload()
    }

    return (
        <div className="popup-center">
            <div className="popup-container">
                <button onClick={setToggle} className="popup-icon-corner">
                    <StyledClearIcon />
                </button>
                <div className="popup-icon-center">
                    <StyledCheckCircleIcon />
                </div>
                <h1 className="h1-popup">User Approved</h1>
            </div>
        </div>
    )
}


export default WorkshopApprovedPopup;