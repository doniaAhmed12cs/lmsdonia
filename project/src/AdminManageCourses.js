import React, { useState, useEffect } from "react";
import { getCourses, addCourse, updateCourse, deleteCourse } from "./api"; // Import API functions

function AdminManageCourses() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState(
    {
   name: "",
   description: "" 
    }
   );
  const [editCourse, setEditCourse] = useState(null);

  useEffect(() => {
    // Fetch courses from backend API
    getCourses().then((response) => setCourses(response));
  }, []);

  const handleAddCourse = () => {
    // Send request to backend API to add new course
    addCourse(newCourse).then((response) => {
      setCourses([...courses, response]);
      setNewCourse({ name: "", description: "" });
    });
  };

  const handleEditCourse = () => {
    // Send request to backend API to update edited course
    updateCourse(editCourse.id, editCourse).then((response) => {
      const updatedCourses = courses.map((course) =>
        course.id === response.id ? response : course
      );
      setCourses(updatedCourses);
      setEditCourse(null);
    });
  };

  const handleDeleteCourse = (courseId) => {
    // Send request to backend API to delete course
    deleteCourse(courseId).then(() => {
      const updatedCourses = courses.filter((course) => course.id !== courseId);
      setCourses(updatedCourses);
    });
  };

  return (
    <div>
      <h2>Manage Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) =>
            editCourse && editCourse.id === course.id ? (
              <tr key={course.id}>
                <td>
                  <input
                    type="text"
                    value={editCourse.name}
                    onChange={(e) =>
                      setEditCourse({ ...editCourse, name: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editCourse.description}
                    onChange={(e) =>
                      setEditCourse({
                        ...editCourse,
                        description: e.target.value,
                      })
                    }
                  />
                </td>
                <td>
                  <button onClick={handleEditCourse}>Save</button>
                  <button onClick={() => setEditCourse(null)}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>
                  <button onClick={() => setEditCourse(course)}>Edit</button>
                  <button onClick={() => handleDeleteCourse(course.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
          <tr>
            <td>
              <input
                type="text"
                value={newCourse.name}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, name: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={newCourse.description}
                onChange={(e) =>
                  setNewCourse({ ...newCourse, description: e.target.value })
                }
              />
            </td>
            <td>
              <button onClick={handleAddCourse}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminManageCourses;