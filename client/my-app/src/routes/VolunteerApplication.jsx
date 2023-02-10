import React from "react";
import "./VolunteerApplication.css";
import { useTheme, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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

const StyledTabs = styled(Tabs)({

});

const StyledAppBar = styled(AppBar)({
    backgroundColor: 'rgba(19, 152, 160, 0.1)',
    boxShadow: 'none',
});
    

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
                        TabIndicatorProps={{style: {backgroundColor: "#1398A0", height: 2}}}
                        >
                        <StyledTab label="Contact Info" {...a11yProps(0)} />
                        <StyledTab label="Personal Info" {...a11yProps(1)} />
                        <StyledTab label="Create Account" {...a11yProps(2)} />
                        </Tabs>
                    </StyledAppBar>
                        <TabPanel value={value} index={0} dir={theme.direction}>
                        Item One
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                        </TabPanel>
                </Box>
                </div>
            </div>
        </div>
    )
}

export default VolunteerApplication