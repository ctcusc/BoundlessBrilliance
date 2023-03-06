import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import '../index.css'

import { ReactComponent as DateIcon } from '../images/date_icon.svg'
import { ReactComponent as TimeIcon } from '../images/time_icon.svg';
import { ReactComponent as LocationIcon } from '../images/location_icon.svg';

const cardStyles = {
    minWidth: 275,
    dropShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: '30px',
    minHeight: '260px'
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
    lineHeight: '22px',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: 500,
    color: '#222222'
};

const infoLinkStyles = {
    color: '#1398A0',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontWeight: 500,
    fontFamily: 'Avenir Heavy',
    marginTop: '30px'
}

const dateStyles = {
    color: '#686868',
    lineHeight: '20px',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: 500,
    mb: 0
}

const mainContentDiv = {
    width: '80%',
}

const cardButtonsDiv = {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
}

const approveCardButton = {
    height: '48px',
    width: '156px',
    borderRadius: '12px',
    background: '#1398A0',
    textAlign: 'center',
    lineHeight: '48px',
    color: 'white',
    fontFamily: 'Avenir Heavy',
    margin: '5px',
    cursor: 'pointer'
}

const declineCardButton = {
    height: '48px',
    width: '156px',
    borderRadius: '12px',
    color: '#1398A0',
    borderStyle: 'solid',
    borderColor: '#1398A0',
    borderWidth: '2.5px',
    textAlign: 'center',
    lineHeight: '48px',
    background: 'white',
    fontFamily: 'Avenir Heavy',
    margin: '5px',
    cursor: 'pointer'
}


export default function WorkshopCard(props) {
    return (

        <Card sx={cardStyles}>
            <CardContent sx={cardContentStyles}>
                <div style={{ display: "flex" }} >
                    <div style={mainContentDiv}>
                        <Typography sx={dateStyles} color="text.secondary" gutterBottom>
                            Chapter
                        </Typography>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography sx={cardHeaderStyles} color="text.secondary" gutterBottom>
                                {props.workshop.name}
                            </Typography>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ display: "flex" }} >
                                <PhoneIcon sx={{ color: '#DC7700' }}></PhoneIcon>
                                <Typography sx={
                                    cardDetailStyles
                                } color="text.secondary">
                                    1 (224) 123-4567
                                </Typography>
                            </div>
                            <div style={{ display: "flex", paddingLeft: '30px' }} >
                                <EmailIcon sx={{ color: '#DC7700' }}></EmailIcon>
                                <Typography sx={
                                    cardDetailStyles
                                } color="text.secondary">
                                    email@email.com
                                </Typography>
                            </div>
                        </div>


                        <div style={infoLinkStyles}>More Info</div>
                    </div>
                    <div style={cardButtonsDiv}>
                        <div style={declineCardButton}>Decline</div>
                        <div style={approveCardButton}>Approve</div>
                    </div>
                </div>
            </CardContent>

        </Card >
    );
}
