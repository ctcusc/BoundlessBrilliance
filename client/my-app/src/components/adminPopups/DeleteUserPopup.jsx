import React from 'react';
import './WorkshopPopup.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const OutlinedButton = styled(Button)({
    color: '#1398A0',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '550',
    fontSize: '16px',
    lineHeight: '24px',
    borderColor: '#1398A0',
    borderWidth: "2px",
    margin: '2%',
    padding: '8px',
    paddingLeft: '30px',
    paddingRight: '30px',
    textTransform: 'none',
    '&:hover': {
        background: 'rgba(19, 152, 160, 0.1)',
        borderColor: '#1398A0',
        borderWidth: "2px",
    },
});

const ContainedButton = styled(Button)({
    backgroundColor: '#1398A0',
    color: 'white',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '550',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '2%',
    padding: '8px',
    paddingLeft: '30px',
    paddingRight: '30px',
    textTransform: 'none',
    '&:hover': {
        background: 'rgba(19, 152, 160, 0.6)',
    },
});

const DeleteUserPopup = ({setToggleState, setToggleYesState, name, user_id}) => {

    const history = useHistory();

    function setToggle() {
        setToggleState(false);
    }

    function setToggleYes() {
        setToggleState(false);
        setToggleYesState(true);

        const rejectUser = async () => {
            const response = await fetch('/api/rejectUser', {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ user_id: user_id}),
            });
        }
        rejectUser();
    }

    return (
        <div className="popup-center">
            <div className="popup-container">
                <p className="p-popup">You are <span style={{color: '#D90000'}}>deleting</span> volunteer:</p>
                <h2 className="h2-popup">{name}</h2>
                <p className="p-popup">This cannot be undone.</p>
                <div className="flex-horizontal">
                    <OutlinedButton onClick={setToggle} variant="outlined">No, go back</OutlinedButton>
                    <ContainedButton onClick={setToggleYes} variant="contained">Yes, delete</ContainedButton>
                </div>
            </div>
            
        </div>
    )
}


export default DeleteUserPopup