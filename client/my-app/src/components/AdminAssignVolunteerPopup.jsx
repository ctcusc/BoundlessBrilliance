import './WorkshopPopup.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Autocomplete, InputAdornment, TextField, Paper, Chip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useEffect, useState } from "react";
import volunteer_list from "./volunteers.json";

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
    useEffect(() => {
        fetch(`/api/allActiveUserNames`)
            .then(response => response.json())
            .then(data => setVolunteers(data))
            .catch(error => console.error(error));

        fetch(`/api/allActiveUserIDName`)
            .then(response => response.json())
            .then(data => setSelectedVolunteersId(data))
            .catch(error => console.error(error));
        
        const workshopId = props.workshop.id; 
        fetch(`/api/userAssignedWorkshop?workshop_id=${workshopId}`)
            .then(response => response.json())
            .then(data => setSelectedVolunteers(data))
            .catch(error => console.error(error));

        fetch(`/api/userAssignedWorkshop?workshop_id=${workshopId}`)
            .then(response => response.json())
            .then(data => setOriginalVolunteers(data))
            .catch(error => console.error(error));
        
        fetch(`/api/userAssignedWorkshopStatusA?workshop_id=${workshopId}`)
            .then(response => response.json())
            .then(data => setOriginalAccepted(data))
            .catch(error => console.error(error));
        
        fetch(`/api/userAssignedWorkshopStatusB?workshop_id=${workshopId}`)
            .then(response => response.json())
            .then(data => setOriginalUndecided(data))
            .catch(error => console.error(error));

        fetch(`/api/userAssignedWorkshopStatusC?workshop_id=${workshopId}`)
            .then(response => response.json())
            .then(data => setOriginalDeclined(data))
            .catch(error => console.error(error));
        
    }, []);

    const [SearchValues, setSearchValues] = useState(false);

    // The following vars are used for backend
    const [volunteers, setVolunteers] = useState([]); //all avaliable volunteers
    const [selectedVolunteers, setSelectedVolunteers] = useState([]); //volunteers that are already assigned
    const [selectedVolunteersId, setSelectedVolunteersId] = useState([]); //ID of volunteers
    const [OriginalVolunteers, setOriginalVolunteers] = useState([]); //original list used for comparisons

    // The following vars are used for frontend display
    const [OriginalAccepted, setOriginalAccepted] = useState([]); //original list -> accepted
    const [OriginalUndecided, setOriginalUndecided] = useState([]); //original list -> undecided
    const [OriginalDeclined, setOriginalDeclined] = useState([]); //original list -> declined
    const [NewlySelected, setNewlySelected] = useState([]); //original list -> declined

    const handleVolunteerSelection = (event, value) => {
        if (value  && !selectedVolunteers.includes(value)) {
        setSelectedVolunteers([...selectedVolunteers, value]);
        }

        if (value  && !NewlySelected.includes(value)) {
            setNewlySelected([...NewlySelected, value]);
        }
    };

    const handleDelete = (volunteerToDelete) => () => {
        setSelectedVolunteers(selectedVolunteers.filter((volunteer) => volunteer !== volunteerToDelete));
        setOriginalAccepted(OriginalAccepted.filter((volunteer) => volunteer !== volunteerToDelete));
        setOriginalUndecided(OriginalUndecided.filter((volunteer) => volunteer !== volunteerToDelete));
        setOriginalDeclined(OriginalDeclined.filter((volunteer) => volunteer !== volunteerToDelete));
        setNewlySelected(NewlySelected.filter((volunteer) => volunteer !== volunteerToDelete));
    };

    const filteredOptions = volunteer_list.filter((volunteer) => !selectedVolunteers.includes(volunteer));

    function setToggle() {
        setToggleState(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        async function addAssignment(user_id, workshop_id) {
            const response = await fetch('/api/assignUser', {  
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    { 
                        'user_id': user_id, 
                        'workshop_id': workshop_id, 
                    }),
            })
            const data = await response.json();
        }

        async function removeAssignment(user_id, workshop_id) {
            const response = await fetch(`/api/removeAssignment?user_id=${user_id}&workshop_id=${workshop_id}`, {  
                method: 'delete',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                  'user_id': user_id, 
                  'workshop_id': workshop_id, 
                }),
              });
            const data = await response.json();
        }

        function getUserIdByName(name) {
            const user = selectedVolunteersId.find(user => user.name === name);
            return user ? user.user_id : null;
        }

        function isNameInArray(name, array) {
            return array.includes(name);
          }

        var workshop_id = props.workshop.id;
        for (let i = 0;i < selectedVolunteers.length;i ++) {
            //Make API Call
            if(isNameInArray(selectedVolunteers[i], OriginalVolunteers) == false){
                var user_id = (getUserIdByName(selectedVolunteers[i]));
                addAssignment(user_id, workshop_id);
            }
        }

        for (let i = 0;i < OriginalVolunteers.length;i ++) {
            //Make API Call
            if(isNameInArray(OriginalVolunteers[i], selectedVolunteers) == false){
                user_id = (getUserIdByName(OriginalVolunteers[i]));
                removeAssignment(user_id, workshop_id);
            }
        }

        document.location.reload();

    };

    return (
        <div className="popup-center">
            <div className="volunteer-container">
                <div style={{ marginBottom: '20%' }}>
                    <button onClick={setToggle} className="popup-admin-icon-corner">
                        <StyledClearIcon />
                    </button>
                    <br/>
                    <br/>
                </div>
                <div className="popup-full-width">
                <div style={{fontSize: '16px', fontFamily: 'Avenir', top: '30px', left: '30px'}}>Assign Volunteer</div>
                <div style={{fontSize: '24px', fontFamily: 'Avenir', fontWeight: 'bold', top: '60px', left: '30px'}}> {props.workshop.name}</div>
                <div className='assign-chips'>
                    {OriginalAccepted.map((volunteer) => (
                    <Chip 
                        style={{ borderColor: "#1398A0", color: "#0e8830",  backgroundColor:'#FFFFFF', mr: 1,}} 
                        key={volunteer} 
                        variant="outlined" 
                        label={volunteer} 
                        onDelete={handleDelete(volunteer)}
                        deleteIcon={<ClearIcon style={{ color: '#1398A0' }} />}
                    />
                    ))}
                    {OriginalDeclined.map((volunteer) => (
                    <Chip 
                        style={{ borderColor: "#1398A0", color: "#d90000",  backgroundColor:'#FFFFFF',  mr: 1,}} 
                        key={volunteer} 
                        variant="outlined" 
                        label={volunteer} 
                        onDelete={handleDelete(volunteer)}
                        deleteIcon={<ClearIcon style={{ color: '#1398A0' }} />}
                    />
                    ))}
                     {OriginalUndecided.map((volunteer) => (
                    <Chip 
                        style={{ borderColor: "#1398A0", color: "#1398A0", backgroundColor:'#FFFFFF',  mr: 1,}} 
                        key={volunteer} 
                        variant="outlined" 
                        label={volunteer} 
                        onDelete={handleDelete(volunteer)}
                        deleteIcon={<ClearIcon style={{ color: '#1398A0' }} />}
                    />
                    ))}
                     {NewlySelected.map((volunteer) => (
                    <Chip 
                        style={{ borderColor: "#1398A0", color: "#1398A0", backgroundColor:'#FFFFFF',  mr: 1,}} 
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
                        <ContainedButton onClick={handleSubmit}>Update</ContainedButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAssignVolunteerPopup;