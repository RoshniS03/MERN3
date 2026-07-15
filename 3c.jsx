function App ()
{
  const maths = 85;
  const sci = 90;
 function calculate(mark1, mark2){return mark1 + mark2;}
  return (
    <div>
      <h1>Student Marks</h1>
       <p>Mathematicis Marks: {maths}</p>
       <p>Science Marks: {sci}</p>
      <h2>Total Marks: {calculate(maths,sci)}</h2>
      <p>Roshni T041</p>
    </div>
  );
}
export default App
