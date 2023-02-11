import React, { useState } from "react"
import Header from "../components/Header"
import HomePageTab from "../components/HomePageTab"
import { Box, Card, Grid } from '@mui/material';
import AdminWorkshopCard from '../components/AdminWorkshopCard'

import WorkshopCard from '../components/WorkshopCard'
import WorkshopAssignmentPlaceholder from '../components/WorkshopAssignmentPlaceholder'
import WorkshopUpcomingPlaceholder from '../components/WorkshopUpcomingPlaceholder'
import sampleData from '../components/workshopCardSample.json'

//const sampleData = [];
const Home = () => {
    const [tab, setTab] = useState(0);

    return (
        <div >
            <Header />
            <div style={{ backgroundColor: '#FBF8F2', paddingLeft: '5%', paddingBottom: '40px', minHeight: '90vh' }}>
                <HomePageTab pageIndex={tab} setPageIndex={setTab} />

                {tab == 0 ?
                    sampleData.length > 0 ?
                        <Box sx={{ flexGrow: 1, width: '90%' }}>
                            <Grid container spacing={4}>
                                {sampleData.map((data) => (
                                    <Grid item xs={5}>
                                        <WorkshopCard workshop={data}></WorkshopCard>
                                    </Grid>
                                ))
                                }


                            </Grid>
                        </Box>
                        : <WorkshopUpcomingPlaceholder />
                    :

                    sampleData.length > 0 ?
                        <Box sx={{ flexGrow: 1, width: '90%' }}>
                            <Grid container spacing={4}>
                                {sampleData.map((data) => (
                                    <Grid item xs={5}>
                                        {/* placeholder */}
                                        <AdminWorkshopCard workshop={data}></AdminWorkshopCard>
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