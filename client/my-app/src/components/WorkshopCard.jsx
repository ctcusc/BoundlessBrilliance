import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import css from './WorkshopCard.css'

import { ReactComponent as DateIcon } from '../images/date_icon.svg'
import { ReactComponent as TimeIcon } from '../images/time_icon.svg';
import { ReactComponent as LocationIcon } from '../images/location_icon.svg';

import workshopData from './workshopCardSample.json'

const cardDetailStyles = {
    paddingLeft: 1,
    textAlign: 'center',
    lineHeight: '20px',
    fontSize: 16,
    fontFamily: 'Lato',
    fontWeight: 500,
    color: '#222222'
};

const numberStyles = {
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '40px',
    lineHeight: '55px',
};

const numberLabelStyles = {
    fontFamily: 'Lato',
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

const cardContentStyles = {
    padding: '30px'
}

const verticalLine = {
    borderRight: '3px solid lightgray',
    height: '45px'
}

export default function WorkshopCard(props) {
    console.log(props.workshop)
    return (

        <Card sx={{ minWidth: 275 }}>
            <CardContent sx={cardContentStyles}>
                <Typography sx={
                    {
                        fontSize: 20,
                        fontFamily: 'Roboto Mono',
                        fontWeight: 700,
                        color: '#222222',
                        mb: '10px'
                    }
                } color="text.secondary" gutterBottom>
                    {props.workshop.name}
                </Typography>
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
                        {props.workshop.time}
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
