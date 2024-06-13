import {useState,useRef, useEffect } from "react";


function App(props) {

const [cont,setCont] = useState(3) ;
const [info,setInfo] = useState([]) ;

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

async function getData() {
  try {
    const rta = await fetch( 'http://jsonplaceholder.typicode.com/posts/1/comments', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    } ) ;

    if( !rta.ok ) {
      throw new Error( "Er:" + rta.error ) ;
    }
    
    let datos = await rta.json() ;
    
    setInfo( datos ) ;

  } catch (error) {
    console.log( "ERROR:" + error ) ;
  }
} ;
  function getDatos() {
    getData() ;
  }

  useEffect( () =>{getDatos();}, [cont] ) ;

  const pId = useRef(1) ;

  function verInfo() {
    console.log( "--->" + pId.current.value ) ;
    pId.current.value = 112233 ;
  }

  return (
    <div style={estilo}>
    <h1>Hola Mundo {cont}</h1>
    <h3>Hora: {cd.toLocaleTimeString()}</h3>

    <input ref={pId} type="text" placeholder="buscar x id"/>

    <button onClick={intCont}>inc</button>
    <button onMouseOver={decCont}>Dec</button>
    <button onClick={getDatos}>Consultar</button>
    <button onClick={verInfo}>Buscar</button>
    <div>
        <ul>
          {info.map(
            (d,i) => (
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
  
    );
}

export default App;
