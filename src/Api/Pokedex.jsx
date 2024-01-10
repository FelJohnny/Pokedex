import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Pokedex.css'
import Pokemon from "../Components/Pokemon/Pokemon";

const Pokedex = ()=>{
    const [pokemons, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        
        async function pokedexAPI(){
            
            setLoading(true)
            const api = fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=400/`)
            const resposta = await (await api).json();
            console.log(resposta.results)
            setPokemon(resposta.results)                
        }
        pokedexAPI()
    },[])


    return(
        <>
        <h1>Pokemon</h1>
        <div className="teste">
            {loading ?<h3>Carregando...</h3>:''}
            {pokemons.map((pokemon, index) =>(
                <div key={index}>
                    <Pokemon  loading={loading} setLoading={setLoading} pokemon={pokemon} keey={index}/>
                </div>
            ))}
        
        </div>
        </>
        )
}

export default Pokedex