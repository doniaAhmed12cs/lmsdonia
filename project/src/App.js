import {AssignInstructorToCourses} from "AssignInstructorToCourses"
import AdminLogin from "./login";
import AdminManageCourses from "./AdminManageCourses";
import ReadInstructor from "./AdminManagesInsstractors";
function App() {
  return (
    <div className="App">
      <AssignInstructorToCourses/>
  <AdminLogin/>
  <AdminManageCourses/>
  <ReadInstructor/>
    </div>
  );          
}

export default App;
