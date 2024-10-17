import { useParams, Link } from "react-router-dom";
import * as db from "../../Database" // Assuming the assignments are in the Database

export default function Assignments() {
  const { cid } = useParams(); // Get course ID from the URL
  const assignments = db.assignments.filter(assignment => assignment.course === cid); // Filter assignments for this course

  return (
    <div id="wd-assignments">
      <h2>Assignments for {cid}</h2>
      <ul className="list-group">
        {assignments.length > 0 ? (
          assignments.map((assignment) => (
            <li key={assignment._id} className="list-group-item">
              <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                {assignment.title}
              </Link>
            </li>
          ))
        ) : (
          <li className="list-group-item">No assignments found for this course.</li>
        )}
      </ul>
    </div>
  );
}
