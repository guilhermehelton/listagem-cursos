import React from "react";
import { useEffect, useState } from "react";
import './style.css'
import Curso from "../../components/Curso";

export default function Home(){
    const [listaCursos, setListaCursos] = useState()

    useEffect(() => {
        fetch('./db/cursos.json', {
            headers: {
                Accept: "application/json"
            }
        })
        .then(res => res.json())
        .then(res => setListaCursos(res))
    }, [])

    return (
        <div className="home-section">
            <header className="header-app">
                Cursos
            </header>

            <div className="lista-section">
                <span className="concluidos">Concluídos</span>
                <span>Próximos</span>
            </div>

            <ul className="lista-cursos">
                {listaCursos &&
                    listaCursos.map((curso) => (
                        <Curso curso={curso}/>
                    ))
                }
            </ul>
        </div>
    )
}