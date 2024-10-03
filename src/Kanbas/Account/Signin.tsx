import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div className="container" id="wd-signin-screen">
      <h1>Sign in</h1>
      
      {/* Username Field */}
      <Form.Group className="mb-3">
        <Form.Control
          id="wd-username"
          placeholder="username"
          className="form-control mb-2"
        />
      </Form.Group>

      {/* Password Field */}
      <Form.Group className="mb-3">
        <Form.Control
          id="wd-password"
          placeholder="password"
          type="password"
          className="form-control mb-2"
        />
      </Form.Group>

      {/* Sign In Button */}
      <Link id="wd-signin-btn" to="/Kanbas/Account/Profile">
        <Button className="btn btn-primary w-100">Sign in</Button>
      </Link>

      {/* Sign Up Link */}
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="d-block mt-2">
        Sign up
      </Link>
    </div>
  );
}
