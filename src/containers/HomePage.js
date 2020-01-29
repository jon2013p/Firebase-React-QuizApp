import React from 'react';
import db from '../firebase/index'
import {Input, Button,Table} from 'antd';



class HomePage extends React.Component {

    state={
        iconLoading: false
    };

    guardar = () => {
        this.setState({iconLoading: true});
        //const pregunta = document.getElementById('NPregunta').value;
        const enunciado = document.getElementById('Enunciado').value;
        const opcion1 = document.getElementById('Opcion1').value;
        const opcion2 = document.getElementById('Opcion2').value;
        const opcion3 = document.getElementById('Opcion3').value;
        const opcion4 = document.getElementById('Opcion4').value;
        const respuesta = document.getElementById('Respuesta').value;
        db.collection("preguntas").add({
            enunciado: enunciado,
            opcion_1: opcion1,
            opcion_2: opcion2,
            opcion_3: opcion3,
            opcion_4: opcion4,
            respuesta: respuesta
        })
            .then((docRef)=>{
                console.log("Documento añadido con ID: ",docRef.id);
                document.getElementById('Enunciado').value= '';
                document.getElementById('Opcion1').value= '';
                document.getElementById('Opcion2').value= '';
                document.getElementById('Opcion3').value= '';
                document.getElementById('Opcion4').value= '';
                document.getElementById('Respuesta').value= '';

                this.setState({iconLoading: false});
            })
            .catch( (error)=> {
                console.error("Error al añadir documento: ",error);
                this.setState({iconLoading: false});

            })
    };

    //Leer documentos


    // db.collection("users").get().then((querySnapshot) => {
    // querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    // });
    // });


    // dataSource = [
    //     {
    //         key: '1',
    //         name: 'Mike',
    //         age: 32,
    //         address: '10 Downing Street',
    //     }
    // ];

    columns = [
        {
            title: 'Enunciado',
            dataIndex: 'enunciado',
            key: 'enunciado',
        },
        {
            title: 'Opción 1',
            dataIndex: 'opcion1',
            key: 'opcion1',
        },
        {
            title: 'Opción 2',
            dataIndex: 'opcion2',
            key: 'opcion2',
        },
        {
            title: 'Opción 3',
            dataIndex: 'opcion3',
            key: 'opcion3',
        },
        {
            title: 'Opción 4',
            dataIndex: 'opcion4',
            key: 'opcion4',
        },
        {
            title: 'Respuesta',
            dataIndex: 'respuesta',
            key: 'respuesta',
        },
    ];

    render() {
        return (
            <div className="container">
                <h1>Ingreso de Preguntas</h1>
                {/*<Input type="text" id="NPregunta" placeholder="Numero" class="ant-form " />*/}
                <Input type="text" id="Enunciado" placeholder="Enunciado" />
                <Input type="text" id="Opcion1" placeholder="Opción"/>
                <Input type="text" id="Opcion2" placeholder="Opción"/>
                <Input type="text" id="Opcion3" placeholder="Opción"/>
                <Input type="text" id="Opcion4" placeholder="Opción"/>
                <Input type="text" id="Respuesta" placeholder="Respuesta" />
                <Button
                    type="primary"
                    icon="poweroff"
                    loading={this.state.iconLoading}
                    onClick={this.guardar}
                >
                    Guardar!
                </Button>

                <Table dataSource={this.dataSource} columns={this.columns}/>

            </div>
        )
    }
}




export default HomePage;