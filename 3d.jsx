App.jsx 
import "./App.css";
function App ()
{
  return (
    <div className = "container">
      <h1>Student Dashboard</h1>
       <p>Name: Roshni Shahu</p>
       <p>Roll Number: 41</p>
       <p>Course : IT</p>
       <p>Semester : V</p>
       <button>View Result</button>
    </div>
  );
}
export default App

App.css
.container{
  width:700px;
  margin:50px auto;
  padding:20px;
  border:2px solid black;
  border-radius:10px;
  background-color:whitesmoke;
  text-align:center;
}
h1{
  color:darkblue;
}
p{
font-size: 18px;
color: black;
}
button{
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor:pointer;


}
button:hover{
 
  background-color: darkgreen;
}
