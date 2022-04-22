import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import './style.css'

export default function Detalhes(){
    const navigate = useNavigate()

    const urlParams = new URLSearchParams(window.location.search)
    const myParam = urlParams.get('id')

    const [curso, setCurso] = useState({})

    const handleClose = () => {
        navigate('/')
    }

    useEffect(() => {
        fetch('./db/cursos.json', {
            headers: {
                Accept: "application/json"
            }
        })
        .then(res => res.json())
        .then(res => res.find(curso => curso.id === parseInt(myParam)))
        .then(res => setCurso(res))
    }, [])

    return (
        <div className="detalhes-section">
            <header className="header-app">
                Informações curso
                <i className="gg-close" onClick={() => handleClose()}></i>
            </header>
             
            <div className="body-detalhes">
                <div className="descricao">
                    <img src={curso.img_icon} alt="ícone curso" />
                    <div className="descricao-detalhes">
                        <span>{curso.nome}</span>
                        <span>Facilitador: {curso.professor}</span>
                    </div>
                </div>

                <div className="block-realizacao">
                    <div className="icon-wrapper">
                        <i className="gg-calendar-today"></i>
                    </div>
                    <div className="data-conclusao">
                        <span className="texto-cinza">Realizado em <br /></span>
                        <span>{curso.dt_realizacao}</span>
                    </div>
                </div>

                <div className="block-carga-horaria">
                    <div className="icon-wrapper">
                        <i className="gg-alarm"></i>
                    </div>
                    <div className="carga-horaria">
                        <span className="texto-cinza">Carga horária <br /></span>
                        <span>{curso.carga_horaria} horas</span>
                    </div>
                </div>

                <div className="block-conteudo">
                    <span className="texto-cinza">Conteúdo</span>
                    <ul>
                        {curso.conteudo &&
                            curso.conteudo.map((conteudo, index) => (
                                <li key={index}>{conteudo}</li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </div>
    )
}