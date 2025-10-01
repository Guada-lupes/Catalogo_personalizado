import React from "react";
import { useState, useContext } from "react";
import "../styles/FormComponentStyle.css"
import { Form } from '../contexts/FormContext'

//este componente recibe de su padre el id y el value
export const InputChecked = ({id, value, text}) => {
    //traemos del contexto la funcion que maneja añadir la zona a la data
    const {zoneHandle} = useContext(Form)
    //esta constante nos permitirá modificar el renderizado del checked
    const [inputChecked, setInputChecked] = useState(false)
    //maneja el onChange, cambian el valor del checked y ejecutando la función que modifica la data
    function changeHandle(checked, value, id) {
        setInputChecked(!inputChecked);
        zoneHandle(checked, value, id)
    }
    return (
    <>
      <label htmlFor={id} className="label-text">
        {text}
      </label>
      <input
        className="check-box-input"
        id={id}
        type="checkbox"
        checked={inputChecked}
        value={value}
        onChange={(e)=>changeHandle(e.target.checked, value, id)}
      />
    </>
  );
};
