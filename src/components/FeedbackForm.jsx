import React, { useState } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { FaRegFaceAngry } from "react-icons/fa6";
import { IoMdSad } from "react-icons/io";
import { BsEmojiExpressionless } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    heardAbout: '',
    registrationRating: '',
    navigationRating: '',
  });
  const [newColor,setNewColor] = useState(0)
  const [submittedData, setSubmittedData] = useState([]); // State to store all submitted data

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the current form data to the submittedData array
    setSubmittedData([...submittedData, formData]);

    // Clear the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      heardAbout: '',
      registrationRating: '',
      navigationRating: '',
    });
  };
    let emoji =(val)=>{
      let newemoji = {...formData,['emoji'] : val}
      setFormData(newemoji)
      console.log(newemoji);
      
      setNewColor(val);
    }
  //let emoji = [<FaRegFaceAngry />,<IoMdSad /> ,<IoMdSad /> ,<IoMdSad /> ,<IoMdSad />]

  return (
    <div style={{textAlign:"center"}}>
      <Form onSubmit={handleSubmit} className="p-4">
        <h3>User Registration Feedback</h3>
        <p>We would love to hear your thoughts about your registration experience.</p>

        <Row>
          <Col md={6}>
            <Form.Group controlId="firstName" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="phone" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="heardAbout" className="mb-3">
          <Form.Label>How did you hear about us?</Form.Label>
          <Form.Select
            name="heardAbout"
            value={formData.heardAbout}
            onChange={handleChange}
          >
            <option>Select an option</option>
            <option>Social Media</option>
            <option>Friends/Family</option>
            <option>Advertisement</option>
            <option>Other</option>
          </Form.Select>
        </Form.Group>

        <h5>Rate your experience</h5>

        

        <Form.Group controlId="registrationRating" className="mb-3">  
          <Form.Label>Registration Process</Form.Label>
          <div className="d-flex justify-content-between">
          <FaRegFaceAngry onMouseOver={()=> emoji(1)} color={newColor == 1 ? "red" : ''} style={{fontSize:"30px"}}/>
          <IoMdSad onMouseOver={()=> emoji(2)} color={newColor == 2 ? "orange" : ''}  style={{fontSize:"35px"}}/> 
          <BsEmojiExpressionless onMouseOver={()=> emoji(3)} color={newColor == 3 ? "yellow" : ''}  style={{fontSize:"35px"}}/> 
          <BsEmojiSmile onMouseOver={()=> emoji(4)} color={newColor == 4 ? "lightgreen" : ''}  style={{fontSize:"35px"}}/> 
          <BsEmojiHeartEyes  onMouseOver={()=> emoji(5)} color={newColor == 5 ? "green" : ''}  style={{fontSize:"35px"}}/>
            {/* {emoji.map((rate, index) => (
              <Form.Check
                inline
                key={index}
                type="radio"
                label={<FaRegFaceAngry />}
                name="registrationRating"
                value={rate}
                onChange={handleChange}
                checked={formData.registrationRating === String(rate)}
                className={`btn btn-outline-${index === 1 ? 'danger' : rate === 5 ? 'success' : 'secondary'} mx-1`}
              />
            ))} */}
          </div>
        </Form.Group>

        <Form.Group controlId="navigationRating" className="mb-3">
          {/* <Form.Label>Website Navigation</Form.Label> */}
          {/* <div className="d-flex justify-content-between">
            {emoji.map((rate, index) => (
              <Form.Check
                inline
                key={index}
                type="radio"
                label={<IoMdSad />}
                name="navigationRating"
                value={rate}
                onChange={handleChange}
                checked={formData.navigationRating === String(rate)}
                className={`btn btn-outline-${rate === 1 ? 'danger' : rate === 5 ? 'success' : 'secondary'} mx-1`}
              />
            ))}
          </div> */}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Feedback
        </Button>
      </Form>

      {/* Display submitted data in a table */}
      {submittedData.length > 0 && (
        <div className="mt-5">
          <h4>Submitted Feedback</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Heard About</th>
                <th>Registration Rating</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.heardAbout}</td>
                  <td>
                    {[<FaRegFaceAngry />,<IoMdSad /> ,<BsEmojiExpressionless/> ,<BsEmojiSmile /> ,<BsEmojiHeartEyes />]
                    .filter((val,i)=>i==data.emoji)
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
