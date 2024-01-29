import React from "react";
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
    return(

        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={require(`../imagenes/${props.imagen}.jpg`)} alt="Imagen de Irene"/>
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
                <p className="texto-testimonio">{props.testimonio}</p>

            </div>
        </div>
    );
}

export default Testimonio;