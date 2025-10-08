import Icons from '../assets/img/icons/icon.jsx'

export default function Tag({ items, onRemove }) {
    if (!items?.length) return null;

    return (
        <div className="tags">
            {items.map(({ type, value }) => (
                <div key={value} className="tag" aria-label={`${type}: ${value}`}>
                    <span>{value}</span>
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
