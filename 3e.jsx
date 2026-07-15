Student.jsx 
function Student() {
  return (
    <div>
      <h2>Student Components</h2>    
      <p>Name : Roshni</p>
      <p>Course : MCA</p>
      <p>Semester : III</p>
    </div>
  );
}
export default Student;



App.jsx
import Student from "./components/Student";
function App() {
  return (
    <div>
      <h1>This is fuctional component practical</h1>
      <hr />
      <Student />
    </div>
  );
}
export default App;
