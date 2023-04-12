import { React, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import EditMemberContactPopup from './EditMemberContactPopup';

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

    const [toggleEditPopup, setToggleEditPopup] = useState(false);

    const togglePopup = () => {
        setToggleEditPopup(!toggleEditPopup);
    };

    let editPopup;
    if (toggleEditPopup) {
        editPopup = <EditMemberContactPopup props={props} setToggleState={setToggleEditPopup}/>;
    }

    return (


        <Card sx={cardStyles}>

            {editPopup}

            <CardContent sx={cardContentStyles}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography sx={dateStyles} color="text.secondary" gutterBottom>
                        {props.member.user_chapter}
                    </Typography>
                    <div style={{ display: "flex", width: '60px', justifyContent: "space-between" }}>
                        <EditIcon onClick={togglePopup} sx={{ color: '#1398A0', cursor: 'pointer' }} />
                        <DeleteIcon sx={{ color: '#616161', cursor: 'pointer' }} />

                    </div>
                </div>


                <Typography sx={cardHeaderStyles} color="text.secondary" gutterBottom>
                    {props.member.user_firstname} {props.member.user_lastname}
                </Typography>


                <div style={{ display: "flex" }} >
                    <div style={{ display: "flex", width: '40%' }} >
                        <PhoneIcon sx={{ color: '#DC7700' }}></PhoneIcon>
                        <Typography sx={
                            cardDetailStyles
                        } color="text.secondary">
                            {props.member.user_phone}
                        </Typography>
                    </div>
                    <div style={{ display: "flex", paddingLeft: '20px', width: '60%' }} >
                        <EmailIcon sx={{ color: '#DC7700' }}> </EmailIcon>
                        <Typography sx={
                            cardDetailStyles
                        } color="text.secondary">
                            {props.member.user_email}
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
