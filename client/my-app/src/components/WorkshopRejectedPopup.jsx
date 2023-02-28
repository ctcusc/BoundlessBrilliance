import React from 'react';
import './WorkshopPopup.css';
import { styled } from '@mui/material/styles';
import HighlightOffIcon from '@mui/icons-material/HighlightOffOutlined';
import ClearIcon from '@mui/icons-material/Clear';

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

const WorkshopRejectedPopup = () => {
    return (
        <div className="popup-center">
            <div className="popup-container">
                <button className="popup-icon-corner">
                    <StyledClearIcon />
                </button>
                <div className="popup-icon-center">
                    <StyledHighlightOffIcon />
                </div>
                <h1 className="h1-popup">Workshop Declined</h1>
                <p className="p-popup">To undo this action, you must <span><a className="a-popup" href="#">contact admin</a></span></p>
            </div>
            
        </div>
    )
}


export default WorkshopRejectedPopup;