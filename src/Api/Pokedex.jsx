import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "../Components/Pokemon";

const Pokedex = ()=>{
    const [pokemons, setPokemon] = useState([])

    useEffect(()=>{
        async function pokedexAPI(){

            const api = fetch(`https://pokeapi.co/api/v2/pokemon/`)
            const resposta = await (await api).json();
            setPokemon(resposta.results)
            
        }
        pokedexAPI()
    },[])
        
    return(
        <>
        <h1>Pokemon</h1>

            {pokemons.map((pokemon, index) =>(
                <div key={index}>
                    <Pokemon pokemon={pokemon}/>
                    
                </div>
            ))}
        
        </>
        )
}

export default Pokedex