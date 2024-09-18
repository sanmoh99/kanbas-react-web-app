export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
  
        <textarea id="wd-description" rows={6} cols={50}>
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. 
          The landing page should include the following: 
          - Your full name and section 
          - Links to each of the lab assignments 
          - Link to the Kanbas application 
          - Links to all relevant source code repositories 
          The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br /><br />
  
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-assignment-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="PROJECTS">PROJECTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade">Display Grade As</label>
            </td>
            <td>
              <select id="wd-display-grade">
                <option value="Percentage">Percentage</option>
                <option value="Points">Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="On Paper">On Paper</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label>
            </td>
            <td>
              <input type="checkbox" id="text-entry" /> <label htmlFor="text-entry">Text Entry</label><br />
              <input type="checkbox" id="website-url" /> <label htmlFor="website-url">Website URL</label><br />
              <input type="checkbox" id="media-recordings" /> <label htmlFor="media-recordings">Media Recordings</label><br />
              <input type="checkbox" id="file-uploads" /> <label htmlFor="file-uploads">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <select id="wd-assign-to">
                <option>Everyone</option>
                <option>Specific Group</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due">Due</label>
            </td>
            <td>
              <input id="wd-due" type="date" value="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" value="2024-05-06" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
              <input id="wd-available-until" type="date" value="2024-05-20" />
            </td>
          </tr>
        </table>
        
        <div style={{ marginTop: "20px" }}>
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </div>
    );
  }
  
