import React from 'react'
import { NavLink } from "react-router-dom"; 

const Footer = () => {
    return(
        <footer >
            <h1 className='tituloFooter'>Nuestras redes</h1>
            <div className='contenedor2'>
            <div className='tarjeta1'>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEvdleExBEEQhb+LgAzIABEgAkTgRIAIEAEhyAARkAGXAREgAuq7mrmanZuZ29uq/XNTdX92ut/r97qnb8LIZzIyPptHsA38rLDNmEvgFNgHPoFH4C7k+f05YuQWGWzAR4PkDTgs3Jsj4TXwUCLw8j0oOAMEyk+MqfFLMgsE8yJzBX9JplUoO7VMdU8Ndb/BgUVxOYHenWQAfvOnfQfAfYPgJRAsQlICm7cbwHYGvg8V36a5OcH3QOCY1mlwqQfaMLR68bSwM4F5D5wSG7Q1QMlXsLiTWloVTsp53qwehEv2lCzy2xHw2gMwDbF61S9tgdqycxJu1iA5rjzM5jZ1bH1s2tU6F2EXFWNqCrQpLrQauK/2qgWe90BQK97rYY0vVnDHunlKCqah0TYtkrnAbGC6NlZhz+837x+tl+x1gka36B/CnzgZFPaBJAAAAABJRU5ErkJggg==" className='iconos1' />
             <h2 className='textoFooter'>Twitter</h2>
            </div>
            <div className='tarjeta1'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUxJREFUSEu1lYFNwzAQRV8nYATKBMAE7QgwAXQCYALoBLQTABMAGzAC3QA2gAlAP7Ktw7V9DlJOsiIl9r3z+ftnxsQxmzg/PYBLYAGchKGa3sN4AV5bRbYAZ8A9MHd2+QHcAILtRQ2wAa5Gtk9rBPoTJcB/ksekW+DaEnKA2vLcqPwzJLDtuANuzZpz264coH4eVgDf4ZA1x0YO0PejOMECpJaHRvVPgObEWAZ16alhI+3CAh6BiwZgDahahdfKVIwFSNvHnYC8Lfky5TrVSwv4cWRpd+ABUu4egHfb38JZ5PUN6+zimoI8wBdwkGXfRVvpOWQPUGpt8ZA9mY45gxUgVe65aeui9QJ025NBjrGKXkDTKrSrmtn1AFyzi2Io3WoPkFvJkMv74Wg30fxqgJLDJtV6EtREqUtmpgs1KKPyrmgEPQDHQdqfJwf8ArJlSRlOmzLXAAAAAElFTkSuQmCC" className='iconos1' />
            <h2 className='textoFooter'>Faceboock</h2>
            </div>
            <div className='tarjeta1'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXRJREFUSEvFlbsuRFEUhr9pNFPQaDRDLy4vwLwBSokErQTxBHgDxNQukSh5AzyBywugVqmU5Je15WTZ+5x9ZnIyuztnr/X/a/3rsls0fFoN4zM0gjlgF+gCkxVZvgH3wDHw5G1jGWwAZ31KtwmcF309gSJ/7BM8uM0XM/EEYl+vQfAJLJuU++Z3AUiF3+MJpGcnQSBHaTxmdVEg+lbEIrkxP2FMpQi+I+DPBiDHcbv/ACSnMh41UhH/w/UZxAgUzQSwBiwCsnkAroCvRM3+cKsIgp49YMtldwpsA7fAkrvLJtgDLi3iaQfyAswCB0AocG2JDoET4A6YcQShwAMRBIk0pTuO4AhQhgNJJEy14QiwCiwYiYp8DbQtu+SGqCqyHNWeK5E9oz2l3i+2Z2UNygZNUoRlphnQcMWO5kb30UmuuypiBKWrQqv5NRFZ7u/SZSeQRtd1iFKZqL9VyNTyC7bv9uCobbMenFwpsuyG9iZnRZdj9AO5y0cZdyMG3QAAAABJRU5ErkJggg==" className='iconos1'/>
            <h2 className='textoFooter'>Intagram</h2>
            </div>
            <div className='tarjeta1'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbRJREFUSEvNleExBEEQRt9lQATIQAbIgAgQASJABIiADMiAiwARkAEioN5V99aYnZ37dVXXVVNXtzvTX/fr7tkZK7bZiv2zFgL7wDGwG+sbeANegHn8ToLoZbAN3AMK/BRON0JoL7w+AaeAwiObEjDaZ1ggvAWuJkI8B27C+VErm5aAEX5E1IcRea8XDOYB2AJ26kxaAqYsFpesFXR9dlQUeQU8ayaD1QK58TqwWAcPytfoepa4FFBoYbWAvM+AzXCah9xrIUXRs1/gDvBcU8DW08SjlQL/IptQqc+PMpCzm07CgYgsuIjMaplJwJkZ9taIFLCwdk9aZiEeMfXMdr4s0dcCoxTDm86NzN8LIIfQYso8h8z/NorvmzXIItsxdVvmO5250kl2nA59rkgiHtUgmZeHSiQWXwx5TXiF5Lzo1KvloJzo1qBNYSqFDMRlvTIb5+W96MAmIh+OenlJYWVu5GLNbIYjdQZ2z2MU8isOWIuykHnY68OhtMv0M3LuxqlJbgUtOsVEYtQ5jH4T5N+8q2oBmeaw6dD/sjbKbD8j97nLjsmaNUmuxSdz2fXQfb/yDP4AZJloGU7UfncAAAAASUVORK5CYII=" className='iconos1'/>
            <h2 className='textoFooter'>Whatsapp</h2>
            </div>
            </div>
        </footer>
    )
}
 
export default Footer

