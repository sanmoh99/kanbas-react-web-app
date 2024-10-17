import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation({ links }: { links: string[] }) {
  const { cid } = useParams(); // Get course ID to construct URLs
  const { pathname } = useLocation(); // Get the current path to highlight the active link

  return (
    <ul className="nav flex-column nav-pills">
      {links.map((link) => (
        <li key={link} className="nav-item">
          <Link
            to={`/Kanbas/Courses/${cid}/${link}`}
            className={`nav-link ${pathname.includes(link) ? "active-link" : "inactive-link"}`}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
}
