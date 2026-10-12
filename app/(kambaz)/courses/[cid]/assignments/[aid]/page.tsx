import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-xl">
      <label htmlFor="wd-name" className="block font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        className="w-full rounded border  p-2"
      />

      <label htmlFor="wd-description" className="block font-medium">
        Description
      </label>
      <textarea
        id="wd-description"
        rows={4}
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
        className="w-full rounded border  p-2"
      />

      <label htmlFor="wd-points" className="block font-medium">
        Points
      </label>
      <input
        id="wd-points"
        defaultValue={100}
        className="w-full rounded border  p-2"
      />

      <label htmlFor="wd-group" className="block font-medium">
        Assignment Group
      </label>
      <select
        id="wd-group"
        defaultValue="ASSIGNMENTS"
        className="w-full rounded border p-2"
      >
        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        <option value="QUIZZES">QUIZZES</option>
        <option value="EXAMS">EXAMS</option>
        <option value="PROJECT">PROJECT</option>
      </select>

      <label htmlFor="wd-display-grade-as" className="block font-medium">
        Display Grade as
      </label>
      <select
        id="wd-display-grade-as"
        defaultValue="Percentage"
        className="w-full rounded border p-2"
      >
        <option value="Percentage">Percentage</option>
        <option value="Points">Points</option>
        <option value="Complete/Incomplete">Complete/Incomplete</option>
      </select>

      <label htmlFor="wd-submission-type" className="block font-medium">
        Submission Type
      </label>
      <select
        id="wd-submission-type"
        defaultValue="Online"
        className="mb-2 w-full rounded border  p-2"
      >
        <option value="Online">Online</option>
        <option value="On Paper">On Paper</option>
        <option value="No Submission">No Submission</option>
      </select>
      <fieldset className="mb-4">
        <legend className="font-medium">Online Entry Options</legend>
        <input type="checkbox" id="wd-text-entry" />
        <label htmlFor="wd-text-entry"> Text Entry</label>
        <br />
        <input type="checkbox" id="wd-website-url" />
        <label htmlFor="wd-website-url"> Website URL</label>
        <br />
        <input type="checkbox" id="wd-media-recordings" />
        <label htmlFor="wd-media-recordings"> Media Recordings</label>
        <br />
        <input type="checkbox" id="wd-student-annotation" />
        <label htmlFor="wd-student-annotation"> Student Annotation</label>
        <br />
        <input type="checkbox" id="wd-file-upload" />
        <label htmlFor="wd-file-upload"> File Uploads</label>
      </fieldset>

      <label htmlFor="wd-assign-to" className="block font-medium">
        Assign to
      </label>
      <input
        id="wd-assign-to"
        defaultValue="Everyone"
        className="w-full rounded border  p-2"
      />

      <label htmlFor="wd-due-date" className="block font-medium">
        Due
      </label>
      <input
        type="date"
        id="wd-due-date"
        defaultValue="2024-05-13"
        className="w-full rounded border  p-2"
      />

      <label htmlFor="wd-available-from" className="block font-medium">
        Available from
      </label>
      <input
        type="date"
        id="wd-available-from"
        defaultValue="2024-05-06"
        className="w-full rounded border  p-2"
      />

      <label htmlFor="wd-available-until" className="block font-medium">
        Until
      </label>
      <input
        type="date"
        id="wd-available-until"
        defaultValue="2024-05-13"
        className="w-full rounded border  p-2"
      />

      <label htmlFor="wd-ai-editor-notes" className="block font-medium">
        Sample notes
      </label>
      <textarea
        id="wd-ai-editor-notes"
        rows={4}
        className="w-full rounded border p-2"
      />

      <hr />
      <div className="mt-4 flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border  px-4 py-2 text-black no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
