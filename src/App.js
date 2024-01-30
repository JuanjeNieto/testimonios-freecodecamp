
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros expertos sobre FreeCodeCamp</h1>

        <Testimonio 
        nombre='Irene Comesaña' 
        pais='España'
        imagen='imagen1'
        cargo='Profesora'
        empresa='Romero Vargas'
        testimonio='"Feliz por todo lo que obtienes de esta pagina web, muy útil y sencilla para aprender. La recomiendo competamente a mis alumnos que quieran estuidar programación"'
        
        />
        <Testimonio 
        nombre='Monkey D. Chadfy' 
        pais='Goa'
        imagen='imagen2'
        cargo='Marine'
        empresa='World Namibia Government'
        testimonio='"Tenemos que ser duros, si solo uno de esos eruditos hubiera subido al barco, todos los sacrificios que hemos hecho no servirían para nada... Tenemos que eliminar la última posibilidad de la existencia de este "mal"."'
        
        />
        
      </div>
    </div>
  );
}

export default App;
