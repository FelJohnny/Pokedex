import React, { useEffect, useState } from "react";

const Pokemon = ({pokemon, setLoading, loading})=>{
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
    },[])
    
if(dados&& loading!==true)
return(
    <>
        <img src={dados.sprites.front_default} alt="Pokemon" />
        <img src={dados.sprites.back_default} alt="Pokemon" />
        <p><b>Nome:</b> {dados.name}</p>
        <p><b>Base de Experiencia: </b>{dados.base_experience}</p>
        <p><b>Tipo:</b> {dados.types.map(tipo=> tipo.type.name+' ' )}</p>
        
        <hr />
    </>
)

}

export default Pokemon