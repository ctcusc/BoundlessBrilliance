import React from 'react';
import './WorkshopPopup.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

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

const ApproveWorkshopPopup = ({ setToggleState, setToggleYesState, firstname, lastname, user_id }) => {

    function setToggle() {
        setToggleState(false);
    }

    function setToggleYes() {
        setToggleState(false);
        setToggleYesState(true);

        const approveUser = async () => {
            await fetch('/api/approveUser', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: user_id }),
            });
        }
        approveUser();
    }


    return (
        <div className="popup-center">
            <div className="popup-container">
                <p className="p-popup">You are <span style={{ color: '#0E8830' }}>accepting</span> new volunteer:</p>
                <h2 className="h2-popup">{firstname + " " + lastname}</h2>
                <p className="p-popup">This cannot be undone.</p>
                <div className="flex-horizontal">
                    <OutlinedButton onClick={setToggle} variant="outlined">No, go back</OutlinedButton>
                    <ContainedButton onClick={setToggleYes} variant="contained">Yes, approve</ContainedButton>
                </div>
            </div>
        </div>
    )
}


export default ApproveWorkshopPopup;