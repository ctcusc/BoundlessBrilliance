import React from 'react';
import './WorkshopPopup.css';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ClearIcon from '@mui/icons-material/Clear';

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

const WorkshopApprovedPopup = () => {
    return (
        <div className="popup-center">
            <div className="popup-container">
                <button className="popup-icon-corner">
                    <StyledClearIcon />
                </button>
                <div className="popup-icon-center">
                    <StyledCheckCircleIcon />
                </div>
                <h1 className="h1-popup">Workshop Approved</h1>
                <p className="p-popup">To undo this action, you must <span><a className="a-popup" href="#">contact admin</a></span></p>
            </div>
            
        </div>
    )
}


export default WorkshopApprovedPopup;