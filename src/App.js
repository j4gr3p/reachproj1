
function App(props) {
const cd = new Date() ;
const colorStyle = {
  color: props.color,
  fontSize: props.size
} ;
  
  return (
    <div>
    <h1>Hola Mundo</h1>
    <h3>Hora: {cd.toLocaleTimeString()}</h3>
  </div>
    );
}

export default App;
