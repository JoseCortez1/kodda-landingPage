import React, { Component } from 'react'
import axios from 'axios'


export default class Body extends Component {

    
    constructor(props){
        super(props);
        this.state = {
           email:"",
           color: 'DN',
           number: '',
           name: "",
           size: "sm"
       };
       this.sendEmail = this.sendEmail.bind(this)
       this.handleChange = this.handleChange.bind(this)
    }
    sendEmail(e){
        e.preventDefault();
        //console.log(this.state.email, this.state.color, this.state.name, this.state.size)
        if((this.state.email === "") || (this.state.color === "") || (this.state.name === "") ||  (this.state.size === "" ) ){
            console.log("some is empty")
            alert("Necesitas llenar todos los campos")
        }else{
            console.log("All ok")
            axios.post('https://server-kodda.herokuapp.com/api/', {
                'email':this.state.email,
                'color':this.state.color,
                'name':this.state.name,
                'number':this.state.number,
                'size':this.state.size,
            })
            
        }
        alert("En unos momentos recibiras un correo de confirmacón")
        this.setState({color:"DN",size:"sm",number:"",name:"", email:""})
    }
    handleChangeComplete = (color) => {
        this.setState({color: color.hex});
    };
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render() {

        return (
            
            <main className="main">
                <form id="form"  onSubmit={this.sendEmail}>
                    <div className="main__email">
                        <input className="main__email__input" name="email" type="email" placeholder="ejemplo@correo.com" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="main__data_inputs">
                        <label className="main__data_input__label" htmlFor="size">
                            Tamaño
                        </label>
                        <select name="size"  className="input__" id="size" value={this.state.size} onChange={this.handleChange}>
                            <option value="sm" >Chico</option>
                            <option value="md">Mediano</option>
                            <option value="gd">Grande</option>
                        </select>
                    </div>

                    <div className="main__data_inputs">
                        <label className="main__data_input__label" htmlFor="name">
                            Nombre
                        </label>
                        <input  className="input__" name="name" type="text" placeholder="Nombre de mi perro" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="main__data_inputs">
                        <label className="main__data_input__label" htmlFor="number">
                            Numero (opcional)
                        </label>
                        <input  className="input__" name="number" type="text" placeholder="Mi numero de telefono" value={this.state.number} onChange={this.handleChange}/>
                    </div>

                  <div className="main__data_inputs">
                        <label className="main__data_input__label" htmlFor="color">
                            Colores
                            <p> {"<Nombre> - <Fondo>"}</p>
                        </label>
                        <select name="color"  className="input__" id="color" value={this.state.color} onChange={this.handleChange}>
                            <option value="DN">Dorado - Negro</option>
                            <option value="VN">Verde - Negro</option>
                            <option value="RN">Rojo - Negro</option>
                            <option value="AN">Azul - Negro</option>
                            <option value="ACN">Azul Cielo - Negro</option>
                            <option value="AA">Amarillo - Azul</option>
                            <option value="AD">Amarillo - Dorado</option>
                            <option value="NB">Naranja - Blanco</option>
                            <option value="RA">Rojo - Azul</option>
                            <option value="VR">Verde - Rojo</option>
                            <option value="AR">Amarillo - Rosa</option>
                            <option value="TR">Turquesa - Rosa</option>
                            <option value="DR">Dorado - Rosa</option>
                            <option value="RB">Rojo - Blanco</option>
                            <option value="RN">Rojo - Dorado</option>

                        </select>
                    </div>

                    <div className="send">
                        <input type="submit" placeholder="Enviar" />
                    </div>
                </form>
            </main>
            
        )
    }
}
