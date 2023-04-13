import React, { useEffect, useState } from "react"
import { Autocomplete, Box, Card, Grid, InputAdornment, TextField, Typography, FormControl, Input, InputLabel, FilledInput, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AdminAssignmentCard from '../components/AdminAssignmentCard'
import AdminWorkshopCard from '../components/AdminWorkshopCard'
import AdminSideBar from '../components/AdminSideBar'
import AdminMetrics from '../routes/AdminMetrics'
import MemberCard from '../components/MemberCard'
import CreateWorkshopModal from '../components/CreateWorkshopModal'
import WorkshopHeader from "../components/WorkshopHeader";
import { useCookies } from 'react-cookie';



const Admin = () => {

    const [tab, setTab] = useState(1);
    const [cookies] = useCookies(['user']);
    const user_id = cookies.user_id;

    const [adminWorkshop, setAdminWorkshop] = useState([]);
    const [adminSignups, setAdminSignups] = useState([]);
    const [value, setValue] = React.useState();
    const [displayedMembers, setDisplayedMembers] = React.useState([]);
    const [members, setAllMembers] = React.useState([]);

    const [inputValue, setInputValue] = React.useState('');

    const [showCreateWorkshopModal, setShowCreateWorkshopModal] = useState(false);
    const closeModal = () => setShowCreateWorkshopModal(false);
    const showModal = () => setShowCreateWorkshopModal(true);

    const [userData, setUserData] = useState([]);
    const [workshopData, setWorkshopData] = useState([]);
    const [genderData, setGenderData] = useState([]);
    const [ethnicityData, setEthnicityData] = useState([]);

    useEffect(() => {
        fetch(`/api/adminWorkshop`)
            .then(response => response.json())
            .then(data => setAdminWorkshop(data))
            .catch(error => console.error(error));

        fetch(`/api/adminSignups`)
            .then(response => response.json())
            .then(data => setAdminSignups(data))
            .catch(error => console.error(error));

        fetch(`/api/allActiveUsers`)
            .then(response => response.json())
            .then(data => setDisplayedMembers(data))
            .catch(error => console.error(error));
        
        fetch(`/api/allActiveUsers`)
            .then(response => response.json())
            .then(data => setAllMembers(data))
            .catch(error => console.error(error));

        fetch(`/api/generateUserMetrics`)
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error(error));
        
        fetch(`/api/generateWorkshopMetrics`)
            .then(response => response.json())
            .then(data => setWorkshopData(data))
            .catch(error => console.error(error));
        
        fetch(`/api/generateGenderMetrics`)
            .then(response => response.json())
            .then(data => setGenderData(data))
            .catch(error => console.error(error));

        fetch(`/api/generateEthnicityMetrics`)
            .then(response => response.json())
            .then(data => setEthnicityData(data))
            .catch(error => console.error(error));
        
        console.log(genderData);

    }, []);

    function handleAcceptAll() {
        console.log("Ping");
        async function Accept() {
            const response = await fetch('/api/approveAllUsers', {  
                method: 'put',
                headers: {'Content-Type': 'application/json'},
            })
            const data = await response.json();
        }

        Accept();
        document.location.reload();
    }
     


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
            case 1:
                return (<>
                    <WorkshopHeader />
                    <h1 style={{ paddingTop: '40px', paddingBottom: '20px', fontFamily: 'Avenir Heavy' }}>Workshops</h1>
                    <div style={blueButton} onClick={showModal}>+ Create Workshop</div>
                    <CreateWorkshopModal show={showCreateWorkshopModal} handleClose={closeModal} />
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
                    <div style={acceptButton} onClick={handleAcceptAll}>Accept All</div>
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
                    <AdminMetrics userData={userData} workshopData = {workshopData} genderData = {genderData} ethnicityData = {ethnicityData}></AdminMetrics>
                </>)

            case 4:
                return (<>
                    <WorkshopHeader/>
                    <h1 style={{ paddingTop: '40px', paddingBottom: '20px', fontFamily: 'Avenir Heavy' }}>Member List</h1>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={members.map((data) => `${data.user_firstname} ${data.user_lastname}`)}
                        fullWidth
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            if (newValue === null || newValue === "") {
                                setDisplayedMembers(members);
                            }
                            else {
                                setDisplayedMembers(members.filter(mem => `${mem.user_firstname} ${mem.user_lastname}` === (newValue)));
                            }


                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                            if (newInputValue === null || newInputValue === "") {
                                setDisplayedMembers(members);
                            }
                            else {

                                setDisplayedMembers(members.filter(mem => `${mem.user_firstname} ${mem.user_lastname}`.toLowerCase().includes(newInputValue.toLowerCase())));
                            }

                        }}

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
                        {displayedMembers.map((data) => (
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