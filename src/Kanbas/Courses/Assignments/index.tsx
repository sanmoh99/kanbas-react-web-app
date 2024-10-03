import React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { FaSearch, FaPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search bar with a magnifying glass icon */}
        <InputGroup className="w-50">
          <InputGroup.Text>
            <FaSearch />
          </InputGroup.Text>
          <Form.Control placeholder="Search for Assignments" />
        </InputGroup>
        {/* Group and Assignment buttons */}
        <div>
          <Button variant="secondary" className="me-2">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>
      
      {/* Assignment list header */}
      <h3 className="mb-3">
        ASSIGNMENTS <span className="text-muted">40% of Total</span>
      </h3>
      
      {/* Assignment items */}
      <ul className="list-group">
        <li className="list-group-item border-start border-success border-5">
          <a className="text-decoration-none fw-bold text-danger" href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a>
          <p className="mb-0 text-muted">
            Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
          </p>
        </li>
        <li className="list-group-item border-start border-success border-5">
          <a className="text-decoration-none fw-bold text-danger" href="#/Kanbas/Courses/1234/Assignments/124">
            A2 - CSS + BOOTSTRAP
          </a>
          <p className="mb-0 text-muted">
            Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
          </p>
        </li>
        <li className="list-group-item border-start border-success border-5">
          <a className="text-decoration-none fw-bold text-danger" href="#/Kanbas/Courses/1234/Assignments/125">
            A3 - JAVASCRIPT + REACT
          </a>
          <p className="mb-0 text-muted">
            Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts
          </p>
        </li>
      </ul>
    </div>
  );
}
