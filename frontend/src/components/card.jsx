import Icons        from '../assets/img/icons/icon.jsx'

export default function Card({data, onOpen}) {
    const { image, title, date } = data

    const images = import.meta.glob('../assets/img/cards/*', { eager: true, as: 'url' });
    const imgSrc = images[`../assets/img/cards/${image}`];

    return(
        <article>
            <div className="thumbnail">
                <img src={imgSrc} alt={title} />
                <div className="date-container">
                    <span className="date">{date}</span>
                </div>
            </div>
            <div className="body">
                <div className="title-container">
                    <h3>{title}</h3>
                </div>
                <hr />
                <button
                    type="button"
                    className="more"
                    onClick={() => onOpen?.(data)}             // ← déclenche l’ouverture
                    aria-haspopup="dialog"                     // annonce qu’une modale s’ouvrira
                    aria-label={`En savoir plus sur ${title}`} // nom accessible complet
                >
                    <span className="see-plus">En savoir plus</span>
                    <span className="arrow-icon" aria-hidden="true">
                        <Icons name="chevronRight" className="right-icon" />
                    </span>
                </button>            
            </div>
        </article>  
    )
}