import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from 'react';
import DeleteUserPopup from '../components/adminPopups/DeleteUserPopup'
import UserDeletedPopup from '../components/adminPopups/UserDeletedPopup'

import '../index.css'

const cardStyles = {
    minWidth: 275,
    dropShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: '30px',
    //   height: '320px'
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
    textAlign: 'center',
    lineHeight: '24px',
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


const dateStyles = {
    color: '#686868',
    lineHeight: '20px',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: 500,
    mb: 0
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

const linkStyles = {
    color: '#1398A0',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontWeight: 500,
    fontFamily: 'Avenir Heavy',
    paddingTop: '40px',
    paddingBottom: '20px'
}

export default function MemberCard(props) {

    const [toggleDelete, setToggleDelete] = useState(false);
    const [toggleYesDelete, setToggleYesDelete] = useState(false);

    return (

        <Card sx={cardStyles}>
            <CardContent sx={cardContentStyles}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={dateStyles} color="text.secondary" gutterBottom>
                        {props.member.chapter}
                    </Typography>
                    <div style={{ display: "flex", width: '60px', justifyContent: "space-between" }}>
                        <EditIcon sx={{ color: '#1398A0', cursor: 'pointer' }} />
                        <DeleteIcon onClick={() => setToggleDelete(true)} sx={{ color: '#616161', cursor: 'pointer' }} />
                        {toggleDelete && (
                            <DeleteUserPopup setToggleState={setToggleDelete} setToggleYesState={setToggleYesDelete} name={props.member.name} user_id = {parseInt(props.member.user_id, 10)}/>
                        )}
                        {toggleYesDelete && (
                            <UserDeletedPopup setToggleState={setToggleYesDelete}/>
                        )}
                        </div>
                </div>


                <Typography sx={cardHeaderStyles} color="text.secondary" gutterBottom>
                    {props.member.name}
                </Typography>


                <div style={{ display: "flex" }} >
                    <div style={{ display: "flex", width: '40%' }} >
                        <PhoneIcon sx={{ color: '#DC7700' }}></PhoneIcon>
                        <Typography sx={
                            cardDetailStyles
                        } color="text.secondary">
                            {props.member.phone}
                        </Typography>
                    </div>
                    <div style={{ display: "flex", paddingLeft: '20px', width: '60%' }} >
                        <EmailIcon sx={{ color: '#DC7700' }}> </EmailIcon>
                        <Typography sx={
                            cardDetailStyles
                        } color="text.secondary">
                            {props.member.email}
                        </Typography>
                    </div>
                </div>

                <Typography sx={linkStyles} gutterBottom>
                    More Info
                </Typography>


            </CardContent>
        </Card >
    );
}
