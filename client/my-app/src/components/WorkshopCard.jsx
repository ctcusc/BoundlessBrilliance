import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import '../index.css'

import { ReactComponent as DateIcon } from '../images/date_icon.svg'
import { ReactComponent as TimeIcon } from '../images/time_icon.svg';
import { ReactComponent as LocationIcon } from '../images/location_icon.svg';

const cardStyles = {
    minWidth: 275,
    dropShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: '30px',
    minHeight: '320px'
};

const cardContentStyles = {
    padding: '45px',
    margin: 'auto',
    // height: '320px'
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
    // textAlign: 'center',
    lineHeight: '20px',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: 500,
    color: '#222222'
};

const workshopDescriptionStyles = {
    margin: '15px 0 15px 0',
    fontFamily: 'Avenir',
    fontWeight: 500,
}

const workshopAddToCalendarStyles = {
    color: '#1398A0',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontWeight: 500,
    fontFamily: 'Avenir Heavy',
}


export default function WorkshopCard(props) {
    return (

        <Card sx={cardStyles}>
            <CardContent sx={cardContentStyles}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={cardHeaderStyles} color="text.secondary" gutterBottom>
                        {props.workshop.workshop_name}
                    </Typography>
                </div>
                <div style={{ display: "flex" }} >
                    <DateIcon></DateIcon>
                    <Typography sx={
                        cardDetailStyles
                    } color="text.secondary">
                        {props.workshop.workshop_date}
                    </Typography>
                </div>
                <div style={{ display: "flex" }} >
                    <TimeIcon></TimeIcon>
                    <Typography sx={
                        cardDetailStyles
                    } color="text.secondary">
                        {props.workshop.workshop_time}
                    </Typography>
                </div>
                <div style={{ display: "flex" }} >
                    <LocationIcon></LocationIcon>
                    <Typography sx={[cardDetailStyles, { paddingLeft: .6 }]} color="text.secondary">
                        {props.workshop.workshop_location}
                    </Typography>
                </div>

                <div style={workshopDescriptionStyles}>
                    {props.workshop.workshop_description}
                </div>
                <div style={workshopAddToCalendarStyles}>Add to Calendar</div>
            </CardContent>

        </Card >
    );
}
