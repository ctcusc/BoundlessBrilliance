import './WorkshopPopup.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Autocomplete, InputAdornment, TextField, Paper, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import volunteer_list from './volunteers.json'
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

const VListComponent = ({ myList }) => {
    return (
      <div>
        {myList.map((item) => (
          <Chip label={item}></Chip>
        ))}
      </div>
    );
  };

const AdminAssignVolunteerPopup = ({props, setToggleState}) => {
    const [SearchValues, setSearchValues] = useState(false);
    const [volunteers, setVolunteers] = useState([]);
    const [selectedVolunteers, setSelectedVolunteers] = useState([]);

    const handleVolunteerSelection = (event, value) => {
        if (value  && !selectedVolunteers.includes(value)) {
        setSelectedVolunteers([...selectedVolunteers, value]);
        }
    };

    const handleDelete = (volunteerToDelete) => () => {
        setSelectedVolunteers(selectedVolunteers.filter((volunteer) => volunteer !== volunteerToDelete));
    };

    const filteredOptions = volunteer_list.filter((volunteer) => !selectedVolunteers.includes(volunteer));

    function setToggle() {
        setToggleState(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <div className="popup-center">
            <div className="volunteer-container">
                <div style={{ marginBottom: '20%' }}>
                    <div style={{fontSize: '16px', fontFamily: 'Avenir', position: 'absolute', top: '30px', left: '30px'}}>Assign Volunteer</div>
                    <div style={{fontSize: '24px', fontFamily: 'Avenir', fontWeight: 'bold', position: 'absolute', top: '60px', left: '30px'}}>Workshop Title</div>
                    <button onClick={setToggle} className="popup-admin-icon-corner">
                        <StyledClearIcon />
                    </button>
                    <br/>
                    <br/>
                </div>
                <div className="popup-full-width">
                <div style={{ display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '4px', 
                    margin: '4px 0',  
                }}>
                    {selectedVolunteers.map((volunteer) => (
                    <Chip 
                        style={{ borderColor: "#1398A0", color: "#1398A0", mr: 1,}} 
                        key={volunteer} 
                        variant="outlined" 
                        label={volunteer} 
                        onDelete={handleDelete(volunteer)}
                        deleteIcon={<ClearIcon style={{ color: '#1398A0' }} />}
                    />
                    ))}
                </div>
                    <div className="popup-searchbar">
                        <Autocomplete
                            disablePortal
                            options={filteredOptions}
                            fullWidth
                            onChange={handleVolunteerSelection}

                            sx={{ mb: '30px', mt: '30px', '& .MuiInputBase-root': { borderRadius: '14px !important' }, '& .MuiAutocomplete-popupIndicator': { display: 'none' }}}
                            renderInput={(params) => <TextField 
                                {...params}
                                placeholder="Search for a volunteer"
                                InputProps={{
                                    ...params.InputProps,
                                    style: {padding: '6px', fontSize: '14px' }
                                }
                                } 
                                />}
                        />
                    </div>

                    <div className="popup-assign-button">
                        <ContainedButton onClick={handleSubmit}>Assign</ContainedButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAssignVolunteerPopup;