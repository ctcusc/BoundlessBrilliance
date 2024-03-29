import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

import ApproveWorkshopPopup from './ApproveWorkshopPopup';
import RejectWorkshopPopup from './RejectWorkshopPopup';
import WorkshopApprovedPopup from './WorkshopApprovedPopup';
import WorkshopRejectedPopup from './WorkshopRejectedPopup';

import '../index.css';

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

  const [toggleApprove, setToggleApprove] = useState(false);
  const [toggleReject, setToggleReject] = useState(false);
  const [toggleYesApprove, setToggleYesApprove] = useState(false);
  const [toggleYesReject, setToggleYesReject] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const [cookies] = useCookies(['user']);
  const user_id = cookies.user_id;

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (

    <Card sx={cardStyles}>
      <CardContent sx={cardContentStyles}>
        <div style={{ display: "flex" }}>
          <div style={mainContentDiv}>
            <Typography sx={dateStyles} color="text.secondary" gutterBottom>
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={cardHeaderStyles}
                color="text.secondary"
                gutterBottom
              >
                {props.workshop.workshop_name}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <DateIcon alt="Date Icon"></DateIcon>
              <Typography
                sx={cardDetailStyles}
                color="text.secondary"
              >
                {props.workshop.workshop_date}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <TimeIcon alt="Time Icon"></TimeIcon>
              <Typography
                sx={cardDetailStyles}
                color="text.secondary"
              >
                {props.workshop.workshop_start_time + " - " + props.workshop.workshop_end_time}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <LocationIcon alt="Location Icon"></LocationIcon>
              <Typography
                sx={[cardDetailStyles, { paddingLeft: 0.6 }]}
                color="text.secondary"
              >
                {props.workshop.workshop_location}
              </Typography>
            </div>
            {showDescription ? (
              <div style={{ marginTop: "30px", marginRight: "100px" }}>
                <Typography sx={cardDetailStyles} color="text.secondary">
                  {props.workshop.workshop_description}
                  <div
                    style={infoLinkStyles}
                    onClick={toggleDescription}
                  >
                    Less Info
                  </div>
                </Typography>
              </div>
            ) : (
              <div
                style={infoLinkStyles}
                onClick={toggleDescription}
              >
                More Info
              </div>
            )}
          </div>
          <div style={cardButtonsDiv}>
            <div onClick={() => setToggleReject(true)} style={declineCardButton}>Decline</div>
            <div onClick={() => setToggleApprove(true)} style={approveCardButton}>Approve</div>
          </div>
          {toggleApprove && (
            <ApproveWorkshopPopup setToggleState={setToggleApprove} setToggleYesState={setToggleYesApprove} name={props.workshop.workshop_name} user_id={parseInt(user_id, 10)} workshop_id={props.workshop.workshop_id} />
          )}
          {toggleReject && (
            <RejectWorkshopPopup setToggleState={setToggleReject} setToggleYesState={setToggleYesReject} name={props.workshop.workshop_name} user_id={parseInt(user_id, 10)} workshop_id={props.workshop.workshop_id} />
          )}
          {toggleYesApprove && (
            <WorkshopApprovedPopup setToggleState={setToggleYesApprove} />
          )}
          {toggleYesReject && (
            <WorkshopRejectedPopup setToggleState={setToggleYesReject} />
          )}
        </div>
      </CardContent>

    </Card >
  );
}
