import { useRef, useState } from "react";
import Banner1 from '../assets/img/banners/home-350.webp'
import Banner2 from '../assets/img/banners/home-800.webp'
import Banner3 from '../assets/img/banners/home-950.webp'
import Banner4 from '../assets/img/banners/home-1050.webp'
import Banner5 from '../assets/img/banners/home-1200.webp'
import Icons from '../assets/img/icons/icon.jsx'
import Filter from "../components/filter.jsx"
import Tag from "../components/tag.jsx"

export default function Home(){
    const [input, setInput] = useState("");
    const [tags, setTags] = useState([])
    const inputRef = useRef(null);

    const clearInput = () => {
        setInput("");
        inputRef.current.focus();
    }

    // appelé par <Filter/> à chaque sélection
    const handleSelect = ({ type, value }) => {
        setTags(prev => {
        // si déjà présent, ne rien faire
        if (prev.some(t => t.value === value)) return prev;
        return [...prev, { type, value }];
        });
    };

    const handleRemoveTag = (value) => {
        setTags(prev => prev.filter(t => t.value !== value));
    };

  const selectedValues = tags.map(t => t.value);

    return (
        <>
            <section className="hero">
                <div className="banner-visual">
                    <img
                        src={Banner1}
                        srcSet={`
                            ${Banner1} 350w,
                            ${Banner2} 800w,
                            ${Banner3} 950w,
                            ${Banner4} 1050w,
                            ${Banner5} 1200w
                        `}
                        sizes="
                            (min-width: 1200px) 1200px,
                            (min-width: 1050px) 1050px,
                            (min-width: 950px) 950px,
                            (min-width: 800px) 800px,
                            100vw
                        "
                        alt="Au Fil des Costumes — bannière"
                        className='banner-home'
                        aria-hidden="true"
                        role="presentation"
                    />
                    <h1>RECHERCHEZ VOTRE PROCHAIN <br/>ÉVÉNEMENT COSTUMÉ EN FRANCE !</h1>  
                </div>
                <div className="search-container">
                    <form className="search-form">
                        <div className="wrapper">
                            <input 
                                id='search' 
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                type="text" 
                                placeholder="Rechercher par mots-clés..."
                                aria-label="Rechercher par mots-clés"
                            />
                            <div className="icons-container">
                                <button 
                                    type="button" 
                                    onClick={clearInput} 
                                    aria-label="Effacer la recherche" 
                                    className={`close-icon ${input ? "is-visible" : ""}`}
                                    title="Effacer la recherche"
                                >
                                    <Icons aria-hidden='true' name="close" className='clear-icon' />
                                </button>
                                <Icons aria-hidden='true' name="glass" className='glass-icon' />
                            </div>
                        </div>
                    </form>
                    <div className="filters-container">
                        <Filter 
                            title="Epoque" 
                            data={["Antiquité", "Moyen Âge", "Renaissance", "XVIIe siècle", "XVIIIe siècle", "1er Empire", "2nd Empire", "Belle Epoque", "XXe siècle", "Contemporain"]} 
                            onSelect={handleSelect}
                            selectedValues={selectedValues}                        
                        />
                        <Filter 
                            title="Département" 
                            data={["Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Bretagne", "Centre-Val de Loire", "Corse", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandie", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"]} 
                            onSelect={handleSelect}
                            selectedValues={selectedValues}                        
                        />
                        <Filter 
                            title="Mois" 
                            data={["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]} 
                            onSelect={handleSelect}
                            selectedValues={selectedValues}                        
                        />
                        <Filter 
                            title="Tarif" 
                            data={["Gratuit", "Payant"]} 
                            onSelect={handleSelect}
                            selectedValues={selectedValues}                        
                        />
                    </div>
                    <div className="tags-container">
                        {/* TAGS SÉLECTIONNÉS */}
                        {tags.length > 0 && (
                            <Tag
                                items={tags}
                                onRemove={handleRemoveTag}
                            />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}