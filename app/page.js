'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import rickandmortyimage from "/home/ubuntu/Desktop/nextjs-rick-and-morty/public/rick-and-morty-characters.jpeg";
import styles from "@/app/page.module.css";
import listofimages from "./listofimages";


export default function Home() {
    const [loading, setLoading] = useState(true);
    const [character, setCharacter] = useState("");
    const[showCard, setShowCard] = useState (styles.showCard);

    useEffect(()=>{
        getCharacter();
        async function getCharacter(){
            const response = await fetch("https://rickandmortyapi.com/api/character",{method: "GET"});
            const data = await response.json();
            
            setCharacter(data.results[1].name);
            setLoading(false);

        }   
    }, []);
        
        



function Card(props){
    const[showCard, setShowCard] = useState(false);
    
    function handleCardClick(){
        setShowCard(!showCard);
    }

    const {imageSrc} = props;
    return(
        <div className={styles.showBackOfCard}>
            <li className={showCard ? styles.showCard : styles.hideCard} onClick={handleCardClick}>  
                <Image
                    src={imageSrc}
                    alt="Picture Rick and Morty Characters"
                    height={200}
                    width={170}
                    priority={true}
                />
            </li>
        </div>
)}


    return (
        <main>
           <h1>Rick and Morty Memory Game!</h1>
           <section className={styles.gameBoard}>
                <ul>
                {listofimages.map((item, index) => {
                            return (
                               <Card imageSrc={item} key={index}/>
                        )})}
                    </ul>
           </section>
            
        </main>
    );
}
