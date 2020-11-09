import React, { Component } from 'react'
import huella from '../img/huella.svg'

export default class Header extends Component {
    render() {
        return (
            
            <header className="header__header">
                <img className="header__img" src={huella} alt="huella"/>
                <h1 className="header__tittle">Kodda</h1>
            </header>
        )
    }
}
