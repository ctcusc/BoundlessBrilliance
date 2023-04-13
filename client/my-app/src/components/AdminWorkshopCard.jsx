import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

import '../index.css'
import AdminEditWorkshopPopup from './AdminEditWorkshopPopup';
import AdminAssignVolunteerPopup from './AdminAssignVolunteerPopup';
import DeleteWorkshopPopup from './adminPopups/DeleteWorkshopPopup';
import WorkshopDeletedPopup from './adminPopups/WorkshopDeletedPopup'

import { ReactComponent as DateIcon } from '../images/date_icon.svg'
import { ReactComponent as TimeIcon } from '../images/time_icon.svg';
import { ReactComponent as LocationIcon } from '../images/location_icon.svg';
import DeleteIcon from '@mui/icons-material/Delete';

const cardStyles = {
    minWidth: 275,
    dropShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: '30px',
    height: '320px'
};

const cardContentStyles = {
    padding: '45px',
    margin: 'auto',
    height: '320px'
}

const cardHeaderStyles = {
    fontSize: 20,
    fontFamily: 'Roboto Mono',
    fontWeight: 700,
    color: '#222222',
    mb: '20px'
};

const cardDetailStyles = {
    paddingLeft: 1,
    textAlign: 'center',
    lineHeight: '20px',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: 500,
    color: '#222222'
};

const numberStyles = {
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '40px',
    lineHeight: '55px',
};

const numberLabelStyles = {
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '19px',
}

const numbersWrapperStyles = {
    display: "flex",
    margin: 'auto',
    marginTop: '15px',
    alignItems: 'center',
    textAlign: 'center',
    width: '80%',
    justifyContent: 'space-between'
}

const verticalLine = {
    borderRight: '3px solid lightgray',
    height: '45px'
}

export default function WorkshopCard(props) {


    const [toggleDelete, setToggleDelete] = useState(false);
    const [toggleYesDelete, setToggleYesDelete] = useState(false);

    const [toggleEditPopup, setToggleEditPopup] = useState(false);
    const [toggleAssignPopup, setToggleAssignPopup] = useState(false);

    const togglePopup = () => {
        setToggleEditPopup(!toggleEditPopup);
    };
    const setAssignPopup = () => {
        setToggleAssignPopup(!toggleAssignPopup);
    };

    let editPopup;
    if (toggleEditPopup) {
        editPopup = <AdminEditWorkshopPopup props={props} setToggleState={setToggleEditPopup}/>;
    }
    let AssignPopup;
    if (toggleAssignPopup) {
        AssignPopup = <AdminAssignVolunteerPopup props={props} setToggleState={setAssignPopup}/>;
    }

    return (

        <Card sx={cardStyles}>

            {editPopup}
            {AssignPopup}

            <CardContent sx={cardContentStyles}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={cardHeaderStyles} color="text.secondary" gutterBottom>
                        {props.workshop.name}
                    </Typography>
                    <div style={{ display: "flex", width: '90px', justifyContent: "space-between" }}>
                        <PersonAddAlt1Icon onClick={() => setAssignPopup(props)} sx={{ color: '#1398A0', cursor: 'pointer' }} />
                        <EditIcon onClick={togglePopup} sx={{ color: '#616161', cursor: 'pointer' }} />
                        <DeleteIcon onClick={() => setToggleDelete(true)} sx={{ color: '#616161', cursor: 'pointer' }} />
                        {toggleDelete && (
                            <DeleteWorkshopPopup setToggleState={setToggleDelete} setToggleYesState={setToggleYesDelete} name={props.workshop.name} workshop_id = {parseInt(props.workshop.id, 10)}/>
                        )}
                        {toggleYesDelete && (
                            <WorkshopDeletedPopup setToggleState={setToggleYesDelete}/>
                        )}
                    </div>
                </div>
                <div style={{ display: "flex" }} >
                    <DateIcon></DateIcon>
                    <Typography sx={
                        cardDetailStyles
                    } color="text.secondary">
                        {props.workshop.date}
                    </Typography>
                </div>
                <div style={{ display: "flex" }} >
                    <TimeIcon></TimeIcon>
                    <Typography sx={
                        cardDetailStyles
                    } color="text.secondary">
                        {props.workshop.start_time + " - " + props.workshop.end_time}
                    </Typography>
                </div>
                <div style={{ display: "flex" }} >
                    <LocationIcon></LocationIcon>
                    <Typography sx={[cardDetailStyles, { paddingLeft: .6 }]} color="text.secondary">
                        {props.workshop.location}
                    </Typography>
                </div>

                <div style={numbersWrapperStyles} >
                    <div>
                        <div style={numberStyles}>{props.workshop.assigned}</div>
                        <div style={numberLabelStyles}>Assigned</div>
                    </div>
                    <div style={verticalLine}></div>
                    <div>
                        <div style={numberStyles}>{props.workshop.accepted}</div>
                        <div style={numberLabelStyles}>Accepted</div>
                    </div>
                    <div style={verticalLine}></div>
                    <div>
                        <div style={numberStyles}>{props.workshop.declined}</div>
                        <div style={numberLabelStyles}>Declined</div>
                    </div>
                </div>


            </CardContent>
            
        </Card >
    );
}
