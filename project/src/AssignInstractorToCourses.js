import React, { useState, useEffect } from "react";
 // Import API functions

function AssignInstructorToCourses() {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  useEffect(() => {


  }, []);

  useEffect(() => {
    if (selectedCourse) {
    
    }
  }, [selectedCourse]);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleInstructorSelect = (instructor) => {
    setSelectedInstructor(instructor);
  };

  const handleAssignInstructor = () => {
    if (selectedCourse && selectedInstructor) {
    }
  };

  return (
    <div>
      <p>Assign Instructor to Course</p>
      <select onChange={(e) => handleCourseSelect(e.target.value)}>
        <option>Select Course</option>
        {courses.map((course) => (
          <option key={course.id} value={course}>
            {course.name}
          </option>
        ))}
      </select>
      <select onChange={(e) => handleInstructorSelect(e.target.value)}>
        <option>Select Instructor</option>
        {instructors.map((instructor) => (
          <option key={instructor.id} value={instructor}>
            {instructor.name}
          </option>
        ))}
      </select>
      <button onClick={handleAssignInstructor}>Assign</button>
    </div>
  );
}

export default AssignInstructorToCourses