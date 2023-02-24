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


    return (
        <div >
            <Header />
            <div style={{ backgroundColor: '#FBF8F2', paddingLeft: '5%', paddingBottom: '40px', minHeight: '90vh' }}>
                <h1 style={{ paddingTop: '40px', paddingBottom: '20px', fontFamily: 'Avenir Heavy' }}>Workshops</h1>

                <Box sx={{ flexGrow: 1, width: '90%' }}>
                    <Grid container spacing={4}>
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

                    </Grid>
                </Box>




            </div>
        </div >
    );
};

export default Admin