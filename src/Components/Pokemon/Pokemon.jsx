import React, { useEffect, useRef, useState } from "react";
import './Pokemon.css'

const Pokemon = ({pokemon, setLoading, loading, keey})=>{
    const [dados, setDados] =useState(null);

    useEffect(()=>{
        async function puxaDados(){
           const dado = fetch(pokemon.url)
           const resposta = await(await dado).json()
           setTimeout(()=>{
               setDados(resposta)
               setLoading(false)
            },resposta)
            
        }
        puxaDados()
    },[dados])


    const divSelecionada = useRef("");
    function apaga(){
        const elemento =divSelecionada.current
        elemento.style.display ='none'
    }   
    
if(dados&& loading!==true)
return(
    <div className="container" ref={divSelecionada}>
            <p>{keey}</p>
            <img src={dados.sprites.front_default} alt="Pokemon" />
            <img src={dados.sprites.back_default} alt="Pokemon" />
            <p><b>Nome:</b> {dados.name}</p>
            <p><b>Base de Experiencia: </b>{dados.base_experience}</p>
            <p><b>Tipo:</b> {dados.types.map(tipo=> tipo.type.name+' ' )}</p>

            <button onClick={apaga}>Apagar</button>
    </div>
)

}

export default Pokemon