// src/Kanbas/Courses/Modules/ModulesControls.tsx
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <button className="btn btn-outline-secondary me-2">Collapse All</button>
        <button className="btn btn-outline-secondary me-2">View Progress</button>
        <div className="btn-group me-2">
          <button type="button" className="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <GreenCheckmark /> Publish All
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Publish all modules and items</a></li>
            <li><a className="dropdown-item" href="#">Publish modules only</a></li>
          </ul>
        </div>
      </div>
      <button className="btn btn-danger"><FaPlus /> Module</button>
    </div>
  );
}
