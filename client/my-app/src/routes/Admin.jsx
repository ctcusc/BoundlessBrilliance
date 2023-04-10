import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import HomePageTab from "../components/HomePageTab"
import { Autocomplete, Box, Card, Grid, InputAdornment, TextField, Typography, FormControl, Input, InputLabel, FilledInput, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import AdminAssignmentCard from '../components/AdminAssignmentCard'
import AdminWorkshopCard from '../components/AdminWorkshopCard'
import AdminSideBar from '../components/AdminSideBar'
import AdminMetrics from '../routes/AdminMetrics'
import MemberCard from '../components/MemberCard'
import assignmentData from '../components/workshopCardAssignment.json'
import members from '../components/members.json'
import CreateWorkshopModal from '../components/CreateWorkshopModal'
// import upcomingData from "../components/workshopCardUpcoming.json"
import WorkshopHeader from "../components/WorkshopHeader";
import WorkshopAssignmentPlaceholder from "../components/WorkshopAssignmentPlaceholder"
import { useCookies } from 'react-cookie';
import SearchBar from '@mkyy/mui-search-bar';



const Admin = () => {

    const [tab, setTab] = useState(1);
    const [cookies] = useCookies(['user']);
    const user_id = cookies.user_id;

    const [adminWorkshop, setAdminWorkshop] = useState([]);
    const [adminSignups, setAdminSignups] = useState([]);
    const [searchName, setSearchName] = useState([]);
    const [showCreateWorkshopModal, setShowCreateWorkshopModal] = useState(false);
    const closeModal = () => setShowCreateWorkshopModal(false);
    const showModal = () => setShowCreateWorkshopModal(true);

    useEffect(() => {
        fetch(`/api/adminWorkshop`)
            .then(response => response.json())
            .then(data => setAdminWorkshop(data))
            .catch(error => console.error(error));

        fetch(`/api/adminSignups`)
            .then(response => response.json())
            .then(data => setAdminSignups(data))
            .catch(error => console.error(error));

    }, []);


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

    const handleSearch = searchName => {
        //...
        console.log(searchName);
    };

    function renderSwitch() {
        switch (tab) {
            case 1:
                return (<>
                    <WorkshopHeader/>
                    <h1 style={{ paddingTop: '40px', paddingBottom: '20px', fontFamily: 'Avenir Heavy' }}>Workshops</h1>
                    <div style={blueButton} onClick={showModal}>+ Create Workshop</div>
                    <CreateWorkshopModal show={showCreateWorkshopModal} handleClose={closeModal}/>
                    <Grid container spacing={4}>
                        {adminWorkshop.map((data) => (
                            <Grid item xs={6}>
                                <AdminWorkshopCard workshop={data}></AdminWorkshopCard>
                            </Grid>
                        ))
                        }
                    </Grid></>);
            case 2:
                return (<>
                    <WorkshopHeader/>
                    <h1 style={{ paddingTop: '40px', paddingBottom: '20px', fontFamily: 'Avenir Heavy' }}>Volunteer Applications</h1>
                    <div style={acceptButton}>Accept All</div>
                    <Grid container spacing={4}>
                        {adminSignups.map((data) => (
                            <Grid item xs={12}>
                                <AdminAssignmentCard workshop={data}></AdminAssignmentCard>
                            </Grid>
                        ))
                        }

                    </Grid></>)

            case 3:
                return (<>
                    <WorkshopHeader/>
                    <AdminMetrics></AdminMetrics>
                </>)

            case 4:
                return (<>
                    <WorkshopHeader/>
                    <h1 style={{ paddingTop: '40px', paddingBottom: '20px', fontFamily: 'Avenir Heavy' }}>Member List</h1>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={members.map((data) => data.name)}
                        fullWidth

                        sx={{ mb: '60px', mt: '30px', '& .MuiInputBase-root': { borderRadius: '28px !important' }, '& .MuiAutocomplete-popupIndicator': { display: 'none' } }}
                        renderInput={(params) => <TextField 
                             {...params}
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }
                            } 
                            />}
                    />
                   
                    <Grid container spacing={4}>
                        {members.map((data) => (
                            <Grid item xs={6}>
                                <MemberCard member={data}></MemberCard>
                            </Grid>
                        ))
                        }

                    </Grid>
                </>)


            default:
                return "we haven't build this page yet :/";
        }
    }



    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <AdminSideBar setTab={setTab} style={{ height: '100%' }}></AdminSideBar>
            <div style={{ backgroundColor: '#FBF8F2', paddingLeft: '5%', paddingTop: '5%', paddingBottom: '40px', minHeight: '90vh', width: '80%', height: '100%' }}>
                <Box sx={{ flexGrow: 1, width: '95%', height: '100%' }}>
                    {renderSwitch()}
                </Box>
            </div>
        </div>
    );
};

export default Admin