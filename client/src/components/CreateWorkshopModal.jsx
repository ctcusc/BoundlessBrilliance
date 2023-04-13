import React, { useState } from "react";
import LoginLogo from "../images/login_logo.svg";
import { Modal, Form } from "react-bootstrap";
import moment from "moment";
import { useHistory } from "react-router-dom";

const CreateWorkshopModal = (props) => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    workshop_name: "",
    workshop_description: "",
    workshop_date:"", 
    workshop_start_time:"",  
    workshop_end_time:"",  
    workshop_location:"", 
  });

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
                'workshop_end_time': formValues.workshop_end_time, 
                'workshop_location': formValues.workshop_location, 
              }),
      })
      const data = await response.json();
    }
      sendData(formValues);
      routing();
    };

  function routing() {
    history.push("/admin-home");
    document.location.reload();
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        style={{ marginTop: "10vh" }}
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
                </Form.Group>

                <Form.Group controlId="time" className="m-3">
                  <div  style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      color: "#686868",
                    }}>Start Time</div>
                  <Form.Control
                    type="text"
                    name="workshop_start_time"
                    value={formValues.workshop_start_time}
                    onChange={handleInputChange}
                    placeholder="8:00 AM"
                    style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      backgroundColor: "#F6F6F6",
                      color: "#686868",
                    }}
                  />
                </Form.Group>
                
                <Form.Group controlId="time" className="m-3">
                <div  style={{
                      fontFamily: "Avenir",
                      fontSize: "16px",
                      color: "#686868",
                    }}>End Time</div>
                  <Form.Control
                    type="text"
                    name="workshop_end_time"
                    value={formValues.workshop_end_time}
                    onChange={handleInputChange}
                    placeholder="8:00 PM"
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
                  className="card-img-top"
                  src={LoginLogo}
                  style={{ height: "40%", minHeight: "50px", padding:"20%", marginLeft: "10%", marginTop: "10%", marginBottom: "10%" }}
                  alt="Card image cap"
                />
              </div>
              <div className="h-10" style={{paddingTop: '60px'}}>
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
                    marginRight: "5%"
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreateWorkshopModal;
