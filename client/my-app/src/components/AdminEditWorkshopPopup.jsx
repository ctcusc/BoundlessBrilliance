import './WorkshopPopup.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import headerLogo from '../images/login_logo.svg';
import ClearIcon from '@mui/icons-material/Clear';
import moment from 'moment';
import React, { useState } from 'react';


const StyledTextField = styled(TextField) ({
    marginBottom: '7px',
    marginTop: '7px',
    "& fieldset": { 
        border: 'none',
    },
    '& legend': { 
        display: 'none',
    },
    input: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        paddingTop: '17px',
        paddingBottom: '15px'
    }
});

const MultiLineTextField = styled(TextField) ({
    marginBottom: '7px',
    marginTop: '7px',
    "& fieldset": { 
        border: 'none',
    },
    '& legend': { 
        display: 'none',
    },
    textarea: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        marginTop: '-10px',
    }
});

const ContainedButton = styled(Button)({
    backgroundColor: '#1398A0',
    color: 'white',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '550',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '0',
    padding: '8px',
    paddingLeft: '30px',
    paddingRight: '30px',
    textTransform: 'none',
    '&:hover': {
        background: 'rgba(19, 152, 160, 0.6)',
    },
});

const StyledClearIcon = styled(ClearIcon)({
    color: '#969696',
    width: '24px',
    height: '24px',
});

const AdminEditWorkshopPopup = ({props, setToggleState}) => {
    const [formValues, setFormValues] = useState(props.workshop);

    function setToggle() {
        setToggleState(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        async function sendData(formValues) {
            const response = await fetch('/api/editWorkshop', {  
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    { 
                        'workshop_name': formValues.name, 
                        'workshop_description': formValues.description, 
                        'workshop_date': formValues.date, 
                        'workshop_start_time': formValues.time,  
                        'workshop_end_time': formValues.endtime,
                        'workshop_chapter': formValues.chapter,
                        'workshop_is_virtual': formValues.isvirtual,
                        'workshop_location': formValues.location, 
                        'workshop_id': formValues.id,
                    }),
            })
            const data = await response.json();
        }

        sendData(formValues);
        
        setToggle();
    };

    return (
        <div className="popup-center">
            <div className="admin-container">
                <button onClick={setToggle} className="popup-admin-icon-corner">
                    <StyledClearIcon />
                </button>
                <div className="popup-inputs-container">
                    <StyledTextField 
                        id="filled-basic" 
                        defaultValue={props.workshop.name} 
                        onChange={handleInputChange} 
                        variant="filled" 
                        InputProps={{ disableUnderline: true }}
                    />
                    <StyledTextField
                        id="date"
                        type="date"
                        defaultValue={moment(props.workshop.date).format("YYYY-MM-DD")}
                        onChange={handleInputChange}
                        className="popup-half-textfield"
                        InputProps={{ disableUnderline: true, shrink: "true" }}
                    />
                     <StyledTextField 
                        id="filled-basic" 
                        defaultValue={props.workshop.time} 
                        onChange={handleInputChange} 
                        className="popup-half-textfield" 
                        variant="filled" 
                        InputProps={{ disableUnderline: true, shrink: "false" }}
                    />
                    <StyledTextField 
                        id="filled-basic" 
                        defaultValue={props.workshop.location} 
                        onChange={handleInputChange} 
                        variant="filled" 
                        InputProps={{ disableUnderline: true, shrink: "false" }}
                    />
                    <div>
                        <p className="popup-description">Workshop Description</p>
                        <MultiLineTextField 
                            className="popup-full-width" 
                            id="filled-basic" 
                            defaultValue={props.workshop.description} 
                            onChange={handleInputChange} 
                            variant="filled" 
                            InputProps={{ disableUnderline: true, shrink: "false" }} 
                            multiline={true}
                            rows={5}
                        />
                    </div>
                </div>
                <div className="popup-admin-right">
                        <img className="popup-logo" src={headerLogo} />
                        <div className="popup-update-button">
                            <ContainedButton onClick={handleSubmit}>Update</ContainedButton>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AdminEditWorkshopPopup;