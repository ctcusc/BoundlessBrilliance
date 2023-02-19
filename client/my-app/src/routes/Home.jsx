import React, { useState } from "react"
import Header from "../components/Header"
import HomePageTab from "../components/HomePageTab"
import { Box, Card, Grid } from '@mui/material';
import AssignmentCard from '../components/AssignmentCard'

import WorkshopCard from '../components/WorkshopCard'
import WorkshopAssignmentPlaceholder from '../components/WorkshopAssignmentPlaceholder'
import WorkshopUpcomingPlaceholder from '../components/WorkshopUpcomingPlaceholder'
import assignmentData from '../components/workshopCardAssignment.json'
import upcomingData from "../components/workshopCardUpcoming.json"
import { useCookies } from 'react-cookie';

const Home = () => {

    //TODO: Implement Call to Backend API
    async function getAssignmentData(user_id) {
        const response = await fetch('/api/validateUser', {  
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                { 
                    "user_id" : user_id,
                }),
        })
        const data = await response.json();
        return data;
    }

    //TODO: Implement Call to Backend API
    async function getUpcomingData(user_id) {
        const response = await fetch('/api/validateUser', {  
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                { 
                    "user_id" : user_id,
                }),
        })
        const data = await response.json();
        return data;
      }

    const [tab, setTab] = useState(0);
    const [cookies] = useCookies(['user']);
    const user_id = cookies.user_id;
    // const upcomingData = getUpcomingData(user_id);
    // const assignmentData = getAssignmentData(user_id);
    

    return (
        <div >
            <Header />
            <div style={{ backgroundColor: '#FBF8F2', paddingLeft: '5%', paddingBottom: '40px', minHeight: '90vh' }}>
                <HomePageTab pageIndex={tab} setPageIndex={setTab} />

                {tab == 0 ?
                    upcomingData.length > 0 ?
                        <Box sx={{ flexGrow: 1, width: '90%' }}>
                            <Grid container spacing={4}>
                                {upcomingData.map((data) => (
                                    <Grid item xs={5}>
                                        <WorkshopCard workshop={data}></WorkshopCard>
                                    </Grid>
                                ))
                                }


                            </Grid>
                        </Box>
                        : <WorkshopUpcomingPlaceholder />
                    :

                    assignmentData.length > 0 ?
                        <Box sx={{ flexGrow: 1, width: '90%' }}>
                            <Grid container spacing={4}>
                                {assignmentData.map((data) => (
                                    <Grid item xs={10}>
                                        {/* placeholder */}
                                        <AssignmentCard workshop={data}></AssignmentCard>
                                    </Grid>
                                ))
                                }


                            </Grid>
                        </Box>
                        : <WorkshopAssignmentPlaceholder />
                }


            </div>
        </div >
    );
};

export default Home