import React, { useState } from 'react';
import "./VolunteerApplication.css";
import { useTheme, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useHistory } from 'react-router-dom';


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

// styled mui components
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

const StyledButton = styled(Button)({
  fontFamily: 'Avenir',
  fontStyle: 'normal',
  background: '#1398A0',
  borderRadius: '12px',
  color: 'white',
  padding: '10px 30px',
  textTransform: 'none',
  '&:hover': {
    background: 'rgba(19, 152, 160, 0.5)',
  },
});

const StyledTypography = styled(Typography)({
  color: '#dc3545',
  fontFamily: 'Avenir',
  fontStyle: 'normal',
  fontSize: '12px',
  marginBottom: '-20px',
});

const StyledErrorOutlineIcon = styled(ErrorOutlineIcon)({
    width: '12px',
    paddingBottom: '3px',
});

// dropdown options
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
    value: 'Hispanic',
    label: 'Hispanic',
  },
  {
    value: 'Native Hawaiian or Other Pacific Islander',
    label: 'Native Hawaiian or Other Pacific Islander',
  },
  {
    value: 'Two or More Races',
    label: 'Two or More Races',
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
    value: 'CTC',
    label: 'CTC Chapter',
  },
  {
    value: 'Unknown',
    label: 'Unknown',
  },
];


// form default values
const defaultValues = {
  firstName: "",
  lastName: "",
  phoneNum: "",
  email: "",
  emailConfirm: "",
  race: "",
  gender: "",
  team: "",
  password: "",
  passwordConfirm: "",
};

const defaultFormStates = {
  firstNameError: false,
  firstNameHelperText: "",
  firstNameVariant: "filled",
  lastNameError: false,
  lastNameHelperText: "",
  lastNameVariant: "filled",
  phoneNumError: false,
  phoneNumHelperText: "",
  phoneNumVariant: "filled",
  emailError: false,
  emailHelperText: "",
  emailVariant: "filled",
  emailConfirmError: false,
  emailConfirmVariant: "filled",
  raceError: false,
  raceHelperText: "",
  genderError: false,
  genderHelperText: "",
  passwordError: false,
  passwordHelperText: "",
  passwordVariant: "filled",
  passwordConfirmError: false,
  passwordConfirmVariant: "filled",
};


const VolunteerApplication = () => {
    const theme = useTheme();
    const history = useHistory();

    const [value, setValue] = React.useState(0);
  
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index: number) => {
      setValue(index);
    };

    // form submit 
    const [formValues, setFormValues] = useState(defaultValues)
    const [formStates, setFormStates] = useState(defaultFormStates)


    const handleSubmit = (event) => {
      event.preventDefault();
      if (!validateForm()) {
        return;
      }
      setFormStates(defaultFormStates);
      console.log(formValues.gender);
      console.log(formValues.phoneNum);

      async function sendData(formValues) {
        const response = await fetch('/api/createUser', {  
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                { 
                    "user_firstname": formValues.firstName,
                    "user_lastname": formValues.lastName,
                    "user_phone": formValues.phoneNum,
                    "user_gender": formValues.gender,
                    "user_ethnicity": formValues.race,
                    "user_gender": formValues.gender,
                    "user_email": formValues.emailConfirm,
                    "user_chapter": formValues.team,
                    "user_password": formValues.passwordConfirm,
                }),
        })
        const data = await response.json();
      }

      sendData(formValues);
      routing();
    };

    function routing() {
      history.push("/application-submitted");
      document.location.reload();
    }

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

    // makes sure all info is valid
    // raises errors on the forms if not
    const validateForm = () => {
      let changedStates = {
        ...defaultFormStates
      };
      let valid = true;
      if (formValues.firstName === '') {
        handleChangeIndex(0);
        changedStates.firstNameError = true;
        changedStates.firstNameHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
        changedStates.firstNameVariant = "outlined";
        valid = false;
      }
      if (formValues.lastName === '') {
        handleChangeIndex(0);
        changedStates.lastNameError = true;
        changedStates.lastNameHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
        changedStates.lastNameVariant = "outlined";
        valid = false;
      }
      if (formValues.phoneNum === '') {
        handleChangeIndex(0);
        changedStates.phoneNumError = true;
        changedStates.phoneNumHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
        changedStates.phoneNumVariant = "outlined";
        valid = false;
      }
      if (formValues.email === '') {
        handleChangeIndex(0);
        changedStates.emailError = true;
        changedStates.emailHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
        changedStates.emailVariant = "outlined";
        valid = false;
      }
      else if (formValues.emailConfirm != formValues.email) {
        handleChangeIndex(0);
        changedStates.emailError = true;
        changedStates.emailConfirmError = true;
        changedStates.emailHelperText = <StyledTypography><StyledErrorOutlineIcon/> Email addresses do not match</StyledTypography>;
        changedStates.emailVariant = "outlined";
        changedStates.emailConfirmVariant = "outlined";
        valid = false;
      }
      if (formValues.race === '') {
        handleChangeIndex(1);
        changedStates.raceError = true;
        changedStates.raceHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
        valid = false;
      }
      if (formValues.gender === '') {
        handleChangeIndex(1);
        changedStates.genderError = true;
        changedStates.genderHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
        valid = false;
      }
      if (formValues.password === '') {
        handleChangeIndex(2);
        changedStates.passwordError = true;
        changedStates.passwordHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
        changedStates.passwordVariant = "outlined";
        valid = false;
      }
      else if (formValues.passwordConfirm != formValues.password) {
        handleChangeIndex(2);
        changedStates.passwordError = true;
        changedStates.passwordConfirmError = true;
        changedStates.passwordHelperText = <StyledTypography><StyledErrorOutlineIcon/> Passwords do not match</StyledTypography>;
        changedStates.passwordVariant = "outlined";
        changedStates.passwordConfirmVariant = "outlined";
        valid = false;
      }
      setFormStates(changedStates);
      return valid;
    };

    return (
        <div>
            <div className="banner-app"></div>
            <div className="center-div-app">
              <div className="login-container-app">
                  <h2>VOLUNTEER APPLICATION</h2>
                  <p>Thanks for you interest in volunteering with Boundless Brilliance.</p>
                  <p>Please fill out this form and we'll get back to you soon.</p>
                  <p className="subtext-app">Already have an account? <span><a href="/">Log in here.</a></span></p>

                  <div className="tab-container-app">
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
                              <div className="form-section-app">
                                <div className="flex-items-app">
                                  <StyledTextField name="firstName" value={formValues.firstName} onChange={handleInputChange} className="half-length" id="filled-basic" variant={formStates.firstNameVariant} helperText={formStates.firstNameHelperText} error={formStates.firstNameError} label="First Name" InputProps={{ disableUnderline: true }} />
                                  <StyledTextField name="lastName" value={formValues.lastName} onChange={handleInputChange} className="half-length" id="filled-basic" variant={formStates.lastNameVariant} helperText={formStates.lastNameHelperText} error={formStates.lastNameError} label="Last Name" InputProps={{ disableUnderline: true }} />
                                </div>
                                <StyledTextField name="phoneNum" value={formValues.phoneNum} onChange={handleInputChange} id="filled-basic" label="Phone Number" variant={formStates.phoneNumVariant} helperText={formStates.phoneNumHelperText} error={formStates.phoneNumError} InputProps={{ disableUnderline: true }} />
                                <StyledTextField name="email" value={formValues.email} onChange={handleInputChange} id="filled-basic" label="Email Address"  variant={formStates.emailVariant} helperText={formStates.emailHelperText} error={formStates.emailError} InputProps={{ disableUnderline: true }} />
                                <StyledTextField name="emailConfirm" value={formValues.emailConfirm} onChange={handleInputChange} id="filled-basic" label="Confirm email address" variant={formStates.emailConfirmVariant} error={formStates.emailConfirmError} InputProps={{ disableUnderline: true }} />
                              </div>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                              <div className="form-section-app">
                                <h3>Demographics</h3>
                                <div className="flex-items-app">
                                  <div>
                                    <h4>Race</h4>
                                    <TextField
                                      select
                                      label="Select race"
                                      className="drop-down-length"
                                      name="race" 
                                      value={formValues.race} 
                                      onChange={handleInputChange}
                                      helperText={formStates.raceHelperText} 
                                      error={formStates.raceError}
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
                                      className="drop-down-length"
                                      name="gender" 
                                      value={formValues.gender} 
                                      onChange={handleInputChange}
                                      helperText={formStates.genderHelperText} 
                                      error={formStates.genderError}
                                    >
                                      {genders.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                        </MenuItem>
                                      ))}
                                    </TextField>
                                  </div>
                                </div>
                                <h3>Team</h3>
                                <div>
                                    <h4>Chapter</h4>
                                    <TextField
                                      select
                                      label="Select chapter"
                                      className="drop-down-length"
                                      name="team" 
                                      value={formValues.team} 
                                      onChange={handleInputChange}
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
                              <div className="form-section-app">
                                <StyledTextField name="password" value={formValues.password} onChange={handleInputChange} id="filled-basic" label="Password" variant={formStates.passwordVariant} helperText={formStates.passwordHelperText} error={formStates.passwordError} InputProps={{ disableUnderline: true }} />
                                <StyledTextField name="passwordConfirm" value={formValues.passwordConfirm} onChange={handleInputChange} id="filled-basic" label="Confirm password" variant={formStates.passwordConfirmVariant} error={formStates.passwordConfirmError} InputProps={{ disableUnderline: true }} />
                              </div>
                            </TabPanel>
                      </Box>
                      
                </div>
                {/* next and submit button */}
                <div className="button-position">
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <StyledButton onClick={()=>handleChangeIndex(1)}>
                      Next
                    </StyledButton>
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    <StyledButton onClick={()=>handleChangeIndex(2)}>
                      Next
                    </StyledButton>
                  </TabPanel>
                  <TabPanel value={value} index={2} dir={theme.direction}>
                    <StyledButton type="submit" onClick={handleSubmit}>
                      Submit
                    </StyledButton>
                  </TabPanel>
                </div>
              </div>  
            </div>
        </div>
    )
}

export default VolunteerApplication