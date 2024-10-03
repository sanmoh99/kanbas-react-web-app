import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="main-content">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />

      {/* Responsive Grid for Courses */}
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-4 g-3">
        {/* Card 1 */}
        <div className="col">
          <div className="card h-100" style={{ width: "200px" }}>
            <img
              src="images/CS7200.png"
              className="card-img-top"
              alt="CS7200"
              style={{ height: "120px", objectFit: "cover" }} // Adjust image height
            />
            <div className="card-body" style={{ padding: "10px" }}> {/* Reduce padding */}
              <h6 className="card-title">CS7200 Statistical methods for machine learning</h6>
              <p className="card-text" style={{ fontSize: "12px" }}> {/* Smaller text */}
                Learn the statistical methods for machine learning.
              </p>
              <Link to="/Kanbas/Courses/CS7200/Home" className="btn btn-primary btn-sm">
                Go to Course
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div className="card h-100" style={{ width: "200px" }}>
            <img
              src="images/CS3000.jpg"
              className="card-img-top"
              alt="CS3000"
              style={{ height: "120px", objectFit: "cover" }} // Adjust image height
            />
            <div className="card-body" style={{ padding: "10px" }}> {/* Reduce padding */}
              <h6 className="card-title">CS3000 Algorithm Design</h6>
              <p className="card-text" style={{ fontSize: "12px" }}>
                Master the fundamental principles of algorithm design.
              </p>
              <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary btn-sm">
                Go to Course
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div className="card h-100" style={{ width: "200px" }}>
            <img
              src="images/CSG280.jpg"
              className="card-img-top"
              alt="CSG280"
              style={{ height: "120px", objectFit: "cover" }} // Adjust image height
            />
            <div className="card-body" style={{ padding: "10px" }}> {/* Reduce padding */}
              <h6 className="card-title">CS G280 Parallel computing</h6>
              <p className="card-text" style={{ fontSize: "12px" }}>
                Explore the world of parallel computing.
              </p>
              <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary btn-sm">
                Go to Course
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col">
          <div className="card h-100" style={{ width: "200px" }}>
            <img
              src="images/CS1800.jpg"
              className="card-img-top"
              alt="CS1800"
              style={{ height: "120px", objectFit: "cover" }} // Adjust image height
            />
            <div className="card-body" style={{ padding: "10px" }}> {/* Reduce padding */}
              <h6 className="card-title">CS1800 Discrete Structures</h6>
              <p className="card-text" style={{ fontSize: "12px" }}>
                Delve into the foundations of discrete structures.
              </p>
              <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary btn-sm">
                Go to Course
              </Link>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col">
          <div className="card h-100" style={{ width: "200px" }}>
            <img
              src="images/CS2500.png"
              className="card-img-top"
              alt="CS2500"
              style={{ height: "120px", objectFit: "cover" }} // Adjust image height
            />
            <div className="card-body" style={{ padding: "10px" }}> {/* Reduce padding */}
              <h6 className="card-title">CS 2500 Fundamentals of computer science</h6>
              <p className="card-text" style={{ fontSize: "12px" }}>
                Understand the fundamentals of computer science.
              </p>
              <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary btn-sm">
                Go to Course
              </Link>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col">
          <div className="card h-100" style={{ width: "200px" }}>
            <img
              src="images/CS2800.jpg"
              className="card-img-top"
              alt="CS2800"
              style={{ height: "120px", objectFit: "cover" }} // Adjust image height
            />
            <div className="card-body" style={{ padding: "10px" }}> {/* Reduce padding */}
              <h6 className="card-title">CS 2800 Logic and computation</h6>
              <p className="card-text" style={{ fontSize: "12px" }}>
                Dive deep into logic and computation.
              </p>
              <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary btn-sm">
                Go to Course
              </Link>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="col">
          <div className="card h-100" style={{ width: "200px" }}>
            <img
              src="images/CS3520.jpg"
              className="card-img-top"
              alt="CS3520"
              style={{ height: "120px", objectFit: "cover" }} // Adjust image height
            />
            <div className="card-body" style={{ padding: "10px" }}> {/* Reduce padding */}
              <h6 className="card-title">CS 3520 C++ programming</h6>
              <p className="card-text" style={{ fontSize: "12px" }}>
                Learn advanced C++ programming concepts.
              </p>
              <Link to="/Kanbas/Courses/1234/Home" className="btn btn-primary btn-sm">
                Go to Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
