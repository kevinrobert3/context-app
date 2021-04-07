import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export class Booklist extends Component {
    static contextType=ThemeContext
    render() {
        const {isLightTheme, light, dark}=this.context;
        const theme= isLightTheme? light: dark;
        
        return (
            <div className="w-full flex items-center justify-center">

                <ul className={`flex flex-col space-y-2 h-auto w-96 rounded-b-md  px-5 py-3  bg-${theme.ui} }`}>
                    <li className={`h-auto font-medium px-5 py-3 cursor-pointer  text-${theme.syntax}  bg-${theme.bg} rounded-md flex items-center justify-center`}>kings</li>
                    <li className={`h-auto font-medium px-5 py-3 cursor-pointer  text-${theme.syntax}  bg-${theme.bg} rounded-md flex items-center justify-center`}>the final</li>
                    <li className={`h-auto font-medium px-5 py-3 cursor-pointer text-${theme.syntax}  bg-${theme.bg} rounded-md flex items-center justify-center`}>name</li>
                </ul>
                
            </div>
        )
    }
}

export default Booklist
