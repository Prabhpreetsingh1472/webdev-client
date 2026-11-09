"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  emptyAssignment,
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const isNew = aid === "new";
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((a) => a._id === aid && a.course === cid),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);

  // Local draft: edits only reach the store when Save is clicked.
  const [assignment, setAssignment] = useState<Assignment | undefined>(
    isNew ? { ...emptyAssignment, _id: "new", course: cid } : existing,
  );

  const backToList = () => router.push(`/courses/${cid}/assignments`);
  const save = () => {
    if (!assignment) return;
    if (isNew) addAssignment(assignment);
    else updateAssignment(assignment);
    backToList();
  };

  if (!assignment) {
    return <p id="wd-assignments-editor">Assignment not found in this course.</p>;
  }

  return (
    <div id="wd-assignments-editor" className="max-w-xl">
      <label htmlFor="wd-name" className="block font-medium">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className="w-full rounded border  p-2"
      />
      <p id="wd-assignment-id" className="text-sm text-neutral-600">
        Assignment id: {aid}
      </p>

      <label htmlFor="wd-description" className="block font-medium">
        Description
      </label>
      <textarea
        id="wd-description"
        rows={4}
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        className="w-full rounded border  p-2"
      />

      <label htmlFor="wd-points" className="block font-medium">
        Points
      </label>
      <input
        id="wd-points"
        type="number"
        value={assignment.points}
        onChange={(e) =>
          setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })
        }
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
        value={assignment.due}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
        className="w-full rounded border  p-2"
      />

      <label htmlFor="wd-available-from" className="block font-medium">
        Available from
      </label>
      <input
        type="date"
        id="wd-available-from"
        value={assignment.available}
        onChange={(e) =>
          setAssignment({ ...assignment, available: e.target.value })
        }
        className="w-full rounded border  p-2"
      />

      <label htmlFor="wd-available-until" className="block font-medium">
        Until
      </label>
      <input
        type="date"
        id="wd-available-until"
        value={assignment.until ?? assignment.due}
        onChange={(e) => setAssignment({ ...assignment, until: e.target.value })}
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
        <button
          type="button"
          onClick={backToList}
          id="wd-cancel"
          className="rounded border  px-4 py-2 text-black"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
