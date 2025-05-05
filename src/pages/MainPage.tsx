import Titulo from "../components/Titulo"
import Navegacion from "../components/Navegacion"
import Formulario from "../components/Formulario"
import ListaTODOs from "../components/ListaTODOs"

const MainPage = () => {
    return <div className="container">
        <Titulo />
        <Navegacion />
        <Formulario />
        <ListaTODOs />
    </div>
}

export default MainPage