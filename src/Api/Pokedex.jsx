import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Pokedex.css'
import Pokemon from "../Components/Pokemon/Pokemon";

const Pokedex = ()=>{
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [pesquisa, setPesquisa] = useState('')
    
    useEffect(()=>{    
        async function pokedexAPI(){
            setLoading(true)
            const api = fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=400/`)
            const resposta = await (await api).json();
            setPokemons(resposta.results)                
        }
        pokedexAPI()
    },[])     
    
    const pokeFilter = pokemons.filter((pokemon)=> pokemon.name.startsWith(pesquisa))
   
    
    return(
        <>
        <h1></h1>
            <input 
                type="text" 
                onChange={({target})=> setPesquisa(target.value)}
                value={pesquisa} 
            />
        <div className="teste">
        {loading ?<h3>Carregando...</h3>:''}
        
        {pokeFilter.map((pokemon, index) =>(
            <div key={index}>
                    
            <Pokemon  loading={loading} setLoading={setLoading} pokemon={pokemon} keey={index} pesquisa={pesquisa}/>
            </div>
        ))}
        
        </div>
        </>
        )
}

export default Pokedex