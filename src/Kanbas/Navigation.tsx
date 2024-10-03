import React, { useState, useEffect } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser, FaFlask } from "react-icons/fa6"; // Import the Lab icon
import { Link, useLocation } from "react-router-dom"; // Assuming you're using react-router-dom for navigation

export default function KanbasNavigation() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const location = useLocation(); // Use react-router-dom to detect the current route

  useEffect(() => {
    // Set default active section based on the URL
    if (location.pathname.includes("/Kanbas/Account")) {
      setActiveSection("Account");
    } else if (location.pathname.includes("/Kanbas/Dashboard")) {
      setActiveSection("Dashboard");
    } else if (location.pathname.includes("/Kanbas/Courses")) {
      setActiveSection("Courses");
    } else if (location.pathname.includes("/Kanbas/Inbox")) {
      setActiveSection("Inbox");
    } else if (location.pathname.includes("/Kanbas/Calendar")) {
      setActiveSection("Calendar");
    } else if (location.pathname.includes("/Kanbas/Settings")) {
      setActiveSection("Settings");
    } else if (location.pathname.includes("/Labs")) {  // Check if the Labs section is active
      setActiveSection("Labs");
    }
  }, [location.pathname]);

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div 
      id="wd-kanbas-navigation"
      style={{ width: 110 }} // Sidebar width set to 110px
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      {/* Northeastern University Link with Image */}
      <a
        id="wd-neu-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" alt="NEU Logo" width="75px" />
      </a>
      <br />

      {/* Account Link */}
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 ${
          activeSection === "Account" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => handleLinkClick("Account")}
      >
        <FaRegCircleUser className={`fs-1 ${activeSection === "Account" ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      <br />

      {/* Dashboard Link */}
      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${
          activeSection === "Dashboard" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => handleLinkClick("Dashboard")}
      >
        <AiOutlineDashboard className={`fs-1 text-danger`} />
        <br />
        Dashboard
      </Link>
      <br />

      {/* Courses Link */}
      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={`list-group-item text-center border-0 ${
          activeSection === "Courses" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => handleLinkClick("Courses")}
      >
        <LiaBookSolid className={`fs-1 text-danger`} />
        <br />
        Courses
      </Link>
      <br />

      {/* Inbox Link */}
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={`list-group-item text-center border-0 ${
          activeSection === "Inbox" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => handleLinkClick("Inbox")}
      >
        <FaInbox className={`fs-1 text-danger`} />
        <br />
        Inbox
      </Link>
      <br />

      {/* Calendar Link */}
      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={`list-group-item text-center border-0 ${
          activeSection === "Calendar" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => handleLinkClick("Calendar")}
      >
        <IoCalendarOutline className={`fs-1 text-danger`} />
        <br />
        Calendar
      </Link>
      <br />

      {/* Labs Link */}
      <Link
        to="/Labs"
        id="wd-labs-link"
        className={`list-group-item text-center border-0 ${
          activeSection === "Labs" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => handleLinkClick("Labs")}
      >
        <FaFlask className={`fs-1 text-danger`} />
        <br />
        Labs
      </Link>
      <br />

      {/* Settings Link */}
      <Link
        to="/Kanbas/Settings"
        id="wd-settings-link"
        className={`list-group-item text-center border-0 ${
          activeSection === "Settings" ? "bg-white text-danger" : "bg-black text-white"
        }`}
        onClick={() => handleLinkClick("Settings")}
      >
        <LiaCogSolid className={`fs-1 text-danger`} />
        <br />
        Settings
      </Link>
    </div>
  );
}
