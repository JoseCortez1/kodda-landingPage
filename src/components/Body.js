import React, { Component } from 'react'
import { HuePicker  } from 'react-color';


export default class Body extends Component {

    
    constructor(props){
        super(props);
        this.state = {
           email:"",
           color: '#fff',
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
        }else{
            console.log("All ok")
        }
        console.log(this.state)
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
                <form  onSubmit={this.sendEmail}>
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
                        <label className="main__data_input__label" htmlFor="color">
                            Color
                        </label>
                        <div className="color">
                            <HuePicker  
                                color={ this.state.color }
                                onChangeComplete={ this.handleChangeComplete }/>
                            <div className="color_selected" style={{backgroundColor:this.state.color}}>

                            </div>
                        </div>
                    </div>

                    <div className="send">
                        <input type="submit" placeholder="Enviar" />
                    </div>
                </form>
            </main>
            
        )
    }
}
