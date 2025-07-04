import { useEffect, useState } from 'react'
import Titulo from "../components/Titulo"
import Navegacion, { Pagina } from "../components/Navegacion"
import Formulario from "../components/Formulario"
import ListaTODOs, { type TODO } from "../components/ListaTODOs"

const URL = "http://localhost:5000"

const MainPage = () => {
    const [listaTODOs, setListaTODOs  ] = useState<TODO[]>([])

    const httpObtenerTODOsAsyncAwait = async () => {
        try {
            const resp = await fetch(`${URL}/todos`)
            const data = await resp.json()
            setListaTODOs(data)
        } catch(error) {
            console.error(error)
        }
    }

    const httpGuardarTODO = async (todo : TODO) => {
        const resp = await fetch(`${URL}/todos`, {
            method : "post",
            body : JSON.stringify(todo),
            headers : {
                "content-type" : "application/json"
            }
        })
        const data = await resp.json()
    }

    useEffect(() => {
        httpObtenerTODOsAsyncAwait()
    }, [])

    const agregarTODO = async (texto : string) => {
        await httpGuardarTODO({
            descripcion : texto
        })
        await httpObtenerTODOsAsyncAwait()
    }

    return <div className="container">
        <Titulo texto="TODO App" pagina={Pagina.Main} />
        <Navegacion pagina={ Pagina.Main } />
        <Formulario agregar={ agregarTODO } />
        <ListaTODOs todos={ listaTODOs } esHistorico={ false } />
    </div>
}

export default MainPage