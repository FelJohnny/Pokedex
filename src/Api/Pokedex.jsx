import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Pokedex.css'
import Pokemon from "../Components/Pokemon/Pokemon";

const Pokedex = ()=>{
    const [pokemons, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        useCallback
        async function pokedexAPI(){
            
            setLoading(true)
            const api = fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=400/`)
            const resposta = await (await api).json();  
            setPokemon(resposta.results)                
        }
        pokedexAPI()
    },[])
        
    return(
        <div >
        <h1>Pokemon</h1>
            {loading ?<h3>Carregando...</h3>:''}
            {pokemons.map((pokemon, index) =>(
                <div key={index}>
                    <Pokemon  loading={loading} setLoading={setLoading} pokemon={pokemon}/>
                    
                </div>
            ))}
        
        </div>
        )
}

export default Pokedex