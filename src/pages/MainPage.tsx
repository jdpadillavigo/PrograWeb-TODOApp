import { useState } from 'react'
import Titulo from "../components/Titulo"
import Navegacion, { Pagina } from "../components/Navegacion"
import Formulario from "../components/Formulario"
import ListaTODOs, { type TODO } from "../components/ListaTODOs"

const MainPage = () => {
    const listaPersistenteStr = localStorage.getItem("TODOS")
    let listaPersistente : TODO[]
    if (listaPersistenteStr == null) {
        listaPersistente = []
    } else {
        listaPersistente = JSON.parse(listaPersistenteStr)
    }

    const [ listaTODOs, setListaTODOs ] = useState<TODO[]>(listaPersistente)

    const agregarTODO = (texto : string) => {
        listaTODOs.push({
            id : listaTODOs.length + 1,
            descripcion : texto
        })
        setListaTODOs([...listaTODOs])
    }

    return <div className="container">
        <Titulo texto="TODO App" pagina={Pagina.Main} />
        <Navegacion pagina={ Pagina.Main } />
        <Formulario agregar={ agregarTODO } />
        <ListaTODOs todos={ listaTODOs } esHistorico={ false } />
    </div>
}

export default MainPage