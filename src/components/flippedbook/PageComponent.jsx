import React from 'react'
import "../../styles/PagecomponentStyle.css"
import { useForm } from "../../contexts/FormContext";

export const PageComponent = ({pg}) => {
    const { formData } = useForm();
        const agencyColor = formData.color ? { backgroundColor: formData.color } : {backgroundColor: "#2A34C6"};
  return (
    <section className='page-number'>
        <div className='line left' style={agencyColor}></div>
        <p>{pg}</p>
        <div className='line right' style={agencyColor}></div>
    </section>
  )
}
