import React, { useState } from "react"
import Header from "../components/Header"
import HomePageTab from "../components/HomePageTab"
import { Box, Card, Grid, Typography } from '@mui/material';
import AdminAssignmentCard from '../components/AdminAssignmentCard'

import AdminWorkshopCard from '../components/AdminWorkshopCard'
import assignmentData from '../components/workshopCardAssignment.json'
import upcomingData from "../components/workshopCardUpcoming.json"
import { useCookies } from 'react-cookie';


const Admin = () => {

    const [tab, setTab] = useState(0);
    const [cookies] = useCookies(['user']);
    const user_id = cookies.user_id;

    const blueButton = {
        height: '48px',
        width: '250px',
        borderRadius: '12px',
        background: '#1398A0',
        textAlign: 'center',
        lineHeight: '48px',
        color: 'white',
        fontFamily: 'Avenir Heavy',
        margin: '5px',
        cursor: 'pointer',
        fontSize: '18px',
        marginTop: '30px',
        marginBottom: '60px'
    }

    const acceptButton = {
        height: '48px',
        width: '150px',
        borderRadius: '12px',
        background: '#1398A0',
        textAlign: 'center',
        lineHeight: '48px',
        color: 'white',
        fontFamily: 'Avenir Heavy',
        margin: '5px',
        cursor: 'pointer',
        fontSize: '18px',
        marginTop: '30px',
        marginBottom: '60px'
    }

    function renderSwitch() {
        switch (tab) {
            case 0:
                return (<>
                    <h1 style={{ paddingTop: '40px', paddingBottom: '20px', fontFamily: 'Avenir Heavy' }}>Workshops</h1>
                    <div style={blueButton}>+ Create Workshop</div>
                    <Grid container spacing={4}>
                        {upcomingData.map((data) => (
                            <Grid item xs={5}>
                                <AdminWorkshopCard workshop={data}></AdminWorkshopCard>
                            </Grid>
                        ))
                        }
                    </Grid></>);
            case 1:
                return (<>
                    <h1 style={{ paddingTop: '40px', paddingBottom: '20px', fontFamily: 'Avenir Heavy' }}>Volunteer Applications</h1>
                    <div style={acceptButton}>Accept All</div>
                    <Grid container spacing={4}>
                        {assignmentData.map((data) => (
                            <Grid item xs={10}>
                                <AdminAssignmentCard workshop={data}></AdminAssignmentCard>
                            </Grid>
                        ))
                        }

                    </Grid></>)

            default:
                return 'foo';
        }
    }



    return (
        <div >
            <div style={{ backgroundColor: '#FBF8F2', paddingLeft: '5%', paddingTop: '5%', paddingBottom: '40px', minHeight: '90vh' }}>


                <Box sx={{ flexGrow: 1, width: '90%' }}>
                    {renderSwitch()}
                    {/* <Grid container spacing={4}>
                        {upcomingData.map((data) => (
                            <Grid item xs={5}>
                                <AdminWorkshopCard workshop={data}></AdminWorkshopCard>
                            </Grid>
                        ))
                        }
                    </Grid>
                    <Grid container spacing={4}>
                        {assignmentData.map((data) => (
                            <Grid item xs={10}>
                                <AdminAssignmentCard workshop={data}></AdminAssignmentCard>
                            </Grid>
                        ))
                        }

                    </Grid> */}
                </Box>




            </div>
        </div >
    );
};

export default Admin