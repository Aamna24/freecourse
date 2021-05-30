import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ScrollToMount from "../common/ScrollToMount";
import FormContainer from "./FormContainer";
import * as auth from "../services/adminService";
import { toast } from "react-toastify";
toast.configure();
const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState();
  const [content, setContent] = useState();
  const [benefits, setBenefits] = useState();
  const [length, setLength] = useState();
  const [awardingBody, setAwardingBody] = useState();
  const [courseLevel, setLevel] = useState();
  const [funding, setFunding] = useState();
  const [learningMethods, setLearning] = useState();
  const [img, setImage] = useState();

  const [validated, setValidated] = useState(false);

  const submitHandler = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      const data = new FormData();
      data.append("courseTitle", title);
      data.append("courseDescription", description);
      data.append("courseContent", content);
      data.append("courseBenefits", benefits);
      data.append("courseLength", length);
      data.append("awardingBody", awardingBody);
      data.append("courseLevel", courseLevel);
      data.append("funding", funding);
      data.append("learningMethods", learningMethods);
      data.append("img", img);
      const res = await auth.addCourse(data);
      if (res.status === 201) {
        toast.success("Course Added");
      }
      else{
        console.log(res.error)
      }
    }
    setValidated(true);
  };

  return (
    <FormContainer>
      <ScrollToMount />

      <h3>Add Course</h3>

      <Form noValidate validated={validated} onSubmit={submitHandler}>
        <Form.Group controlId="title">
          <Form.Label>Title </Form.Label>
          <Form.Control
            atypes="text"
            name="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description </Form.Label>
          <Form.Control
            required
            name="description"
            as="textarea"
            rows={10}
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDesc(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>Content </Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            rows={10}
            required
            placeholder="Enter Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="benefits">
          <Form.Label>Benefits </Form.Label>
          <Form.Control
            type="text"
            name="benefits"
            value={benefits}
            onChange={(e) => setBenefits(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="length">
          <Form.Label>Length</Form.Label>
          <Form.Control
            type="text"
            name="length"
            required
            value={length}
            onChange={(e) => setLength(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="awardingBody">
          <Form.Label>Awarding Body</Form.Label>
          <Form.Control
            type="text"
            name="awardingBody"
            required
            value={awardingBody}
            onChange={(e) => setAwardingBody(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="courseLevel">
          <Form.Label>Level</Form.Label>
          <Form.Control
            type="text"
            name="courseLevel"
            required
            value={courseLevel}
            onChange={(e) => setLevel(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="funding">
          <Form.Label>Funding</Form.Label>
          <Form.Control
            type="text"
            name="funding"
            required
            value={funding}
            onChange={(e) => setFunding(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="learningMethods">
          <Form.Label>Learning Methods</Form.Label>
          <Form.Control
            type="text"
            name="learningMethods"
            required
            value={learningMethods}
            onChange={(e) => setLearning(e.target.value)}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="img">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            required
            //value={img}
            onChange={(e) => setImage(e.target.files[0])}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please fill the required field.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddCourse;
