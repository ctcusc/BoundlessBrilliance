import React from "react"
import Header from "../components/Header"
import { Box, Card, Grid } from '@mui/material';
import WorkshopCard from '../components/WorkshopCard'
import sampleData from '../components/workshopCardSample.json'

const Home = () => {
    return (
        <div>
            <Header />
            This is the Home Page
            <Box sx={{ flexGrow: 1, width: '90%' }}>
                <Grid container spacing={2}>
                    {sampleData.map((data) => (
                        <Grid item xs={5}>
                            <WorkshopCard workshop={data}></WorkshopCard>
                        </Grid>
                    ))
                    }


                </Grid>
            </Box>
        </div >
    );
};

export default Home