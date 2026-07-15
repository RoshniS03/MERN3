function App ()
{
  const studentName = "Varun";
  const totalClasses = 60;
  const attendedClasses = 50;


  const attendance = (attendedClasses / totalClasses) *100;
  return (
    <div>
      <h1>Attendance Dashboard</h1>
      <p>Name: {studentName}</p>
      <p>Total Classes: {totalClasses}</p>
      <p>Classes Attended: {attendedClasses}</p>
      <p>Attendance: {attendance.toFixed(2)}%</p>
      <h3> Status : {attendance >=75?"Eligible for exam":
        "Not eligible"}</h3>
      <p>Roshni T041</p>
  </div>
  );
}
export default App
