import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType=ThemeContext;
   
    render() { 
        const {toggleTheme}= this.context;
        return ( 
            <>
            <button onClick={()=>{
                console.log("hey")
                toggleTheme( )

            }} className="w-96 py-2 bg-green-600 rounded-md">Theme</button>

            </>
         );
    }
}
 
export default ThemeToggle;