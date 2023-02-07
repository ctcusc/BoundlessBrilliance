import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CalenderMonth from "@mui/icons-material/CalendarMonth";
import QueryBuilder from "@mui/icons-material/QueryBuilder";
import Place from "@mui/icons-material/Place";
import Box from "@mui/material/Box";
import { margin } from "@mui/system";

function HPAssignmentCard() {
  return (
    <Card
      sx={{
        backgroundColor: "white",
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "3%",
        borderRadius: "25px",
      }}
    >
      <CardHeader
        sx={{
          backgroundColor: "#8cdcff",
        }}
        titleTypographyProps={{ variant: "h7" }}
        title={"day"}
        subheaderTypographyProps={{ variant: "h5" }}
        subheader={"Introduction"}
      />
      <CardContent>

        <br />
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <CalenderMonth />
                <h6>Thursday, October 21, 2002</h6>
            </div> 
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <QueryBuilder />
                <h6>10:00 am</h6>
            </div> 
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}>
                <Place />
                <h6>1234 west USC place, CA 90007</h6>
            </div> 
            <br />
            <Button variant="text">More Info</Button>
        </div>
            </Grid>
            <Grid item xs={2} >
                <Box sx={{marginTop: "40%"}}>
                    <div style={{marginBottom: "4px"}} >
                        <Button variant="contained">button</Button>
                    </div>
                    
                    <div>
                        <Button variant="contained">button</Button>
                    </div>
                </Box>
                
            </Grid>
        </Grid>
        

      </CardContent>
      <br />
    </Card>
  );
}

export default HPAssignmentCard;
