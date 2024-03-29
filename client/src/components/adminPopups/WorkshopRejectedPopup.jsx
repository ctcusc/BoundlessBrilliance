import React from 'react';
import './WorkshopPopup.css';
import { styled } from '@mui/material/styles';
import HighlightOffIcon from '@mui/icons-material/HighlightOffOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import { useHistory } from "react-router-dom";

const StyledHighlightOffIcon = styled(HighlightOffIcon)({
    color: '#e32727',
    width: '36px',
    height: '36px',
});

const StyledClearIcon = styled(ClearIcon)({
    color: '#969696',
    width: '24px',
    height: '24px',
});

const WorkshopRejectedPopup = ({ setToggleState }) => {

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
                    <StyledHighlightOffIcon />
                </div>
                <h1 className="h1-popup">Volunteer Declined</h1>
            </div>
        </div>
    )
}


export default WorkshopRejectedPopup;