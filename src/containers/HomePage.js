import React from 'react';
import db from '../firebase/index'
import {Input, Button} from 'antd';


function guardar() {
    //const pregunta = document.getElementById('NPregunta').value;
    const enunciado = document.getElementById('Enunciado').value;
    const opcion1 = document.getElementById('Opcion1').value;
    const opcion2 = document.getElementById('Opcion2').value;
    const opcion3 = document.getElementById('Opcion3').value;
    const opcion4 = document.getElementById('Opcion4').value;
    const respuesta = document.getElementById('Respuesta').value;
    db.collection("preguntas").add({
        enunciado: enunciado,
        opcion1: opcion1,
        opcion2: opcion2,
        opcion3: opcion3,
        opcion4: opcion4,
        respuesta: respuesta
    })
        .then(function(docRef){
            console.log("Documento añadido con ID: ",docRef.id);
        })
        .catch(function (error) {
            console.error("Error al añadir documento: ",error);

        })
}

const HomePage = props => <div className="container">
    <h1>Ingreso de Preguntas</h1>
    {/*<Input type="text" id="NPregunta" placeholder="Numero" class="ant-form " />*/}
    <Input type="text" id="Enunciado" placeholder="Enunciado" className="ant-form"/>
    <Input type="text" id="Opcion1" placeholder="Opción" className="ant-form"/>
    <Input type="text" id="Opcion2" placeholder="Opción" className="ant-form"/>
    <Input type="text" id="Opcion3" placeholder="Opción" className="ant-form"/>
    <Input type="text" id="Opcion4" placeholder="Opción" className="ant-form"/>
    <Input type="text" id="Respuesta" placeholder="Respuesta" className="ant-form"/>
    <Button className="ant-btn" id="botoning" onClick={guardar}>Guardar</Button>

</div>;




export default HomePage;