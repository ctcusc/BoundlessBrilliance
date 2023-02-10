import React from "react"
import Header from "../components/Header"
import HomePageTab from "../components/HomePageTab"
import { Box, Card, Grid } from '@mui/material';
import WorkshopCard from '../components/WorkshopCard'
import WorkshopAssignmentPlaceholder from '../components/WorkshopAssignmentPlaceholder'
import WorkshopUpcomingPlaceholder from '../components/WorkshopUpcomingPlaceholder'
import sampleData from '../components/workshopCardSample.json'

//const sampleData = [];
const Home = () => {
    return (
        <div >
            <Header />
            <div style={{ backgroundColor: '#FBF8F2', paddingLeft: '5%', paddingBottom: '40px', minHeight: '90vh' }}>
                <HomePageTab />
                {sampleData.length > 0 ?
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
                }
            </div>
        </div >
    );
};

export default Home