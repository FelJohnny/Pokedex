import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Pokedex.css'
import Pokemon from "../Components/Pokemon/Pokemon";

const Pokedex = ()=>{
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const [pesquisa, setPesquisa] = useState('')
    const [resultadoPesquisa, setResultadopesquisa]=useState(null)

    useEffect(()=>{
        
        async function pokedexAPI(){
            
            setLoading(true)
            const api = fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=400/`)
            const resposta = await (await api).json();
            setPokemons(resposta.results)                
        }
        pokedexAPI()
    },[])
    
    
    useEffect(()=>{ 
        if(!loading){

            async function handleChange(){
                setLoading(true)
                const api = fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=400/`)
                const resposta = await (await api).json();
                const teste = resposta.results.filter(pokemon =>pokemon.name.includes(pesquisa))
                console.log(teste)
                setPokemons(teste)     
                
            }
            handleChange()
        }
        },[pesquisa])
        
    
    
    
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
            {pokemons.map((pokemon, index) =>(
                <div key={index}>
                    
                    <Pokemon  loading={loading} setLoading={setLoading} pokemon={pokemon} keey={index} pesquisa={pesquisa}/>
                </div>
            ))}
        
        </div>
        </>
        )
}

export default Pokedex