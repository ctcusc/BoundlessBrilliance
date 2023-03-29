import React, { useState } from 'react';
import LoginLogo from "../images/login_logo.svg"
import { Modal, Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateWorkshopModal = (props) => {
  const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission logic
      }

      
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} style={{marginTop: "10%"}} size="lg">
        <Modal.Body style={{}}>
          <div className="row">
            <div className="col-8">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" className="m-3">
                  <Form.Control type="text" placeholder="Workshop Name" style={{fontFamily:"Avenir", fontSize : "16px", backgroundColor : "#F6F6F6", color: "#686868"}}/>
                </Form.Group>

                <Form.Group controlId="date" className="m-3">
                  <Form.Control type="date" placeholder="Enter email" style={{fontFamily:"Avenir", fontSize : "16px", backgroundColor : "#F6F6F6", color: "#686868"}}/>
                  {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                </Form.Group>

                <Form.Group controlId="time" className="m-3">
                  <Form.Control type="text" placeholder="Time" style={{fontFamily:"Avenir", fontSize : "16px", backgroundColor : "#F6F6F6", color: "#686868"}}/>
                </Form.Group>

                <Form.Group controlId="location" className="m-3">
                  <Form.Control type="text" placeholder="Location" style={{fontFamily:"Avenir", fontSize : "16px", backgroundColor : "#F6F6F6", color: "#686868"}}/>
                </Form.Group>


                <Form.Group controlId="formMessage" className="m-3">
                  <Form.Label style={{fontFamily:"Avenir", fontSize : "14px"}}>Workshop Description</Form.Label>
                  <Form.Control as="textarea" rows={5} style={{fontFamily:"Avenir", fontSize : "16px", backgroundColor : "#F6F6F6", color: "#686868"}}/>
                </Form.Group>

              </Form>
            </div>
            <div className="col-4 pr-5">
              <div className="h-90">
                <img className="card-img-top p-5 mt-4 mb-5" src={LoginLogo} style={{height: "25%"}} alt="Card image cap"/>
              </div>
              <div className="h-10">
                <button type="submit" id="sendlogin" className="btn btn-primary h-10 w-75 float-right" style={{fontFamily:"Avenir Heavy", fontSize : "14px", backgroundColor: "#1398A0", borderRadius: "12px"}}>Create</button>
              </div>
              </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateWorkshopModal;
