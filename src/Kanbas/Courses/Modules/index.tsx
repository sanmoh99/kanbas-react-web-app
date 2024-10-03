// src/Kanbas/Courses/Modules/index.tsx
import { FaGripVertical } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import ModulesControls from "./ModulesControls";
export default function Modules() {
  return (
    <div className="main-content">
      {/* Module Controls (top buttons) */}
      <ModulesControls />

      {/* Module List */}
      <ul className="list-group">
        {/* Lecture 1 */}
        <li className="list-group-item border border-gray mb-4">
          <div className="d-flex justify-content-between align-items-center bg-light p-2">
            <div className="d-flex align-items-center">
              <FaGripVertical className="me-2" />
              <h5 className="mb-0">Lecture 1</h5>
            </div>
            <GreenCheckmark />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              BeforeSlides-Lec1.pdf
              <GreenCheckmark />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              After135Slides-Lec1.pdf
              <GreenCheckmark />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              After315Slides-Lec1.pdf
              <GreenCheckmark />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              950-lec01.pdf
              <GreenCheckmark />
            </li>
          </ul>
        </li>

        {/* Lecture 2 */}
        <li className="list-group-item border border-gray mb-4">
          <div className="d-flex justify-content-between align-items-center bg-light p-2">
            <div className="d-flex align-items-center">
              <FaGripVertical className="me-2" />
              <h5 className="mb-0">Lecture 2</h5>
            </div>
            <GreenCheckmark />
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              BeforeSlides-Lec2.pdf
              <GreenCheckmark />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              After135Slides-Lec2.pdf
              <GreenCheckmark />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              After315Slides-Lec2.pdf
              <GreenCheckmark />
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              lec02.pdf
              <GreenCheckmark />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
