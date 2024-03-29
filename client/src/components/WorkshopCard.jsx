import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ClearIcon from '@mui/icons-material/Clear';

import CancelWorkshopPopup from './CancelWorkshopPopup';
import WorkshopCancelledPopup from './WorkshopCancelledPopup';

import '../index.css'

import { ReactComponent as DateIcon } from '../images/date_icon.svg'
import { ReactComponent as TimeIcon } from '../images/time_icon.svg';
import { ReactComponent as LocationIcon } from '../images/location_icon.svg';
import 'add-to-calendar-button';
import moment from 'moment-timezone';

const cardStyles = {
    minWidth: 275,
    dropShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: '30px',
    minHeight: '320px',
    position: 'relative'
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
    lineHeight: '20px',
    fontSize: 16,
    fontFamily: 'Avenir',
    fontWeight: 500,
    color: '#222222'
};

const workshopDescriptionStyles = {
    margin: '15px 0 15px 0',
    lineHeight: 1.5,
    fontFamily: 'Avenir',
    fontWeight: 500,
    whiteSpace: 'pre-line',
    paddingBottom: '20px',
    '& span': {
      display: 'inline-block'
    }
  }
  
const clearStyles = {
    position: 'absolute',
    right: '1.5rem',
    top: '1.5rem',
    width: '24px',
    height: '24px',
    cursor: 'pointer' 
}


export default function WorkshopCard(props) {
    const [showMore, setShowMore] = useState(false);

    const [toggleReject, setToggleReject] = useState(false);
    const [toggleYesReject, setToggleYesReject] = useState(false);


    const toggleShowMore = () => {
      setShowMore(!showMore);
    };

    function formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    function convertTimeTo24HourFormat(timeString) {
      const [time, period] = timeString.split(' ');
      let [hours, minutes] = time.split(':');
    
      if (hours === '12') {
        hours = '00';
      }
    
      if (period.toLowerCase() === 'pm') {
        hours = parseInt(hours, 10) + 12;
      }
      return `${hours}:${minutes}`;
    }

    function getTimezoneDatabaseName() {
      const timeZoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const timezone = moment.tz.zone(timeZoneName);
      const timezoneName = timezone ? timezone.name : null;
      return timezoneName;
    }
    
  return (
    <Card sx={cardStyles}>
      <ClearIcon onClick={() => setToggleReject(true)} sx={clearStyles}></ClearIcon>
      {toggleReject && (
          <CancelWorkshopPopup setToggleState={setToggleReject} setToggleYesState={setToggleYesReject} name={props.workshop.workshop_name} user_id = {parseInt(props.user_id, 10)} workshop_id = {props.workshop.workshop_id}/>
      )}
      {toggleYesReject && (
          <WorkshopCancelledPopup setToggleState={setToggleYesReject}/>
      )}
      <CardContent sx={cardContentStyles}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={cardHeaderStyles} color="text.secondary" gutterBottom>
            {props.workshop.workshop_name}
          </Typography>
        </div>
        <div style={{ display: "flex" }} >
          <DateIcon></DateIcon>
          <Typography sx={cardDetailStyles} color="text.secondary">
            {props.workshop.workshop_date}
          </Typography>
        </div>
        <div style={{ display: "flex" }} >
          <TimeIcon></TimeIcon>
          <Typography sx={cardDetailStyles} color="text.secondary">
            {props.workshop.workshop_start_time+" - "+props.workshop.workshop_end_time}
          </Typography>
        </div>
        <div style={{ display: "flex" }} >
          <LocationIcon></LocationIcon>
          <Typography sx={[cardDetailStyles, { paddingLeft: .6 }]} color="text.secondary">
            {props.workshop.workshop_location}
          </Typography>
        </div>

        <div style={workshopDescriptionStyles}>
          {showMore ? props.workshop.workshop_description : `${props.workshop.workshop_description.slice(0, 100)}...`}
          {props.workshop.workshop_description.length > 100 && (
            <IconButton aria-label="show more" onClick={toggleShowMore} sx={{ marginLeft: 'auto', marginBottom: '-3px', marginTop: '-6px' }}>
              {showMore ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
            </IconButton>
          )}
          <span></span>
        </div>
            <add-to-calendar-button
            name= {props.workshop.workshop_name}
            startDate={formatDate(props.workshop.workshop_date)}
            startTime={convertTimeTo24HourFormat(props.workshop.workshop_start_time)}
            endTime={convertTimeTo24HourFormat(props.workshop.workshop_end_time)}
            location={props.workshop.workshop_location}
            description={props.workshop.workshop_description}
            options="'Google'"
            lightMode="bodyScheme"
            timeZone={getTimezoneDatabaseName()}
            ></add-to-calendar-button>

        </CardContent>

        </Card >
    );
}
