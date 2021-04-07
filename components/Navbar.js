import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends Component {
    static contextType=ThemeContext
    render() {
        const {isLightTheme, light, dark}=this.context;
        const theme= isLightTheme? light: dark;
        return (
           
                    <nav className={`flex flex-col flex-shrink-0 w-96 items-center justify-center rounded-t-md h-20 px-5 bg-${theme.bg} py-3  text-${theme.syntax}`}>
                    <h1 className="font-bold text-center text-xl">Context</h1>
                    <ul className={`flex flex-row space-x-3 text-${theme.syntax}`}>
                        <li>Home </li>
                        <li>About </li>
                        <li>Contact</li>
                    </ul>
                </nav>
               
        );
    }
}

export default Navbar
