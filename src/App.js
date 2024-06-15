import {useState,useRef, useEffect } from "react";
import Comp1 from './componentes/Comp1';

function App(props) {
  const cd = new Date () ;
  const colorStyle= {
    color: props.c,
    fontSize: props.t
} ;

const [cont,setCont] = useState(3) ;
const [info,setInfo] = useState([]) ;
const [sele, setElem] = useState({}) ;
const [bbcc, setBc] = useState("red") ;

let intCont = () => {
  setCont( cont+1 ) ;
}
let decCont = () => {
  setCont( cont-1 ) ;
}

async function getData() {
  try {
    const rta = await fetch( 'http://jsonplaceholder.typicode.com/posts/1/comments',) ;
    
    if( !rta.ok ) {
      throw new Error( "Er:" + rta.error ) ;
    }
    let datos = await rta.json() ;
    setInfo( datos ) ;
  } catch (error) {
    console.log( "ERROR:" + error ) ;
  }
  };

function getDatos() {
  getData() ;
}

const pId = useRef(1) ;
const pBc = useRef(1) ;

  let verId = () => {
    console.log( "===>"+ pId.current.value + "---" + info.length ) ;

    setBc( pBc.current.value ) ;

     for (const o of info) {
      if (o.id == pId.current.value) {
        setElem( o );
      }
    }
  } 
  let msgDelHijo = (msgHijo) => {
    console.log ("===>" + msgHijo)
  }

  return (
    <div style={colorStyle}>
      <h1>Hola Mundo {cont}</h1>
      <h3>Hora: {cd.toLocaleTimeString()} - {cont}</h3>

      <div>
        <Comp1 obj={sele} bc={bbcc}/>
      </div>

      <input ref={pId} type="text" placeholder="buscar x id" />
      <input ref={pBc} type="text" placeholder="Color..." onChange={verId} />

      <button onClick={() => setCont(cont + 1)}>inc</button>
      <button onMouseOver={() => setCont(cont - 1)}>Dec</button>
      <button onClick={getData}>Consultar</button>
      <button onClick={verId}>verId</button>

      <div>
        <ul>
          {info.map(
            (d, i) => (
              <li key={i}>
                <h3>{d.id}</h3>
                <p>{d.postId}</p>
                <p>{d.name}</p>
                <p>{d.email}</p>
                <p>{d.body}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )};

  export default App;