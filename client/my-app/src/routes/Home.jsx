import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import HomePageTab from "../components/HomePageTab"
import { Box, Card, Grid, unstable_composeClasses } from '@mui/material';
import AssignmentCard from '../components/AssignmentCard'

import WorkshopCard from '../components/WorkshopCard'
import WorkshopAssignmentPlaceholder from '../components/WorkshopAssignmentPlaceholder'
import WorkshopUpcomingPlaceholder from '../components/WorkshopUpcomingPlaceholder'
// import assignmentData from '../components/workshopCardAssignment.json'
// import upcomingData from "../components/workshopCardUpcoming.json"
import { useCookies } from 'react-cookie';

const Home = () => {

    const [tab, setTab] = useState(0);
    const [cookies] = useCookies(['user']);
    const user_id = cookies.user_id;
    const [undecidedData, setUndecidedData] = useState([]);
    const [upcomingData, setUpcomingData] = useState([]);

    useEffect(() => {
        fetch(`/api/undecidedWorkshop/?id=${user_id}`)
            .then(response => response.json())
            .then(data => setUndecidedData(data))
            .catch(error => console.error(error));

        fetch(`/api/upcomingWorkshop/?id=${user_id}`)
            .then(response => response.json())
            .then(data => setUpcomingData(data))
            .catch(error => console.error(error));
    }, []);


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
                                        <WorkshopCard workshop={data} user_id={user_id}></WorkshopCard>
                                    </Grid>
                                ))
                                }

                            </Grid>
                        </Box>
                        : <WorkshopUpcomingPlaceholder />
                    :

                    undecidedData.length > 0 ?
                        <Box sx={{ flexGrow: 1, width: '90%' }}>
                            <Grid container spacing={4}>
                                {undecidedData.map((data) => (
                                    <Grid item xs={10}>
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