'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import rickandmortyimage from "/home/ubuntu/Desktop/nextjs-rick-and-morty/public/rick-and-morty-characters.jpeg";



export default function Home() {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState("");
    const [characterIndex, setCharacterIndex] = useState(0);
    const [imageToDisplay, setImageToDisplay] = useState("https://rickandmortyapi.com/api/character/avatar/1.jpeg");
   
    useEffect(()=>{
        getCharacter();
        async function getCharacter(){
            const response = await fetch("https://rickandmortyapi.com/api/character",{method: "GET"});
            const data = await response.json();
            
            setCharacter(data.results[0].name);
            setLoading(false);

        }   
    }, []);
        
        
function CharacterName(){
    return (
        <div>
            <p>{loading}</p>
            <h2>{character}</h2>
        </div>
    )
}

function CharacterImg(){
    return (
        <div>
            <Image
            src={imageToDisplay}
            alt="Picture Rick and Morty Characters"
            height={500}
            width={500}
            priority={true}
            />
        </div>
    )
}

    return (
        <main>
           <h1>Rick and Morty Characters!</h1>
            <CharacterName/>
            <CharacterImg/>
        </main>
    );
}
