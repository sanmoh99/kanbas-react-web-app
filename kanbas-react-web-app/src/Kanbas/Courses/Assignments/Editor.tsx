import React from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div className="container" id="wd-assignments-editor">
      <h3>Edit Assignment</h3>

      {/* Assignment Name */}
      <Form.Group className="mb-3">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
      </Form.Group>

      {/* Description */}
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. 
The landing page should include the following: 
- Your full name and section 
- Links to each of the lab assignments 
- Link to the Kanbas application 
- Links to all relevant source code repositories 
The Kanbas application should include a link to navigate back to the landing page.`}
        />
      </Form.Group>

      {/* Points and Assignment Group */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Points</Form.Label>
            <Form.Control type="number" defaultValue={100} />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label>Assignment Group</Form.Label>
            <Form.Select defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="PROJECTS">PROJECTS</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Display Grade and Submission Type */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Display Grade As</Form.Label>
            <Form.Select defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label>Submission Type</Form.Label>
            <Form.Select defaultValue="Online">
              <option value="Online">Online</option>
              <option value="On Paper">On Paper</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      {/* Online Entry Options */}
      <Form.Group className="mb-3">
        <Form.Label>Online Entry Options</Form.Label>
        <Form.Check
          type="checkbox"
          id="text-entry"
          label="Text Entry"
        />
        <Form.Check
          type="checkbox"
          id="website-url"
          label="Website URL"
        />
        <Form.Check
          type="checkbox"
          id="media-recordings"
          label="Media Recordings"
        />
        <Form.Check
          type="checkbox"
          id="file-uploads"
          label="File Uploads"
        />
      </Form.Group>

      {/* Assign To, Due Date, Availability */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Assign To</Form.Label>
            <Form.Select>
              <option>Everyone</option>
              <option>Specific Group</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label>Due</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-13" />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Available From</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-06" />
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label>Available Until</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-20" />
          </Form.Group>
        </Col>
      </Row>

      {/* Save/Cancel Buttons */}
      <div className="mt-3">
        <Button variant="secondary" className="me-2">
          Cancel
        </Button>
        <Button variant="success" type="submit">
          Save
        </Button>
      </div>
    </div>
  );
}
