import { useState } from 'react'
import Titulo from "../components/Titulo"
import Navegacion from "../components/Navegacion"
import Formulario from "../components/Formulario"
import ListaTODOs, { type TODO } from "../components/ListaTODOs"

const MainPage = () => {
    const [ listaTODOs, setListaTODOs ] = useState<TODO[]>([])

    const agregarTODO = (texto : string) => {
        listaTODOs.push({
            id : listaTODOs.length + 1,
            descripcion : texto
        })
        setListaTODOs([...listaTODOs])
    }

    return <div className="container">
        <Titulo texto="TODO App" />
        <Navegacion />
        <Formulario agregar={ agregarTODO } />
        <ListaTODOs todos={ listaTODOs } esHistorico={ false } />
    </div>
}

export default MainPage