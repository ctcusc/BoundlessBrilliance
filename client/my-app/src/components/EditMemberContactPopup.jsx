import './WorkshopPopup.css';
import { useTheme, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


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

const StyledTextField = styled(TextField) ({
    marginBottom: '10px',
    marginTop: '45px',
    "& fieldset": { 
        border: 'none',
    },
    '& legend': { 
        display: 'none',
    },
    input: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        paddingTop: '17px',
        paddingBottom: '15px'
    }
});

const StyledErrorOutlineIcon = styled(ErrorOutlineIcon)({
    width: '12px',
    paddingBottom: '3px',
});

const MultiLineTextField = styled(TextField) ({
    marginBottom: '7px',
    marginTop: '7px',
    "& fieldset": { 
        border: 'none',
    },
    '& legend': { 
        display: 'none',
    },
    textarea: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        marginTop: '-10px',
    }
});

const ContainedButton = styled(Button)({
    backgroundColor: '#1398A0',
    color: 'white',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '550',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '0',
    padding: '8px',
    paddingLeft: '30px',
    paddingRight: '30px',
    textTransform: 'none',
    '&:hover': {
        background: 'rgba(19, 152, 160, 0.6)',
    },
});

const StyledClearIcon = styled(ClearIcon)({
    color: '#969696',
    width: '24px',
    height: '24px',
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
      value: 'CTC Chapter',
      label: 'CTC Chapter',
    },
    {
      value: 'Unknown',
      label: 'Unknown',
    },
];

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
    raceError: false,
    raceHelperText: "",
    genderError: false,
    genderHelperText: "",
};

const EditMemberContactPopup = ({props, setToggleState}) => {

    const theme = useTheme();

    const [formValues, setFormValues] = useState(props.member);

    // form submit
    const [value, setValue] = React.useState(0);
    const [formStates, setFormStates] = useState(defaultFormStates)

    // changing tabs
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    function setToggle() {
        setToggleState(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }

        async function sendData(formValues) {
            const response = await fetch('/api/editUser', {  
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    { 
                        'user_firstname': formValues.user_firstname, 
                        'user_lastname': formValues.user_lastname, 
                        'user_chapter': formValues.user_chapter, 
                        'user_phone': formValues.user_phone,  
                        'user_ethnicity': formValues.user_ethnicity,
                        'user_email': formValues.user_email,
                        'user_gender': formValues.user_gender,
                        'user_id': formValues.user_id,
                    }),
            })
            const data = await response.json();
        }

        sendData(formValues);
        
        setToggle();

        document.location.reload();
    };

    // makes sure all info is valid
    // raises errors on the forms if not
    const validateForm = () => {
        let changedStates = {
          ...defaultFormStates
        };
        let valid = true;
        if (formValues.user_firstname === '') {
          handleChangeIndex(0);
          changedStates.firstNameError = true;
          changedStates.firstNameHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
          changedStates.firstNameVariant = "outlined";
          valid = false;
        }
        if (formValues.user_lastname === '') {
          handleChangeIndex(0);
          changedStates.lastNameError = true;
          changedStates.lastNameHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
          changedStates.lastNameVariant = "outlined";
          valid = false;
        }
        if (formValues.user_phone === '') {
          handleChangeIndex(0);
          changedStates.phoneNumError = true;
          changedStates.phoneNumHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
          changedStates.phoneNumVariant = "outlined";
          valid = false;
        }
        if (formValues.user_email === '') {
          handleChangeIndex(0);
          changedStates.emailError = true;
          changedStates.emailHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
          changedStates.emailVariant = "outlined";
          valid = false;
        }
        if (formValues.user_ethnicity === '') {
          handleChangeIndex(1);
          changedStates.raceError = true;
          changedStates.raceHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
          valid = false;
        }
        if (formValues.user_gender === '') {
          handleChangeIndex(1);
          changedStates.genderError = true;
          changedStates.genderHelperText = <StyledTypography><StyledErrorOutlineIcon/> Required Field</StyledTypography>;
          valid = false;
        }
        setFormStates(changedStates);
        return valid;
    };


    return (
        <div className="popup-center">
            <div className="edit-member-container">
                <button onClick={setToggle} className="popup-admin-icon-corner">
                    <StyledClearIcon />
                </button>
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
                            <StyledTab label="Edit Contact Info" {...a11yProps(0)} />
                            <StyledTab label="Edit Personal Info" {...a11yProps(1)} />
                            </Tabs>
                        </StyledAppBar>
                            <TabPanel value={value} index={0} dir={theme.direction} sx={{ padding: 0 }}>
                              <div className="form-section-app">
                                <div className="flex-items-app contact-form-section">
                                  <StyledTextField 
                                        name="user_firstname" 
                                        defaultValue={formValues.user_firstname} 
                                        onChange={handleInputChange} 
                                        className="half-length" 
                                        id="filled-basic"
                                        variant={formStates.firstNameVariant} 
                                        helperText={formStates.firstNameHelperText} 
                                        error={formStates.firstNameError}
                                        InputProps={{ disableUnderline: true }} 
                                    />
                                  <StyledTextField 
                                        name="user_lastname" 
                                        defaultValue={formValues.user_lastname} 
                                        onChange={handleInputChange} 
                                        className="half-length" 
                                        id="filled-basic" 
                                        variant={formStates.lastNameVariant} 
                                        helperText={formStates.lastNameHelperText} 
                                        error={formStates.lastNameError}
                                        InputProps={{ disableUnderline: true }} 
                                    />
                                </div>
                                <StyledTextField 
                                    name="user_phone" 
                                    defaultValue={formValues.user_phone} 
                                    onChange={handleInputChange} 
                                    id="filled-basic"
                                    variant={formStates.phoneNumVariant} 
                                    helperText={formStates.phoneNumHelperText} 
                                    error={formStates.phoneNumError}
                                    InputProps={{ disableUnderline: true }} 
                                />
                                <StyledTextField 
                                    name="user_email" 
                                    defaultValue={formValues.user_email} 
                                    onChange={handleInputChange} 
                                    id="filled-basic" 
                                    variant={formStates.emailVariant} 
                                    helperText={formStates.emailHelperText} 
                                    error={formStates.emailError} 
                                    InputProps={{ disableUnderline: true }} 
                                />
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
                                            className="drop-down-length"
                                            name="user_ethnicity" 
                                            defaultValue={formValues.user_ethnicity} 
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
                                            className="drop-down-length"
                                            name="user_gender" 
                                            defaultValue={formValues.user_gender} 
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
                                      className="drop-down-length"
                                      name="user_chapter" 
                                      defaultValue={formValues.user_chapter} 
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
                    </Box>
                </div>
                {/* save button */}
                <div className="button-position">
                    <StyledButton type="submit" onClick={handleSubmit}>
                        Save
                    </StyledButton>
                </div>
            </div>
        </div>
    )
}

export default EditMemberContactPopup;