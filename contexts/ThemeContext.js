
import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();



export class ThemeContextProvider extends Component {
    state={
        isLightTheme: true,
        light: {
            syntax: "gray-600",
            ui: "gray-100",
            bg: "gray-300"
        },
        dark: {
            syntax: "gray-100",
            ui: "gray-400",
            bg: "gray-800"
        }
    }
    toggleTheme=()=>{
        this.setState({
            isLightTheme: !this.state.isLightTheme
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider
