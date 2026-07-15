function App ()
{
  const currentDate = new Date();
  return (
    <div>
      <h1>Currrent Date and Time</h1>
       <p>Date: {currentDate.toLocaleDateString()}</p>
       <p>Time: {currentDate.toLocaleTimeString}</p>
      <p>Roshni T041</p>
    </div>
  );
}
export default App
