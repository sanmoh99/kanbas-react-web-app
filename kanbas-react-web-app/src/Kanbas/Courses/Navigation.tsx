import { Link, useLocation } from "react-router-dom";
import "./styles.css"; // Assuming your styles are in this file
import { useState, useEffect } from "react";

export default function CoursesNavigation() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  // This will track the current route and set the active tab accordingly
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <div id="wd-courses-navigation" className="list-group f5-5 rounded-0">
      <Link
        to="/Kanbas/Courses/1234/Home"
        id="wd-course-home-link"
        className={`list-group-item ${activeTab === "/Kanbas/Courses/1234/Home" ? "active" : "text-danger"} border-0`}
      >
        Home
      </Link>
      
      <Link
        to="/Kanbas/Courses/1234/Modules"
        id="wd-course-modules-link"
        className={`list-group-item ${activeTab === "/Kanbas/Courses/1234/Modules" ? "active" : "text-danger"} border-0`}
      >
        Modules
      </Link>
      
      <Link
        to="/Kanbas/Courses/1234/Piazza"
        id="wd-course-piazza-link"
        className={`list-group-item ${activeTab === "/Kanbas/Courses/1234/Piazza" ? "active" : "text-danger"} border-0`}
      >
        Piazza
      </Link>
      
      <Link
        to="/Kanbas/Courses/1234/Zoom"
        id="wd-course-zoom-link"
        className={`list-group-item ${activeTab === "/Kanbas/Courses/1234/Zoom" ? "active" : "text-danger"} border-0`}
      >
        Zoom
      </Link>
      
      <Link
        to="/Kanbas/Courses/1234/Assignments"
        id="wd-course-assignments-link"
        className={`list-group-item ${activeTab === "/Kanbas/Courses/1234/Assignments" ? "active" : "text-danger"} border-0`}
      >
        Assignments
      </Link>
      
      <Link
        to="/Kanbas/Courses/1234/Quizzes"
        id="wd-course-quizzes-link"
        className={`list-group-item ${activeTab === "/Kanbas/Courses/1234/Quizzes" ? "active" : "text-danger"} border-0`}
      >
        Quizzes
      </Link>
      
      <Link
        to="/Kanbas/Courses/1234/People"
        id="wd-course-people-link"
        className={`list-group-item ${activeTab === "/Kanbas/Courses/1234/People" ? "active" : "text-danger"} border-0`}
      >
        People
      </Link>
    </div>
  );
}
