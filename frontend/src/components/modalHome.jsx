import { useEffect, useRef } from "react";
import Icons from '../assets/img/icons/icon.jsx'

export default function ModalHome({open, onClose, event}) {
    const dialogRef = useRef(null);
    const prevFocusRef = useRef(null);

    useEffect(() => {
        if (!open) return;

        // mémorise l’élément focusé pour le restaurer à la fermeture
        prevFocusRef.current = document.activeElement;

        // ESC + trap du focus (Tab/Shift+Tab)
        const onKeyDown = (e) => {
            if (e.key === "Escape") {
                e.preventDefault();
                onClose?.();
                return;
            }
            if (e.key !== "Tab") return;

            const root = dialogRef.current;
            if (!root) return;
            const focusables = root.querySelectorAll(
                'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
            );
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault(); first.focus();
            } else if (e.shiftKey && document.activeElement === first) {
                e.preventDefault(); last.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        requestAnimationFrame(() => dialogRef.current?.focus());

        return () => {
        document.removeEventListener("keydown", onKeyDown);
        // restaure le focus où l’utilisateur était
        prevFocusRef.current?.focus?.();
        };
    }, [open, onClose]);

    if (!open || !event) return null;

    const { image, title, date, departement, description, epoque, tarif, web } = event

    const images = import.meta.glob('../assets/img/cards/*', { eager: true, as: 'url' });
    const imgSrc = images[`../assets/img/cards/${image}`];

    return(
        <div
            className="modal-backdrop"
            onClick={onClose}
        >
            <div 
                className="modal-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="event-title"
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}  
                ref={dialogRef}  
            >
                <div className="scroll">
                    <div className="banner">
                        <img src={imgSrc} alt={title} />
                        <button 
                            type="button" 
                            className="modal-close" 
                            onClick={onClose} 
                            aria-label="Fermer"
                        >
                            <Icons name="close" className="close-icon" />
                        </button>
                    </div>
                    <div className="infos-container">
                        <h2 id="event-title">{title}</h2>
                        <div className="content">
                            <div className="text">
                                <div className="description">
                                    <Icons name="description" className="description-icon" />
                                    <p>{description}</p>
                                </div>
                                <div className="web">
                                    <Icons name="website" className="website-icon" />
                                    <span>{web}</span>
                                </div>
                            </div>
                            <div className="details">
                                <div className="date">
                                    <Icons name="calendar" className="calendar-icon" />
                                    <span>{date}</span>
                                </div>
                                <div className="local">
                                    <Icons name="map" className="map-icon" />
                                    <span>{departement}</span>
                                </div>
                                <div className="euro">
                                    <Icons name="euro" className="euro-icon" />
                                    <span>{tarif}</span>
                                </div>
                                <div className="time">
                                    <Icons name="time" className="time-icon" />
                                    <span>{epoque}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}