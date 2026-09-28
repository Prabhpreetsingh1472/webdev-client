"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile Form</h4>

      <h5>Text Fields</h5>
      <label htmlFor="wd-your-full-name">Full name: </label>
      <input
        type="text"
        placeholder="Jane Doe"
        id="wd-your-full-name"
        title="Sample name - replace with your own"
      />
      <br />
      <label htmlFor="wd-your-username">Username: </label>
      <input type="text" placeholder="jdoe" id="wd-your-username" />
      <br />
      <label htmlFor="wd-your-password">Password: </label>
      <input type="password" defaultValue="sample123" id="wd-your-password" />

      <h5>Text Box</h5>
      <label htmlFor="wd-your-bio">Short bio: </label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={30}
        rows={6}
        defaultValue="SAMPLE BIO - Jane Doe is a sample student. Replace this text with a few sentences about yourself, your major, and what you hope to build this semester."
      />

      <h5>Radio Buttons</h5>
      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-senior"
        defaultChecked
      />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <label>Enrollment status:</label>
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>

      <h5>Checkboxes</h5>
      <label>Topics you want to learn:</label>
      <br />
      <input
        type="checkbox"
        name="your-topics"
        id="wd-your-chkbox-html"
        defaultChecked
      />
      <label htmlFor="wd-your-chkbox-html">HTML</label>
      <br />
      <input type="checkbox" name="your-topics" id="wd-your-chkbox-css" />
      <label htmlFor="wd-your-chkbox-css">CSS</label>
      <br />
      <input type="checkbox" name="your-topics" id="wd-your-chkbox-react" />
      <label htmlFor="wd-your-chkbox-react">React</label>
      <br />
      <input type="checkbox" name="your-topics" id="wd-your-chkbox-databases" />
      <label htmlFor="wd-your-chkbox-databases">Databases</label>

      <h5>Dropdowns</h5>
      <label htmlFor="wd-your-select-major">Major: </label>
      <br />
      <select id="wd-your-select-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
        <option value="CE">Computer Engineering</option>
        <option value="OTHER">Other</option>
      </select>
      <br />
      <label htmlFor="wd-your-select-languages">
        Programming languages you know:{" "}
      </label>
      <br />
      <select
        multiple
        id="wd-your-select-languages"
        defaultValue={["JAVA", "PYTHON"]}
      >
        <option value="JAVA">Java</option>
        <option value="PYTHON">Python</option>
        <option value="JS">JavaScript</option>
        <option value="CPP">C++</option>
        <option value="SQL">SQL</option>
      </select>

      <h5>Other Field Types</h5>
      <label htmlFor="wd-your-email">Email: </label>
      <input
        type="email"
        placeholder="jane@university.edu"
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Graduation year: </label>
      <input
        type="number"
        defaultValue="2027"
        min={2024}
        max={2035}
        id="wd-your-grad-year"
      />
      <br />
      <label htmlFor="wd-your-start-date">Start date: </label>
      <input
        type="date"
        defaultValue="2024-09-04"
        min="2000-01-01"
        max="2035-12-31"
        id="wd-your-start-date"
      />
      <br />
      <label htmlFor="wd-your-experience">
        Web development experience (0-10):{" "}
      </label>
      <input
        type="range"
        defaultValue="5"
        min="0"
        max="10"
        id="wd-your-experience"
      />

      <h5>Buttons</h5>
      <button id="wd-your-button-save" type="submit">
        Save
      </button>
      <button id="wd-your-button-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
