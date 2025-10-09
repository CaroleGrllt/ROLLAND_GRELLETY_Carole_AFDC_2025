import { useEffect, useId, useRef, useState } from "react";
import Icons from '../assets/img/icons/icon.jsx'

export default function Filter({title, data, onSelect, selectedValues}){
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    const triggerRef = useRef(null);
    const listId = useId();

    const toggle = () => setOpen(v => !v);
    const close = () => {
        setOpen(false)
        requestAnimationFrame(() => triggerRef.current?.focus());
    };

    // clic en dehors
    useEffect(() => {
        if (!open) return;
        const onDown = (e) => {
        if (!wrapperRef.current?.contains(e.target)) close();
        };
        document.addEventListener("pointerdown", onDown);
        return () => document.removeEventListener("pointerdown", onDown);
    }, [open]);

    // Échap pour fermer
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === "Escape" && close();
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    const handleSelect = (value) => {
        onSelect?.({ type: title, value });
        close(); // ferme après sélection
    };

    return (
        <div className="filter-wrapper" ref={wrapperRef}>
            <div 
                className={`filter ${open ? "open" : ""}`}
                ref={triggerRef}
                role="button"
                tabIndex={0}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={listId}
                onClick={toggle}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")  {
                        e.preventDefault()
                        toggle()
                    }
                }}
            >
                <span>{title}</span>
                <button
                    type="button" 
                    aria-hidden="true" 
                    tabIndex={-1}                
                >
                    <Icons 
                        name="chevronDown" 
                        aria-hidden="true" 
                        className={`chevron-down ${open ? "rotated" : ""}`} 
                    />
                </button>
            </div>
            <div className={`filter-dropdown ${open ? "open" : ""}`}>
                <div className="scroll">
                    <p id={`${listId}-help`} className="sr-only">
                        Tabulation pour parcourir les options, Entrée pour sélectionner, Échap pour fermer.
                    </p>
                    <ul role="listbox" id={listId} aria-label={title} aria-describedby={`${listId}-help`}>
                        {data.map((d) => {
                            const isSelected = selectedValues.includes(d);
                            return (
                                <li
                                    key={d}
                                    data-id={d}
                                    data-type={title.toLowerCase()}
                                    role="option"
                                    aria-selected={isSelected}
                                    tabIndex={isSelected ? -1 : 0}
                                    aria-disabled={isSelected || undefined}
                                    className={isSelected ? "is-selected" : ""}
                                    title={isSelected ? "Déjà sélectionné" : undefined}
                                    onClick={() => !isSelected && handleSelect(d)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                        if (!isSelected) handleSelect(d);
                                        }
                                    }}
                                >
                                {d}
                                </li>
                            );
                        })}                    
                    </ul>
                </div>
            </div>
        </div>
    )
}