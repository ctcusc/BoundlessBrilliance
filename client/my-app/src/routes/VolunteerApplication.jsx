import React from "react";
import "./VolunteerApplication.css";
import { useTheme, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
};
  
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
};
  
function a11yProps(index: number) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
};

const StyledTab = styled(Tab)({
    color: '#00747B',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    textTransform: 'none',
});

const StyledAppBar = styled(AppBar)({
    backgroundColor: 'rgba(19, 152, 160, 0.1)',
    boxShadow: 'none',
});

const StyledTextField = styled(TextField)({
    marginTop: '5%',
    marginBottom: '1%',
});


const races = [
  {
    value: 'White',
    label: 'White',
  },
  {
    value: 'Black or African American',
    label: 'Black or African American',
  },
  {
    value: 'American Indian or Alaskan Islander',
    label: 'American Indian or Alaskan Islander',
  },
  {
    value: 'Asian',
    label: 'Asian',
  },
  {
    value: 'Native Hawaiian or Other Pacific Islander',
    label: 'Native Hawaiian or Other Pacific Islander',
  },
];

const genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

const teams = [
  {
    value: 'Unknown',
    label: 'Unknown',
  },
];
    

const VolunteerApplication = () => {
    const theme = useTheme();

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index: number) => {
      setValue(index);
    };

    return (
        <div>
            <div className="banner"></div>
            <div className="login-container">
                <h2>VOLUNTEER APPLICATION</h2>
                <p>Thanks for you interest in volunteering with Boundless Brilliance.</p>
                <p>Please fill out this form and we'll get back to you soon.</p>
                <p className="subtext">Already have an account? <span><a href="#">Log in here.</a></span></p>

                <div className="tab-container">
                <Box sx={{ width: 500 }}>
                    <StyledAppBar position="static">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        TabIndicatorProps={{style: {backgroundColor: "#1398A0", height: 3}}}
                        >
                        <StyledTab label="Contact Info" {...a11yProps(0)} />
                        <StyledTab label="Personal Info" {...a11yProps(1)} />
                        <StyledTab label="Create Account" {...a11yProps(2)} />
                        </Tabs>
                    </StyledAppBar>
                        <TabPanel value={value} index={0} dir={theme.direction} sx={{ padding: 0 }}>
                          <div className="form-section">
                            <div className="flex-items">
                              <StyledTextField className="halfLength" id="filled-basic" label="First Name" variant="filled" InputProps={{ disableUnderline: true }} />
                              <StyledTextField className="halfLength" id="filled-basic" label="Last Name" variant="filled" InputProps={{ disableUnderline: true }} />
                            </div>
                            <StyledTextField id="filled-basic" label="Phone Number" variant="filled" InputProps={{ disableUnderline: true }} />
                            <StyledTextField id="filled-basic" label="Email Address" variant="filled" InputProps={{ disableUnderline: true }} />
                            <StyledTextField id="filled-basic" label="Confirm email address" variant="filled" InputProps={{ disableUnderline: true }} />
                          </div>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                          <div className="form-section">
                            <h3>Demographics</h3>
                            <div className="flex-items">
                              <div>
                                <h4>Race</h4>
                                <TextField
                                  select
                                  label="Select race"
                                  className="halfLength"
                                >
                                  {races.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </div>
                              <div>
                                <h4>Gender</h4>
                                <TextField
                                  select
                                  label="Select gender"
                                  className="halfLength"
                                >
                                  {genders.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </div>
                            </div>
                            <div>
                                <h4>Team</h4>
                                <TextField
                                  select
                                  label="Select team"
                                  className="halfLength"
                                >
                                  {teams.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                      {option.label}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </div>
                          </div>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                          <div className="form-section">
                            <StyledTextField id="filled-basic" label="Password" variant="filled" InputProps={{ disableUnderline: true }} />
                            <StyledTextField id="filled-basic" label="Confirm password" variant="filled" InputProps={{ disableUnderline: true }} />
                          </div>
                        </TabPanel>
                </Box>
                </div>
            </div>
        </div>
    )
}

export default VolunteerApplication