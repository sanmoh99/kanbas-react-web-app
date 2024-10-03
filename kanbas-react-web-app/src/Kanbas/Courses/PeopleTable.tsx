import { FaUserCircle } from "react-icons/fa";

const PeopleTable = () => {
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">0012345615</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01T00:00:00.000Z</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>
              <span className="wd-last-name">Wayne</span>
            </td>
            <td className="wd-login-id">0012345625</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-11-02T00:00:00.000Z</td>
            <td className="wd-total-activity">15:32:43</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Steve</span>
              <span className="wd-last-name">Rogers</span>
            </td>
            <td className="wd-login-id">0012345635</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-02T00:00:00.000Z</td>
            <td className="wd-total-activity">23:32:43</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Natasha</span>
              <span className="wd-last-name">Romanoff</span>
            </td>
            <td className="wd-login-id">0012345645</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-11-05T00:00:00.000Z</td>
            <td className="wd-total-activity">13:23:34</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Thor</span>
              <span className="wd-last-name">Odinson</span>
            </td>
            <td className="wd-login-id">0012345655</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-12-01T00:00:00.000Z</td>
            <td className="wd-total-activity">11:22:33</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span>
              <span className="wd-last-name">Banner</span>
            </td>
            <td className="wd-login-id">0012345665</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-12-01T00:00:00.000Z</td>
            <td className="wd-total-activity">22:33:44</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PeopleTable;

// This line is required to avoid TS1208 error
export {};
