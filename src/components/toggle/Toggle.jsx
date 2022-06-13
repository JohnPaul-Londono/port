import React from 'react'
import "./toggle.css"
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react"
import { ThemeContext } from '../../context';
import { color } from '@mui/system';


const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type:"TOGGLE"})
    }
    return (
        <div className='toggle' style={{ backgroundColor:theme.state.darkMode ? "gray":"lightyellow" }}>
            <img src={Sun} alt="" className="toggle-icon" />
            <img src={Moon} alt="" className="toggle-icon" />
            <div className="toggle-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25, backgroundColor:theme.state.darkMode ? "orange":"midnightblue" }}></div>
        </div>
    )
}

export default Toggle