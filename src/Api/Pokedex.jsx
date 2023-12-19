import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "../Components/Pokemon";

const Pokedex = ()=>{
    const [pokemons, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        async function pokedexAPI(){
            setLoading(true)
            const api = fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=145/`)
            const resposta = await (await api).json();
            
                setPokemon(resposta.results)
                
            
            
        }
        pokedexAPI()
    },[])
        
    return(
        <>
        <h1>Pokemon</h1>
            {loading ?<h3>Carregando...</h3>:''}
            {pokemons.map((pokemon, index) =>(
                <div key={index}>
                    <Pokemon  loading={loading} setLoading={setLoading} pokemon={pokemon}/>
                    
                </div>
            ))}
        
        </>
        )
}

export default Pokedex