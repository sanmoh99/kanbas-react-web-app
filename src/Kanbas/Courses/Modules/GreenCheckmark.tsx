import { FaCheckCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span className="position-relative">
      <FaCheckCircle style={{ top: "2px" }} className="text-success fs-5" />
    </span>
  );
}