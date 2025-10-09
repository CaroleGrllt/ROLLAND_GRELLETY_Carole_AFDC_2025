import Icons from '../assets/img/icons/icon.jsx'

export default function Tag({ items, onRemove }) {
    if (!items?.length) return null;

    return (
        <div 
            className="tags" 
            role="list"
            aria-label='Filtres sélectionnés'
            aria-live="polite"
            aria-relevant="additions removals"
        >
            {items.map(({ type, value }) => (
                <div key={value} className="tag" role="listitem" aria-labelledby={`tag-${type}-${value}`}>
                    <span id={`tag-${type}-${value}`} title={`${type}: ${value}`}>{value}</span>
                    <button
                        type="button"
                        className="tag-remove"
                        aria-label={`Retirer ${value}`}
                        onClick={() => onRemove(value)}
                        title="Retirer le filtre"
                    >
                        <Icons name="close" aria-hidden="true" />
                    </button>
                </div>
            ))}
        </div>
    );
}
