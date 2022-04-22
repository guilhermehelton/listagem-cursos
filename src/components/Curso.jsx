import React from 'react'
import { useNavigate } from "react-router-dom";
import './Curso.css'

export default function Curso({ curso }){
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`/detalhes?id=${id}`)
    }

    return (
        <li className='curso-li' onClick={() => handleNavigate(curso.id)}>
            <div className='imagem-block'>
                <img src={curso.img_icon} alt="ícone do curso" />
            </div>
            
            <div className='info-block'>
                <span>{curso.nome}</span>
                <span className='data'>Realizado em: {curso.dt_realizacao}</span>
            </div>
        </li>
    )
}