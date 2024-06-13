import {useState,useRef } from "react";


function App(props) {

const [cont,setCont] = useState(3) ;

let intCont = () => {
  setCont( cont+1 ) ;
}
let decCont = () => {
  setCont( cont-1 ) ;
}

const cd = new Date() ;
const estilo = {
  color: props.c,
  fontSize: props.t
} ;
  
  return (
    <div style={estilo}>
    <h1>Hola Mundo {cont}</h1>
    <h3>Hora: {cd.toLocaleTimeString()}</h3>
    <button onClick={intCont}>inc</button>
    <button onClick={decCont}>Dec</button>
  </div>
    );
}

export default App;
