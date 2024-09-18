import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="images/CS7200.png" height={150} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/CS7200/Home"
            >
              {" "}
              CS7200 Statistical methods for machine learning{" "}
            </Link>
            <p className="wd-dashboard-course-title">
            Statistical methods for machine learning{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="images/CS3000.jpg" height={150} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS3000 Algorithm Design{" "}
            </Link>
            <p className="wd-dashboard-course-title">
              Algorithm Design{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/CSG280.jpg" height={150} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS G280 Parallel computing{" "}
            </Link>
            <p className="wd-dashboard-course-title">
            Parallel computing{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/CS1800.jpg" height={150} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS1800 Discrete Structures{" "}
            </Link>
            <p className="wd-dashboard-course-title">
              Discrete Structures{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>{" "}
        <div className="wd-dashboard-course">
          <img src="/images/CS2500.png" height={150} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS 2500 Fundementals of computer science{" "}
            </Link>
            <p className="wd-dashboard-course-title">
            Fundementals of computer science{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        
        <div className="wd-dashboard-course">
          <img src="/images/CS2800.jpg" height={150} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS 2800 Logic and computation{" "}
            </Link>
            <p className="wd-dashboard-course-title">
            Logic and computation{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/CS3520.jpg" height={150} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              {" "}
              CS 3520 CPP programming{" "}
            </Link>
            <p className="wd-dashboard-course-title">
            CPP programming{" "}
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
