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
                            Colores ( Codigo )
                        </label>
                        <select name="color"  className="input__" id="color" value={this.state.color} onChange={this.handleChange}>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
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
