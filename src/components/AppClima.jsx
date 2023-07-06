import useClima from "../hooks/useClima";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Spinner from "./Spinner";


function AppClima() {

    const {resultado, spinner, noResultado} = useClima()
    
    return ( 
        <>
            <main className="dos-columnas">
                <Formulario/>
                { spinner ? <Spinner/> : resultado?.name ? <Resultado/> : noResultado ? <p>{noResultado}</p> : <p>El clima se va a mostrar aquí</p> }
            </main>
        
        </>
     );
}

export default AppClima;