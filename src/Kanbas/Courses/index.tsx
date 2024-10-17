import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./PeopleTable";
import * as db from "../Database"; // Assuming the course data is in the Database

export default function Courses() {
  const { cid } = useParams(); // Get the course ID from the URL
  const { pathname } = useLocation(); // Get the current path to use for breadcrumbs

  // Find the course by ID from the Database
  const course = db.courses.find((course) => course._id === cid);

  // Array of links for navigation
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses" style={{ marginLeft: '120px' }}>
      {/* Breadcrumb implementation */}
      <h2 style={{ color: 'red' }}>
  {course ? course.name : "Course"} &gt; {pathname.split("/")[4]}
</h2>

      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation links={links} /> {/* Pass the links array to CoursesNavigation */}
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="people" element={<PeopleTable />} /> {/* Add this line */}
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
