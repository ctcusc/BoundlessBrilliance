import React, { useState } from "react";
import LoginLogo from "../images/login_logo.svg";
import { Modal, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const CreateWorkshopModal = (props) => {
  const [formValues, setFormValues] = useState({
    workshop_name: "",
    workshop_description: "",
    workshop_date:"", 
    workshop_start_time:"",  
    workshop_location:"", 
  });

  // function setToggle() {
  //   setToggleState(false);
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
};

  const handleSubmit = (event) => {
    event.preventDefault();
    async function sendData(formValues) {
      const response = await fetch('/api/createWorkshop', {  
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(
              { 
                'workshop_name': formValues.workshop_name, 
                'workshop_description': formValues.workshop_description, 
                'workshop_date': moment(formValues.workshop_date).format("MMMM DD YYYY"), 
                'workshop_start_time': formValues.workshop_start_time,  
                'workshop_location': formValues.workshop_location, 
              }),
      })
      const data = await response.json();
    }
      sendData(formValues);
      //setToggle();
      //routing();
    };



  // function routing() {
  //   history.push("/admin-home");
  //   document.location.reload();
  // }
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        style={{ marginTop: "10%" }}
        size="lg"
      >
        <Modal.Body style={{}}>
          <div className="row">
            <div className="col-8">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" className="m-3">
                  <Form.Control
                    type="text"
                    name="workshop_name"
                    value={formValues.workshop_name}
                    onChange={handleInputChange}
                    placeholder="Workshop Name"
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      backgroundColor: "#F6F6F6",
                      color: "#686868",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="date" className="m-3">
                  <Form.Control
                    type="date"
                    name="workshop_date"
                    value={formValues.workshop_date}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      backgroundColor: "#F6F6F6",
                      color: "#686868",
                    }}
                  />
                  {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                </Form.Group>

                <Form.Group controlId="time" className="m-3">
                  <Form.Control
                    type="text"
                    name="workshop_start_time"
                    value={formValues.workshop_start_time}
                    onChange={handleInputChange}
                    placeholder="Time"
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      backgroundColor: "#F6F6F6",
                      color: "#686868",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="location" className="m-3">
                  <Form.Control
                    type="text"
                    name="workshop_location"
                    placeholder="Location"
                    value={formValues.workshop_location}
                    onChange={handleInputChange}
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      backgroundColor: "#F6F6F6",
                      color: "#686868",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formMessage"  className="m-3">
                  <Form.Label
                    style={{ fontFamily: "Avenir", fontSize: "14px" }}
                  >
                    Workshop Description
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="workshop_description"
                    value={formValues.workshop_description}
                    onChange={handleInputChange}
                    rows={5}
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      backgroundColor: "#F6F6F6",
                      color: "#686868",
                    }}
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="col-4 pr-5">
              <div className="h-90">
                <img
                  className="card-img-top p-5 mt-4 mb-5"
                  src={LoginLogo}
                  style={{ height: "25%" }}
                  alt="Card image cap"
                />
              </div>
              <div className="h-10">
                <button
                  type="submit"
                  id="sendlogin"
                  onClick={handleSubmit}
                  className="btn btn-primary h-10 w-75 float-right"
                  style={{
                    fontFamily: "Avenir Heavy",
                    fontSize: "14px",
                    backgroundColor: "#1398A0",
                    borderRadius: "12px",
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateWorkshopModal;
