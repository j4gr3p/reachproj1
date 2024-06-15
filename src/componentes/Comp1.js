import React, { useState, useEffect } from 'react';

function Comp1(props) {
    const estilo = {
        backgroundColor: props.bc
    }

    let msgXPapa = () => {
        props.fPapa = "Hola padre"
    }
    return(
        <div>
            <h1>Hola componente</h1>
            <div>
               <table border="1" cellPadding="10" cellSpacing="2">
                <thead style={estilo}>
                    <th>id</th>
                    <th>postId</th>
                    <th>name</th>
                    <th>email</th>
                    <th>body</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.obj.id}</td>
                        <td>{props.obj.postId}</td>
                        <td>{props.obj.name}</td>
                        <td>{props.obj.email}</td>
                        <td>{props.obj.body}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <button onClick={msgXPapa}>Enviar mensaje</button>
                    </tr>
                </tfoot>
               </table>
            <div>
                <p>Elemento seleccionado</p>
                <h3>{props.obj.id}</h3>
                <p>{props.obj.postId}</p>
                <p>{props.obj.name}</p>
                <p>{props.obj.email}</p>
                <p>{props.obj.body}</p>
            </div>
            </div>
        </div>
    )
}

export default Comp1 ;