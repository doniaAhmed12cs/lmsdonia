import React, { useState, useEffect } from 'react';

const ReadInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <div>
      <h2>Instructors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map(instructor => (
            <tr key={instructor.id}>
              <td>{instructor.name}</td>
              <td>{instructor.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadInstructor;
