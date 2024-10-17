import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";  // Adjust this path as needed
import { useState } from "react";

// Define the assignment type
interface Assignment {
  _id: string;
  title: string;
  description?: string;
  points?: number;
  course: string;
  dueDate?: string;
  availableDate?: string;
}

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get course ID and assignment ID from the URL
  const assignment = db.assignments.find((a: Assignment) => a._id === aid); // Find the assignment

  // Create state variables for the assignment fields
  const [title, setTitle] = useState(assignment?.title || "");
  const [description, setDescription] = useState(assignment?.description || "");
  const [points, setPoints] = useState(assignment?.points || 0);
  const [dueDate, setDueDate] = useState(assignment?.dueDate || "");
  const [availableDate, setAvailableDate] = useState(assignment?.availableDate || "");

  return (
    <div id="wd-assignment-editor">
      <h2>Assignment Editor for {title}</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Assignment Name</label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="points" className="form-label">Points</label>
        <input
          type="number"
          id="points"
          className="form-control"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">Due Date</label>
        <input
          type="datetime-local"
          id="dueDate"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="availableDate" className="form-label">Available Date</label>
        <input
          type="datetime-local"
          id="availableDate"
          className="form-control"
          value={availableDate}
          onChange={(e) => setAvailableDate(e.target.value)}
        />
      </div>

      <div className="d-flex justify-content-between">
        {/* Cancel button: Goes back to the list of assignments */}
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary">
          Cancel
        </Link>

        {/* Save button: For now, we just navigate back to the assignments */}
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-primary">
          Save
        </Link>
      </div>
    </div>
  );
}
