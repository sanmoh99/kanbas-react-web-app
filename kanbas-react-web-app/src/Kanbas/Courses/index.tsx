import { Routes, Route, Navigate } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./PeopleTable";
export default function Courses() {
  return (
    <div id="wd-courses" style={{ marginLeft: '120px' }}>
      <h2>Course 1234</h2>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation />
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
